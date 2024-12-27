import axios from 'axios';

// Base URL from environment variables
const API_BASE_URL =
  import.meta.env.VITE_API_BASE_URL || 'http://localhost:5000/api'; // Corrected to use Vite's environment variables

// Axios instance with interceptors
const apiClient = axios.create({
  baseURL: API_BASE_URL,
});

// Add Authorization headers automatically
apiClient.interceptors.request.use(
  config => {
    const token = localStorage.getItem('authToken');
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  error => {
    return Promise.reject(error);
  }
);

// Centralized error handling
const handleError = error => {
  console.error('API Error:', error?.response?.data || error.message);
  throw new Error(
    error?.response?.data?.message ||
      'An unexpected error occurred. Please try again later.'
  );
};

// Fetch team members
export const fetchTeamMembers = async () => {
  try {
    const response = await apiClient.get('/team');
    return response.data;
  } catch (error) {
    handleError(error);
  }
};

// Fetch blog posts
export const fetchBlogs = async () => {
  try {
    const response = await apiClient.get('/blogs');
    return response.data;
  } catch (error) {
    handleError(error);
  }
};

// Fetch services
export const fetchServices = async () => {
  try {
    const response = await apiClient.get('/services');
    return response.data;
  } catch (error) {
    handleError(error);
  }
};

// Fetch contact information
export const fetchContactInfo = async () => {
  try {
    const response = await apiClient.get('/contact');
    return response.data;
  } catch (error) {
    handleError(error);
  }
};

// Send contact message
export const sendContactMessage = async formData => {
  try {
    const response = await apiClient.post('/contact', formData);
    return response.data;
  } catch (error) {
    handleError(error);
  }
};

// Create a blog post
export const createBlog = async blogData => {
  try {
    const response = await apiClient.post('/blogs', blogData);
    return response.data;
  } catch (error) {
    handleError(error);
  }
};

// Update a blog post
export const updateBlog = async (id, blogData) => {
  try {
    const response = await apiClient.put(`/blogs/${id}`, blogData);
    return response.data;
  } catch (error) {
    handleError(error);
  }
};

// Delete a blog post
export const deleteBlog = async id => {
  try {
    const response = await apiClient.delete(`/blogs/${id}`);
    return response.data;
  } catch (error) {
    handleError(error);
  }
};

// Create a service
export const createService = async serviceData => {
  try {
    const response = await apiClient.post('/services', serviceData);
    return response.data;
  } catch (error) {
    handleError(error);
  }
};

// Update a service
export const updateService = async (id, serviceData) => {
  try {
    const response = await apiClient.put(`/services/${id}`, serviceData);
    return response.data;
  } catch (error) {
    handleError(error);
  }
};

// Delete a service
export const deleteService = async id => {
  try {
    const response = await apiClient.delete(`/services/${id}`);
    return response.data;
  } catch (error) {
    handleError(error);
  }
};

// Create a team member
export const createTeamMember = async teamMemberData => {
  try {
    const response = await apiClient.post('/team', teamMemberData);
    return response.data;
  } catch (error) {
    handleError(error);
  }
};

// Update a team member
export const updateTeamMember = async (id, teamMemberData) => {
  try {
    const response = await apiClient.put(`/team/${id}`, teamMemberData);
    return response.data;
  } catch (error) {
    handleError(error);
  }
};

// Delete a team member
export const deleteTeamMember = async id => {
  try {
    const response = await apiClient.delete(`/team/${id}`);
    return response.data;
  } catch (error) {
    handleError(error);
  }
};
