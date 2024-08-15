import axiosInstance from './axios';

const apiBrand = {
  getAll: () => {
    return axiosInstance.get('/brands');
  },

  getById: (id) => {
    return axiosInstance.get(`/brands/${id}`);
  },

  create: (data) => {
    return axiosInstance.post('/brands', data);
  },

  update: (id, data) => {
    return axiosInstance.put(`/brands/${id}`, data);
  },

  delete: (id) => {
    return axiosInstance.delete(`/brands/${id}`);
  }
};

export default apiBrand;