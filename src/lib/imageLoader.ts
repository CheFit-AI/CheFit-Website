// Custom image loader to handle basePath correctly
export default function imageLoader({ src, width }: { src: string; width?: number }) {
  const basePath = '/CheFit-Website';
  // Only add basePath if src doesn't already have it
  const imageSrc = src.startsWith(basePath) ? src : `${basePath}${src}`;
  return imageSrc;
}
