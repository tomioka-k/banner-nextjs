export const apiUrl = process.env.NEXT_PUBLIC_RESTAPI_URL;
export const apiToken = process.env.NEXT_PUBLIC_API_TOKEN;

export async function loadImages() {
  const res = await fetch(new URL(`${apiUrl}image`), {
    headers: {
      Authorization: `Token ${apiToken}`,
    },
  });
  const images = await res.json();
  return images;
}

export async function loadCategories() {
  const res = await fetch(new URL(`${apiUrl}category`), {
    headers: {
      Authorization: `Token ${apiToken}`,
    },
  });
  const categories = await res.json();
  return categories;
}

export async function loadTags() {
  const res = await fetch(new URL(`${apiUrl}tag`), {
    headers: {
      Authorization: `Token ${apiToken}`,
    },
  });
  const tags = await res.json();
  return tags;
}

export async function loadColors() {
  const res = await fetch(new URL(`${apiUrl}color`), {
    headers: {
      Authorization: `Token ${apiToken}`,
    },
  });
  const colors = await res.json();
  return colors;
}

export async function loadImageCount() {
  const res = await fetch(new URL(`${apiUrl}image/count/`), {
    headers: {
      Authorization: `Token ${apiToken}`,
    },
  });
  const imageCount = await res.json();
  return imageCount;
}
