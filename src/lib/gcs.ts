// src/lib/gcs.ts
import "server-only";
import { Storage } from "@google-cloud/storage";
import path from "path";

const keyFilePath = path.resolve(process.cwd(), "keygugli.json");

const storage = new Storage({
  keyFilename: keyFilePath,
});

const bucketName = "kykeonbucket";

export async function generateSignedUrl(
  objectName: string,
): Promise<string | null> {
  if (!objectName || typeof objectName !== "string") {
    return null;
  }

  const options = {
    version: "v4" as const,
    action: "read" as const,
    expires: Date.now() + 60 * 60 * 1000,
  };

  try {
    const [url] = await storage
      .bucket(bucketName)
      .file(objectName)
      .getSignedUrl(options);

    return url;
  } catch (error) {
    console.error(
      `Error generating signed URL for object "${objectName}":`,
      error,
    );
    return null;
  }
}
