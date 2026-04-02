# Content and Media Organization

## Content folders

- `client/src/content/projects/index.ts`
  - source of truth for portfolio project copy, credits, and gallery ordering
- `client/src/content/pages/about.ts`
  - about-page copy and page-specific media references
- `client/src/content/pages/resume.ts`
  - resume copy, credits, and PDF link
- `client/src/content/media/blob-media-map.ts`
  - generated Blob URL manifest used at runtime

## Blob path conventions

- `pages/about/<asset-name>.<ext>`
- `pages/resume/gretchen-ugalde-resume.pdf`
- `projects/<project-slug>/card/<asset-name>.<ext>`
- `projects/<project-slug>/hero/<asset-name>.<ext>`
- `projects/<project-slug>/renderings/<asset-name>.<ext>`
- `projects/<project-slug>/research/<asset-name>.<ext>`
- `projects/<project-slug>/drafting/<asset-name>.<ext>`
- `projects/<project-slug>/production/<asset-name>.<ext>`

## Workflow for adding a new page or project

1. Add or update the content in `client/src/content/...`.
2. Reference the original media URL or local PDF path in that content file.
3. Run `pnpm media:blob` with `BLOB_READ_WRITE_TOKEN` available.
4. Commit the updated generated Blob manifest once the migration completes.

## Notes

- Runtime components resolve media through `resolveMediaUrl(...)` so page code does not need to know whether an asset started as a Wix URL, a Manus CDN URL, or a local file.
- The generated Blob manifest is intentionally tracked in git so deployments do not depend on re-running the migration script.
