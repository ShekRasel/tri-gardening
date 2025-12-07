//localhost uri
export const APP_URL = process.env.NEXT_PUBLIC_APP_URL;

//making slug
export const createSlug = (slugValue) => {
  return slugValue.toLowerCase().trim().replace(/\s+/g, "-");
};
