const fileCache = new Map();

function encodePath(path) {
  return path.split('/').map(encodeURIComponent).join('/');
}

function getCodeFileUrl(project, file) {
  return `${import.meta.env.BASE_URL}code/${encodePath(project.baseDir)}/${encodePath(file)}`;
}

export function loadCodeFile(project, file) {
  const url = getCodeFileUrl(project, file);
  const cachedRequest = fileCache.get(url);

  if (cachedRequest) return cachedRequest;

  const request = fetch(url)
    .then((response) => {
      if (!response.ok) throw new Error(`Unable to load ${url}`);
      return response.text();
    })
    .catch((error) => {
      fileCache.delete(url);
      throw error;
    });

  fileCache.set(url, request);
  return request;
}

export function preloadCodeFile(project, file) {
  loadCodeFile(project, file).catch(() => undefined);
}
