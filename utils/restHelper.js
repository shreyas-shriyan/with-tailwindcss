import axios from "axios";

// Helper to make requests to Strapi
export const GET = async (path) => {
  return await axios.get(getURL(path)).then(
    (response) => {
      return response.data;
    },
    (error) => {
      throw error.response;
    }
  );
};

export function getURL(path = "") {
  return `${process.env.STRAPI_API_URL}${path}`;
}
