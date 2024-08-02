type ImageMap = Record<string, string>;

export const importAll = async (r: Record<string, () => Promise<{ default: string }>>): Promise<ImageMap> => {
  const images: ImageMap = {};
  for (const path in r) {
    const mod = await r[path]();
    const key = path.replace(/^.*[\\/]/, ''); 
    images[key] = mod.default;
  }
  return images;
};