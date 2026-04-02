import { del, list, put } from "@vercel/blob";

function normalizeKey(relKey: string): string {
  return relKey.replace(/^\/+/, "");
}

export async function storagePut(
  relKey: string,
  data: Buffer | Uint8Array | string,
  contentType = "application/octet-stream"
): Promise<{ key: string; url: string }> {
  const key = normalizeKey(relKey);
  const body =
    typeof data === "string" || Buffer.isBuffer(data) ? data : Buffer.from(data);
  const blob = await put(key, body, {
    access: "public",
    addRandomSuffix: false,
    contentType,
  });

  return { key, url: blob.url };
}

export async function storageGet(relKey: string): Promise<{ key: string; url: string; }> {
  const key = normalizeKey(relKey);
  const { blobs } = await list({
    prefix: key,
    limit: 10,
  });

  const blob = blobs.find(item => item.pathname === key);
  if (!blob) {
    throw new Error(`Blob not found for key "${key}"`);
  }

  return {
    key,
    url: blob.url,
  };
}

export async function storageDelete(relKey: string): Promise<void> {
  await del(normalizeKey(relKey));
}
