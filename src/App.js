import React from 'react';
import { Route, Switch } from 'react-router-dom';
import CourseDetail from './Pages/CourseDetail/CourseDetail';
import CourseList from './Pages/CourseList/CourseList';
import HomePage from './Pages/Home-page/Home-page';
import './Sass/main.css';
import { Redirect } from 'react-router';

// import './css/main.css';
import 'react-toastify/dist/ReactToastify.css';
import HomeTemplates from './Templates/HomeTemplates';
import SignIn from './Pages/User/SignIn';
import SignUp from './Pages/User/SignUp';
import Cart from './Pages/Cart/Cart';

function App() {
  return (
    <div className="App">
      <Switch>
        <HomeTemplates exact path="/" Component={HomePage} />
        <HomeTemplates exact path="/khoahoc" Component={CourseList} />
        <Route exact path="/chitiet/:courseCode" render={(props) => {
          return localStorage.getItem("USER_SIGNIN") ? <CourseDetail props={props} /> : <Redirect to='/dangnhap' />
        }}></Route>
        <Route exact path="/giohang" render={(props) => {
          return localStorage.getItem("USER_SIGNIN") ? <Cart /> : <Redirect to='/dangnhap' />
        }}></Route>
        <Route exact path="/dangnhap" component={SignIn} />
        <Route exact path="/dangky" component={SignUp} />
      </Switch>
    </div>
  );
}

export default App;
