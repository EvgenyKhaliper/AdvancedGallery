import { GET_IMAGES_URL, API_KEY } from "./constants";

export const buildGetImagesUrl = (query) => {
  return `${GET_IMAGES_URL}?key=${API_KEY}&q=${query}`;//use some params builder
};
