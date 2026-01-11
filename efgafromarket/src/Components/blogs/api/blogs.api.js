// src/components/blogs/api/blogs.api.js
import axios from "axios";

// const SERVER_URL = import.meta.env.VITE_SERVER_URL;
const SERVER_URL = "http://15.184.197.96";


const BLOGS_API = `${SERVER_URL}/mkt/api/marketing/blogs`;

const getBlogs = async ({ category = "all" } = {}) => {
  try {
    const response = await axios.get(BLOGS_API, {
      params: category && category !== "all" ? { category } : {},
    });

    if (response.data?.status !== "success") {
      return { blogs: [], error: "Blogs not found" };
    }

    return {
      blogs: response.data?.data?.items ?? [],
      error: null,
    };
  } catch (error) {
    return { blogs: [], error: "Unable to fetch blogs" };
  }
};

export { getBlogs };
