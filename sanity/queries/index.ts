
import { mockProducts, mockCategories, mockBrands, mockBlogs } from "@/constants/mockData";

const getCategories = async (quantity?: number) => {
  return quantity ? mockCategories.slice(0, quantity) : mockCategories;
};

const getAllBrands = async () => {
  return mockBrands;
};

const getLatestBlogs = async () => {
  return mockBlogs;
};

const getDealProducts = async () => {
  return mockProducts.filter(p => p.status === "hot");
};

const getProductBySlug = async (slug: string) => {
  return mockProducts.find(p => p.slug.current === slug) || null;
};

const getBrand = async (slug: string) => {
  return mockBrands.find(b => b.slug.current === slug) || null;
};

const getMyOrders = async (userId: string) => {
  return []; // Mocking empty orders
};

const getAllBlogs = async (quantity: number) => {
  return mockBlogs.slice(0, quantity);
};

const getSingleBlog = async (slug: string) => {
  return mockBlogs.find(b => b.slug.current === slug) || null;
};

const getBlogCategories = async () => {
  return [{ title: "Tech" }];
};

const getOthersBlog = async (slug: string, quantity: number) => {
  return mockBlogs.filter(b => b.slug.current !== slug).slice(0, quantity);
};

export {
  getCategories,
  getAllBrands,
  getLatestBlogs,
  getDealProducts,
  getProductBySlug,
  getBrand,
  getMyOrders,
  getAllBlogs,
  getSingleBlog,
  getBlogCategories,
  getOthersBlog,
};
