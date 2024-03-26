const getImage = (fileName: string): string => new URL(`../assets/${fileName}.png`, import.meta.url).href;

export { getImage };