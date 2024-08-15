import axiosInstance from "./axios";

const apiCategory = {
    getAll: () => {
        return axiosInstance.get("/categories").then((res) => res.data);
    },
    createCategory: (category) => {
        return axiosInstance.post("/categories", category).then((res) => res.data);
    },
    getCategoryById: (id) => {
        return axiosInstance.get(`/categories/${id}`);
    },
    editCategory: (id, category) => {
        return axiosInstance.put(`/categories/${id}`, category);
    },
    delCategoryById: (id) => {
        return axiosInstance.delete(`/categories/${id}`);
    },
    
};

export default apiCategory;