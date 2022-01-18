import React from 'react';
import { Route, Switch } from 'react-router-dom';
import CourseDetail from './Pages/CourseDetail/CourseDetail';
import CourseList from './Pages/CourseList/CourseList';
import HomePage from './Pages/Home-page/Home-page';
import './Sass/main.css';
<<<<<<< HEAD
import './css/main.css';
=======
import 'react-toastify/dist/ReactToastify.css';
>>>>>>> 3ee22a30bcb791248e7021f33151b34eee4a9742
import HomeTemplates from './Templates/HomeTemplates';
import SignIn from './Pages/User/SignIn';
import SignUp from './Pages/User/SignUp';

function App() {
  return (
    <div className="App">
      <Switch>
        <HomeTemplates exact path="/" Component={HomePage} />
        <HomeTemplates exact path="/khoahoc" Component={CourseList} />
        <HomeTemplates exact path="/chitiet/:courseCode" Component={CourseDetail} />
        <Route exact path="/dangnhap" component={SignIn} />
        <Route exact path="/dangky" component={SignUp} />
      </Switch>
    </div>
  );
}

export default App;
