import fs from "fs";
import path from "path";

export interface NiloyCv {
  id: string;
  title: string;
  role: string;
  format: string;
  relativePath: string;
  htmlPath: string | null;
  description: string;
  updatedAt: string;
}

export interface CvManifest {
  niloy: NiloyCv[];
}

export interface SiteConfig {
  activeCvId: string;
  lastUpdated: string;
}

const MANIFEST_PATH = path.join(process.cwd(), "data", "cv-manifest.json");
const CONFIG_PATH = path.join(process.cwd(), "data", "config.json");

export function getManifest(): CvManifest {
  const content = fs.readFileSync(MANIFEST_PATH, "utf-8");
  return JSON.parse(content) as CvManifest;
}

export function getConfig(): SiteConfig {
  if (!fs.existsSync(CONFIG_PATH)) {
    return { activeCvId: "niloy-design-product-ai", lastUpdated: new Date().toISOString() };
  }
  const content = fs.readFileSync(CONFIG_PATH, "utf-8");
  return JSON.parse(content) as SiteConfig;
}

export function getActiveCv(): NiloyCv {
  const config = getConfig();
  const manifest = getManifest();
  const active = manifest.niloy.find((cv) => cv.id === config.activeCvId);
  if (!active) {
    return manifest.niloy[0];
  }
  return active;
}
