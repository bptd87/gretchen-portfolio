import { COOKIE_NAME } from "@shared/const";
import { getSessionCookieOptions, serializeCookie } from "./_core/session";
import { systemRouter } from "./_core/systemRouter";
import { publicProcedure, router, adminProcedure } from "./_core/trpc";
import { getAllProjects, getProjectById, getProjectBySlug, getProjectImages, getAllProjectsForAdmin, insertProject, insertProjectImage, updateProject, deleteProject, deleteProjectImage } from "./db";
import { z } from "zod";

export const appRouter = router({
    // if you need to use socket.io, read and register route in server/_core/index.ts, all api should start with '/api/' so that the gateway can route correctly
  system: systemRouter,
  auth: router({
    me: publicProcedure.query(opts => opts.ctx.user),
    logout: publicProcedure.mutation(({ ctx }) => {
      const cookieOptions = getSessionCookieOptions(ctx.req);
      ctx.resHeaders.append(
        "Set-Cookie",
        serializeCookie(COOKIE_NAME, "", {
          ...cookieOptions,
          expires: new Date(0),
          maxAge: 0,
        })
      );

      return {
        success: true,
      } as const;
    }),
  }),

  projects: router({
    list: publicProcedure.query(async () => {
      const projectsList = await getAllProjects();
      return projectsList;
    }),
    
    getBySlug: publicProcedure
      .input(z.object({ slug: z.string() }))
      .query(async ({ input }) => {
        const project = await getProjectBySlug(input.slug);
        if (!project) {
          throw new Error("Project not found");
        }
        
        const images = await getProjectImages(project.id);
        
        // Group images by type
        const galleries = {
          renderings: images.filter(img => img.imageType === "rendering").map(img => img.imageUrl),
          production: images.filter(img => img.imageType === "production").map(img => img.imageUrl),
          research: images.filter(img => img.imageType === "research").map(img => img.imageUrl),
          drafting: images.filter(img => img.imageType === "drafting").map(img => img.imageUrl),
        };
        
        return {
          ...project,
          galleries,
        };
      }),

    getById: publicProcedure
      .input(z.object({ id: z.number().int().positive() }))
      .query(async ({ input }) => {
        const project = await getProjectById(input.id);
        if (!project) {
          throw new Error("Project not found");
        }

        const images = await getProjectImages(project.id);

        const galleries = {
          renderings: images.filter(img => img.imageType === "rendering").map(img => img.imageUrl),
          production: images.filter(img => img.imageType === "production").map(img => img.imageUrl),
          research: images.filter(img => img.imageType === "research").map(img => img.imageUrl),
          drafting: images.filter(img => img.imageType === "drafting").map(img => img.imageUrl),
        };

        return {
          ...project,
          galleries,
        };
      }),
  }),

  admin: router({
    projects: router({
      list: adminProcedure.query(async () => {
        const projectsList = await getAllProjectsForAdmin();
        return projectsList;
      }),

      create: adminProcedure
        .input(z.object({
          slug: z.string(),
          title: z.string(),
          theatre: z.string(),
          year: z.string(),
          category: z.string(),
          heroImage: z.string(),
          description: z.string(),
          designStatement: z.string(),
          directorName: z.string().optional(),
          choreographerName: z.string().optional(),
          musicDirectorName: z.string().optional(),
          scenicDesignerName: z.string(),
          costumeDesignerName: z.string().optional(),
          lightingDesignerName: z.string().optional(),
          soundDesignerName: z.string().optional(),
          projectionDesignerName: z.string().optional(),
          stageManagerName: z.string().optional(),
          photographyName: z.string().optional(),
          displayOrder: z.number().optional(),
          published: z.number().optional(),
        }))
        .mutation(async ({ input }) => {
          const projectId = await insertProject(input);
          return { id: projectId };
        }),

      update: adminProcedure
        .input(z.object({
          id: z.number(),
          slug: z.string().optional(),
          title: z.string().optional(),
          theatre: z.string().optional(),
          year: z.string().optional(),
          category: z.string().optional(),
          heroImage: z.string().optional(),
          description: z.string().optional(),
          designStatement: z.string().optional(),
          directorName: z.string().optional(),
          choreographerName: z.string().optional(),
          musicDirectorName: z.string().optional(),
          scenicDesignerName: z.string().optional(),
          costumeDesignerName: z.string().optional(),
          lightingDesignerName: z.string().optional(),
          soundDesignerName: z.string().optional(),
          projectionDesignerName: z.string().optional(),
          stageManagerName: z.string().optional(),
          photographyName: z.string().optional(),
          displayOrder: z.number().optional(),
          published: z.number().optional(),
        }))
        .mutation(async ({ input }) => {
          const { id, ...updates } = input;
          await updateProject(id, updates);
          return { success: true };
        }),

      delete: adminProcedure
        .input(z.object({ id: z.number() }))
        .mutation(async ({ input }) => {
          await deleteProject(input.id);
          return { success: true };
        }),

      addImage: adminProcedure
        .input(z.object({
          projectId: z.number(),
          imageUrl: z.string(),
          imageType: z.enum(["rendering", "production", "research", "drafting"]),
          displayOrder: z.number().optional(),
          caption: z.string().optional(),
        }))
        .mutation(async ({ input }) => {
          await insertProjectImage(input);
          return { success: true };
        }),

      deleteImage: adminProcedure
        .input(z.object({ id: z.number() }))
        .mutation(async ({ input }) => {
          await deleteProjectImage(input.id);
          return { success: true };
        }),
    }),
  }),
});

export type AppRouter = typeof appRouter;
