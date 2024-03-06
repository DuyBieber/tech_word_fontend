import axios from 'axios';

export const axiosJWT = axios.create()

export const loginUser = async (data) => {
  try {
    const res = await axios.post(`http://localhost:3001/api/user/sign-in`, data);
    return res.data;
  } catch (error) {
    throw error;
  }
};

export const signupUser = async (data) => {
  try {
    const res = await axios.post(`http://localhost:3001/api/user/sign-up`, data);
    return res.data;
  } catch (error) {
    throw error;
  }
};

export const getDetailsUser = async (id, access_token) => {
  try {
      const res = await axiosJWT.get(`http://localhost:3001/api/user/get-details/${id}`, {
          headers: {
              Authorization: `Bearer ${access_token}`,
          },
      });
      console.log('User Details Response:', res.data);
      return res.data;
  } catch (error) {
      // Xử lý lỗi nếu cần
      throw error;
  }
};
export const refreshToken = async () => {
  try {
    console.log('Calling refreshToken function');
    const res = await axios.post(`http://localhost:3001/api/user/refresh-token`,{
      withCredentials: true,
    });
    console.log('Refresh Token Response:', res.data);
    return res.data;
  } catch (error) {
    console.error('Error in refreshToken function:', error);
    throw error;
  }
};

export const logoutUser = async () => {
  const res = await axios.post(`http://localhost:3001/api/user/log-out`)
  return res.data
}
export const updateUser = async(id , data )=>{
    const res = await axios.put(`http://localhost:3001/api/user/update-user/${id}`,data)
    return res.data;
} 
