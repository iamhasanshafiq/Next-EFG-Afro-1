// src/components/blogs/api/categories.api.js
import axios from "axios";

const SERVER_URL = "https://api.efgafromarket.ae";

const CATEGORIES_API = `${SERVER_URL}/mkt/api/marketing/categories`;

const getCategories = async () => {
  try {
    const response = await axios.get(CATEGORIES_API);

    if (response.data?.status !== "success") {
      return { categories: [], error: "Categories not found" };
    }

    const data = response.data?.data;
    const items = Array.isArray(data) ? data : data?.items;

    return {
      categories: items ?? [],
      error: null,
    };
  } catch (error) {
    return { categories: [], error: "Unable to fetch categories" };
  }
};

export { getCategories };
