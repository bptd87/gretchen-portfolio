import type { Project } from "@/content/projects";
import { blobMediaMap } from "@/content/media/blob-media-map";

type RenderingBlock = NonNullable<Project["galleries"]["renderingBlocks"]>[number];

export function resolveMediaUrl(url?: string) {
  if (!url) {
    return url;
  }

  return blobMediaMap[url] ?? url;
}

function resolveArray(items?: string[]) {
  return items?.map((item) => resolveMediaUrl(item) ?? item) ?? items;
}

function resolveRenderingBlocks(blocks?: RenderingBlock[]) {
  return blocks?.map((block) => ({
    ...block,
    images: block.images.map((image) => resolveMediaUrl(image) ?? image),
  }));
}

export function resolveProjectMedia(project: Project): Project {
  return {
    ...project,
    heroImage: resolveMediaUrl(project.heroImage) ?? project.heroImage,
    cardImage: resolveMediaUrl(project.cardImage),
    galleries: {
      ...project.galleries,
      renderingBlocks: resolveRenderingBlocks(project.galleries.renderingBlocks),
      renderings: resolveArray(project.galleries.renderings),
      research: resolveArray(project.galleries.research),
      drafting: resolveArray(project.galleries.drafting),
      production: resolveArray(project.galleries.production),
    },
  };
}

export const blobPathGuide = {
  pages: "web/pages/<page-slug>/<asset-name>.webp and originals/pages/<page-slug>/<asset-name>.<ext>",
  projects:
    "web/projects/<project-slug>/<section>/<asset-name>.webp and originals/projects/<project-slug>/<section>/<asset-name>.<ext>",
  sections: ["card", "hero", "renderings", "research", "drafting", "production"],
} as const;
