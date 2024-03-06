import React, { Fragment, useState } from 'react';
import { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { useQuery } from '@tanstack/react-query';
//import HeaderComponent from './components/HeaderComponent/HeadComponent'
import { routes } from './routes';
import DefaultComponent from './components/DefaultComponent/DefaultComponent';
import axios from 'axios';
import { isJsonString } from './utils';
import { jwtDecode } from 'jwt-decode';
import * as UserService from './services/UserService';
import Loading from './components/LoadingComponent/Loading';
import { updateUser } from './redux/slides/userSilde';
import { useDispatch, useSelector } from 'react-redux';


function App() {
  const dispatch = useDispatch();
  const [isLoading,setIsLoading]=useState(false)
  
  const user = useSelector((state)=>state.user)
  useEffect(() => {
    setIsLoading(true)
    const { storageData, decoded } = handleDecoded();
    if (decoded?.id) {
      handleGetDetailsUser(decoded?.id, storageData);
    }
    setIsLoading(false)
  }, []);

  const handleDecoded = () => {
    let storageData = localStorage.getItem('access_token');
    let decoded = {};
    if (storageData && isJsonString(storageData)) {
      storageData = JSON.parse(storageData);
      decoded = jwtDecode(storageData);
    }
    return { decoded, storageData };
  };

  UserService.axiosJWT.interceptors.request.use(async (config) => {
      const currentTime = new Date();
      const { decoded } = handleDecoded();
      if (decoded?.exp < currentTime.getTime() / 1000) {
        try {
          const data = await UserService.refreshToken();
          config.headers['token'] = `Bearer ${data?.access_token}`;
        } catch (error) {
          console.error('Error refreshing token:', error);
        }
      }
  
      return config;
    },
    (err) => {
      return Promise.reject(err);
    }
  );

  const handleGetDetailsUser = async (id, token) => {
    const res = await UserService.getDetailsUser(id, token);
    dispatch(updateUser({ ...res?.data, access_token: token }));
  
  };

  const fetchApi = async () => {
    const res = await axios.get(`http://localhost:3001/api/product/get-all`);
    return res.data;
  };
  const query = useQuery({ queryKey: ['todos'], queryFn: fetchApi });
  console.log('query', query);
  return (
    <div>
      <Loading isLoading={isLoading}>
      <Router>
        <Routes>
          {routes.map((route) => {
            const Page = route.page;
            const ischeckAuth = !route.isPrivate || user.isAdmin
            const Layout = route.isshowHeader ? DefaultComponent : Fragment;
            return (
              <Route
                key={route.path}
                path={ischeckAuth && route.path}
                element={
                  <Layout>
                    <Page />
                  </Layout>
                }
              />
            );
          })}
        </Routes>
      </Router>
      </Loading>
    </div>
  );
}

export default App;