import React from 'react';
import { Navigate, Outlet, useLocation } from 'react-router';
import { Route, Routes } from 'react-router-dom';
// import './css/main.css';
import 'react-toastify/dist/ReactToastify.css';
import Header from './Component/Header/Header';
import Footer from './Component/Footer/Footer';
import Cart from './Pages/Cart/Cart';
import CourseDetail from './Pages/CourseDetail/CourseDetail';
import CourseList from './Pages/CourseList/CourseList';
import HomePage from './Pages/Home-page/Home-page';
import PersonalInfomation from './Pages/User/Personal-Infomation';
import SignIn from './Pages/User/SignIn';
import SignUp from './Pages/User/SignUp';
import './Sass/main.css';


function App() {
  return (
    <Routes>
      <Route path='/' element={
        <>
          <Header />
          <HomePage />
          <Footer />
        </>} />
      <Route path='/khoahoc' element={
        <>
          <Header />
          <CourseList />
          <Footer />
        </>} />
      <Route element={<RequireAuth />} >
        <Route path='/chitiet/:courseCode' element={
          <>
            <Header />
            <CourseDetail />
            <Footer />
          </>} />
        <Route path='/giohang' element={
          <>
            <Header />
            <Cart />
            <Footer />
          </>} />
        <Route path='/thongtincanhan' element={
          <>
            <Header />
            <PersonalInfomation />
          </>} />
      </Route>
      <Route path='/dangnhap' element={<SignIn />} />
      <Route path='/dangky' element={<SignUp />} />
    </Routes >

  );
}

export default App;

let RequireAuth = () => {
  let location = useLocation()
  let logged = localStorage.getItem("USER_SIGNIN")
  if (!logged) {
    return <Navigate to='/dangnhap' state={{ from: location }} />
  }
  return <Outlet />
}
