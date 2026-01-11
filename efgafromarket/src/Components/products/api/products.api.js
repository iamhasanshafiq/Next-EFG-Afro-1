import axios from "axios";

// const BASE_URL = import.meta.env.VITE_SERVER_URL;
const BASE_URL = "http://15.184.197.96";

// ================== CATEGORIES ==================
const getCategories = async () => {
    try {
        const res = await axios.get(
            `${BASE_URL}/catalog/api/categories`
        );

        return res.data.status === "success"
            ? res.data.data.items
            : [];
    } catch (error) {
        console.error("Categories API error:", error);
        throw error;
    }
};

// ================== PRODUCTS ==================
const getProducts = async (limit = 10) => {
    try {
        const res = await axios.get(
            `${BASE_URL}/catalog/api/products/public/all?limit=${limit}`
        );

        return res.data.status === "success"
            ? res.data.data.items
            : [];
    } catch (error) {
        console.error("Products API error:", error);
        throw error;
    }
};

export {
    getCategories,
    getProducts,
}
