import { extname } from "node:path";
import { readFile, writeFile } from "node:fs/promises";
import { put } from "@vercel/blob";
import { aboutPageContent } from "../client/src/content/pages/about";
import { resumePageContent } from "../client/src/content/pages/resume";
import { getProjectSlug, projects } from "../client/src/content/projects/index";

type MediaEntry = {
  source: string;
  pathname: string;
};

function sanitizeFilenamePart(value: string) {
  return value
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "")
    .slice(0, 80);
}

function getRemoteExtension(url: string) {
  try {
    const pathname = new URL(url).pathname;
    const ext = extname(pathname);
    return ext || ".bin";
  } catch {
    return ".bin";
  }
}

function getRenderingBlockSection(title?: string) {
  const normalized = (title ?? "").toLowerCase();

  if (normalized.includes("production")) return "production";
  if (normalized.includes("research")) return "research";
  if (normalized.includes("drafting")) return "drafting";

  return "renderings";
}

function buildProjectMediaEntries() {
  const entries: MediaEntry[] = [];
  const seen = new Set<string>();

  const addEntry = (source: string | undefined, pathname: string) => {
    if (!source || seen.has(source)) {
      return;
    }
    seen.add(source);
    entries.push({ source, pathname });
  };

  for (const project of projects) {
    const slug = getProjectSlug(project);
    addEntry(project.cardImage, `projects/${slug}/card/cover${getRemoteExtension(project.cardImage ?? "")}`);
    addEntry(project.heroImage, `projects/${slug}/hero/hero${getRemoteExtension(project.heroImage)}`);

    const renderingBlocks = project.galleries.renderingBlocks ?? [];
    renderingBlocks.forEach((block, blockIndex) => {
      const section = getRenderingBlockSection(block.title);
      block.images.forEach((image, imageIndex) => {
        addEntry(
          image,
          `projects/${slug}/${section}/${String(blockIndex + 1).padStart(2, "0")}-${sanitizeFilenamePart(block.title ?? section)}-${String(imageIndex + 1).padStart(2, "0")}${getRemoteExtension(image)}`
        );
      });
    });

    (project.galleries.renderings ?? []).forEach((image, imageIndex) => {
      addEntry(
        image,
        `projects/${slug}/renderings/${String(imageIndex + 1).padStart(2, "0")}${getRemoteExtension(image)}`
      );
    });

    (project.galleries.production ?? []).forEach((image, imageIndex) => {
      addEntry(
        image,
        `projects/${slug}/production/${String(imageIndex + 1).padStart(2, "0")}${getRemoteExtension(image)}`
      );
    });

    (project.galleries.research ?? []).forEach((image, imageIndex) => {
      addEntry(
        image,
        `projects/${slug}/research/${String(imageIndex + 1).padStart(2, "0")}${getRemoteExtension(image)}`
      );
    });

    (project.galleries.drafting ?? []).forEach((image, imageIndex) => {
      addEntry(
        image,
        `projects/${slug}/drafting/${String(imageIndex + 1).padStart(2, "0")}${getRemoteExtension(image)}`
      );
    });
  }

  return entries;
}

async function fetchRemoteFile(url: string) {
  const response = await fetch(url);
  if (!response.ok) {
    throw new Error(`Failed to download ${url}: ${response.status} ${response.statusText}`);
  }

  const contentType = response.headers.get("content-type") ?? "application/octet-stream";
  const buffer = Buffer.from(await response.arrayBuffer());

  return { buffer, contentType };
}

async function uploadEntry(entry: MediaEntry) {
  if (entry.source.startsWith("/")) {
    const buffer = await readFile(`./public${entry.source}`);
    const blob = await put(entry.pathname, buffer, {
      access: "public",
      addRandomSuffix: false,
      allowOverwrite: true,
      contentType: "application/pdf",
    });

    return blob.url;
  }

  const { buffer, contentType } = await fetchRemoteFile(entry.source);
  const blob = await put(entry.pathname, buffer, {
    access: "public",
    addRandomSuffix: false,
    allowOverwrite: true,
    contentType,
  });

  return blob.url;
}

async function main() {
  if (!process.env.BLOB_READ_WRITE_TOKEN) {
    throw new Error("BLOB_READ_WRITE_TOKEN is required.");
  }

  const entries = [
    ...buildProjectMediaEntries(),
    {
      source: aboutPageContent.images.portrait.src,
      pathname: `pages/about/portrait${getRemoteExtension(aboutPageContent.images.portrait.src)}`,
    },
    {
      source: aboutPageContent.images.grandmother.src,
      pathname: `pages/about/grandmother${getRemoteExtension(aboutPageContent.images.grandmother.src)}`,
    },
    {
      source: resumePageContent.pdfHref,
      pathname: "pages/resume/gretchen-ugalde-resume.pdf",
    },
  ];

  const map: Record<string, string> = {};

  for (const entry of entries) {
    const url = await uploadEntry(entry);
    map[entry.source] = url;
    console.log(`Uploaded ${entry.pathname}`);
  }

  const fileContents = `export const blobMediaMap: Record<string, string> = ${JSON.stringify(map, null, 2)};\n`;
  await writeFile("client/src/content/media/blob-media-map.ts", fileContents, "utf8");
}

main().catch((error) => {
  console.error(error);
  process.exit(1);
});
