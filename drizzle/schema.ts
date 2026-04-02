import { int, mysqlEnum, mysqlTable, text, timestamp, varchar } from "drizzle-orm/mysql-core";

/**
 * Core user table backing auth flow.
 * Extend this file with additional tables as your product grows.
 * Columns use camelCase to match both database fields and generated types.
 */
export const users = mysqlTable("users", {
  /**
   * Surrogate primary key. Auto-incremented numeric value managed by the database.
   * Use this for relations between tables.
   */
  id: int("id").autoincrement().primaryKey(),
  /** Manus OAuth identifier (openId) returned from the OAuth callback. Unique per user. */
  openId: varchar("openId", { length: 64 }).notNull().unique(),
  name: text("name"),
  email: varchar("email", { length: 320 }),
  loginMethod: varchar("loginMethod", { length: 64 }),
  role: mysqlEnum("role", ["user", "admin"]).default("user").notNull(),
  createdAt: timestamp("createdAt").defaultNow().notNull(),
  updatedAt: timestamp("updatedAt").defaultNow().onUpdateNow().notNull(),
  lastSignedIn: timestamp("lastSignedIn").defaultNow().notNull(),
});

export type User = typeof users.$inferSelect;
export type InsertUser = typeof users.$inferInsert;

/**
 * Projects table - stores portfolio project information
 */
export const projects = mysqlTable("projects", {
  id: int("id").autoincrement().primaryKey(),
  slug: varchar("slug", { length: 255 }).notNull().unique(),
  title: varchar("title", { length: 255 }).notNull(),
  theatre: varchar("theatre", { length: 255 }).notNull(),
  year: varchar("year", { length: 4 }).notNull(),
  category: varchar("category", { length: 100 }).notNull(),
  heroImage: text("heroImage").notNull(),
  description: text("description").notNull(),
  designStatement: text("designStatement").notNull(),
  // Credits
  directorName: varchar("directorName", { length: 255 }),
  choreographerName: varchar("choreographerName", { length: 255 }),
  musicDirectorName: varchar("musicDirectorName", { length: 255 }),
  scenicDesignerName: varchar("scenicDesignerName", { length: 255 }).notNull(),
  costumeDesignerName: varchar("costumeDesignerName", { length: 255 }),
  lightingDesignerName: varchar("lightingDesignerName", { length: 255 }),
  soundDesignerName: varchar("soundDesignerName", { length: 255 }),
  projectionDesignerName: varchar("projectionDesignerName", { length: 255 }),
  stageManagerName: varchar("stageManagerName", { length: 255 }),
  photographyName: varchar("photographyName", { length: 255 }),
  // Display settings
  displayOrder: int("displayOrder").default(0).notNull(),
  published: int("published").default(1).notNull(),
  createdAt: timestamp("createdAt").defaultNow().notNull(),
  updatedAt: timestamp("updatedAt").defaultNow().onUpdateNow().notNull(),
});

export type Project = typeof projects.$inferSelect;
export type InsertProject = typeof projects.$inferInsert;

/**
 * Project images table - stores gallery images for each project
 */
export const projectImages = mysqlTable("projectImages", {
  id: int("id").autoincrement().primaryKey(),
  projectId: int("projectId").notNull(),
  imageUrl: text("imageUrl").notNull(),
  imageType: mysqlEnum("imageType", ["rendering", "production", "research", "drafting"]).notNull(),
  displayOrder: int("displayOrder").default(0).notNull(),
  caption: text("caption"),
  createdAt: timestamp("createdAt").defaultNow().notNull(),
});

export type ProjectImage = typeof projectImages.$inferSelect;
export type InsertProjectImage = typeof projectImages.$inferInsert;