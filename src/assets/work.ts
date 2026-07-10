import type { ImageMetadata } from 'astro';

/**
 * Central registry of engraving/work photos, keyed by their historical
 * public-path names ("/Foo.jpeg") so the service/gallery data arrays keep
 * their readable keys while the files themselves are optimized via
 * astro:assets.
 */
const modules = import.meta.glob<{ default: ImageMetadata }>('./work/*.jpeg', {
  eager: true,
});

export const work: Record<string, ImageMetadata> = Object.fromEntries(
  Object.entries(modules).map(([path, mod]) => [
    '/' + path.split('/').pop()!,
    mod.default,
  ])
);

/** Look up a work image by its "/Foo.jpeg" key, failing loudly at build time. */
export function workImage(key: string): ImageMetadata {
  const img = work[key];
  if (!img) throw new Error(`Unknown work image: ${key}`);
  return img;
}
