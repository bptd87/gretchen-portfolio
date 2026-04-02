import { describe, expect, it } from "vitest";
import { appRouter } from "./routers";
import type { TrpcContext } from "./_core/context";
import type { User } from "../drizzle/schema";

function createAdminContext(): TrpcContext {
  const adminUser: User = {
    id: 1,
    openId: "admin-test-user",
    email: "admin@test.com",
    name: "Admin User",
    loginMethod: "manus",
    role: "admin",
    createdAt: new Date(),
    updatedAt: new Date(),
    lastSignedIn: new Date(),
  };

  const ctx: TrpcContext = {
    user: adminUser,
    req: {
      protocol: "https",
      headers: {},
    } as TrpcContext["req"],
    res: {} as TrpcContext["res"],
  };

  return ctx;
}

function createNonAdminContext(): TrpcContext {
  const regularUser: User = {
    id: 2,
    openId: "regular-test-user",
    email: "user@test.com",
    name: "Regular User",
    loginMethod: "manus",
    role: "user",
    createdAt: new Date(),
    updatedAt: new Date(),
    lastSignedIn: new Date(),
  };

  const ctx: TrpcContext = {
    user: regularUser,
    req: {
      protocol: "https",
      headers: {},
    } as TrpcContext["req"],
    res: {} as TrpcContext["res"],
  };

  return ctx;
}

describe("admin.projects.list", () => {
  it("returns all projects for admin users", async () => {
    const ctx = createAdminContext();
    const caller = appRouter.createCaller(ctx);

    const projects = await caller.admin.projects.list();

    expect(Array.isArray(projects)).toBe(true);
    expect(projects.length).toBeGreaterThan(0);
  });

  it("throws error for non-admin users", async () => {
    const ctx = createNonAdminContext();
    const caller = appRouter.createCaller(ctx);

    await expect(caller.admin.projects.list()).rejects.toThrow();
  });
});

describe("admin.projects.create", () => {
  it("creates a new project for admin users", async () => {
    const ctx = createAdminContext();
    const caller = appRouter.createCaller(ctx);

    const result = await caller.admin.projects.create({
      slug: "test-project",
      title: "Test Project",
      theatre: "Test Theatre",
      year: "2024",
      category: "Drama",
      heroImage: "https://example.com/image.jpg",
      description: "Test description",
      designStatement: "Test design statement",
      scenicDesignerName: "Gretchen Ugalde",
      published: 0,
    });

    expect(result).toHaveProperty("id");
    expect(typeof result.id).toBe("number");
  });

  it("throws error for non-admin users", async () => {
    const ctx = createNonAdminContext();
    const caller = appRouter.createCaller(ctx);

    await expect(
      caller.admin.projects.create({
        slug: "test-project-2",
        title: "Test Project 2",
        theatre: "Test Theatre",
        year: "2024",
        category: "Drama",
        heroImage: "https://example.com/image.jpg",
        description: "Test description",
        designStatement: "Test design statement",
        scenicDesignerName: "Gretchen Ugalde",
      })
    ).rejects.toThrow();
  });
});

describe("admin.projects.update", () => {
  it("updates an existing project for admin users", async () => {
    const ctx = createAdminContext();
    const caller = appRouter.createCaller(ctx);

    const result = await caller.admin.projects.update({
      id: 1,
      title: "Updated Grease Title",
    });

    expect(result).toEqual({ success: true });
  });

  it("throws error for non-admin users", async () => {
    const ctx = createNonAdminContext();
    const caller = appRouter.createCaller(ctx);

    await expect(
      caller.admin.projects.update({
        id: 1,
        title: "Updated Title",
      })
    ).rejects.toThrow();
  });
});
