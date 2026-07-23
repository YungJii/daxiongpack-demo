export function useAssetUrl() {
  const baseURL = useRuntimeConfig().app.baseURL;

  return (path: string) => `${baseURL}${path.replace(/^\/+/, '')}`;
}
