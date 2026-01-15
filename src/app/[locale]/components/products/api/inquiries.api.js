import axios from "axios";

const BASE_URL = "https://api.efgafromarket.ae";
const INQUIRY_API = `${BASE_URL}/catalog/api/inquiries/guest`;

const createGuestInquiry = async (payload) => {
  try {
    const res = await axios.post(INQUIRY_API, payload);

    if (res.data?.status !== "success") {
      return { inquiry: null, error: "Failed to submit inquiry" };
    }

    return { inquiry: res.data?.data ?? null, error: null };
  } catch (err) {
    if (err?.response?.status === 404) {
      return { inquiry: null, error: "Product not found" };
    }
    return { inquiry: null, error: "Unable to submit inquiry" };
  }
};

export { createGuestInquiry };
