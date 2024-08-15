import  axiosInstance  from "./axios";

const apiProduct = {

    getAll: () => {
        return axiosInstance.get("/products?populate=*").then((res) => res.data);
    },
    getNewest: () => {
        return axiosInstance.get("/products?sort[0]=createdAt:desc&pagination[limit]=6&populate=*").then((res) => res.data);
    },
    getPromotion: () => {
        return axiosInstance.get("/products?filter[is_one_sale][$eq]=true&pagination[limit]=6&populate=*").then((res) => res.data);
    },
    getDetailProductBySlug: (slug) =>{
        return axiosInstance.get(`/products?filters[slug][$eq]=${slug}&populate=*`).then((res) => res.data);
    },
    getProductPagination: (page, limit) => {
            return axiosInstance.get(`/products?pagination[page]=${page}&pagination[pageSize]=${limit}&populate=*`).then((res) => res.data);
    },
    getProductByCatSlug: (slug) => {
        return axiosInstance
          .get(`/products?filters[category][slug][$eq]=${slug}&populate=*`)
          .then((res) => res.data);
      },
}

export default apiProduct;