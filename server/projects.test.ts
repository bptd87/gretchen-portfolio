import { describe, expect, it, beforeAll } from "vitest";
import { appRouter } from "./routers";
import type { TrpcContext } from "./_core/context";
import { insertProject, insertProjectImage } from "./db";

function createContext(): TrpcContext {
  const ctx: TrpcContext = {
    user: null,
    req: {
      protocol: "https",
      headers: {},
    } as TrpcContext["req"],
    res: {} as TrpcContext["res"],
  };

  return ctx;
}

describe("projects.list", () => {
  it("returns list of published projects", async () => {
    const ctx = createContext();
    const caller = appRouter.createCaller(ctx);

    const projects = await caller.projects.list();

    expect(Array.isArray(projects)).toBe(true);
    expect(projects.length).toBeGreaterThan(0);
    expect(projects[0]).toHaveProperty("title");
    expect(projects[0]).toHaveProperty("slug");
    expect(projects[0]).toHaveProperty("heroImage");
  });
});

describe("projects.getBySlug", () => {
  it("returns project with galleries when slug exists", async () => {
    const ctx = createContext();
    const caller = appRouter.createCaller(ctx);

    const project = await caller.projects.getBySlug({ slug: "grease" });

    expect(project).toBeDefined();
    expect(project.title).toBe("Grease");
    expect(project.slug).toBe("grease");
    expect(project.galleries).toBeDefined();
    expect(project.galleries.renderings).toBeDefined();
    expect(Array.isArray(project.galleries.renderings)).toBe(true);
    expect(project.galleries.renderings.length).toBeGreaterThan(0);
  });

  it("throws error when project not found", async () => {
    const ctx = createContext();
    const caller = appRouter.createCaller(ctx);

    await expect(
      caller.projects.getBySlug({ slug: "nonexistent-project" })
    ).rejects.toThrow("Project not found");
  });
});
