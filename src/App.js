import React from 'react';
import { Route, Switch } from 'react-router-dom';
import CourseDetail from './Pages/CourseDetail/CourseDetail';
import CourseList from './Pages/CourseList/CourseList';
import HomePage from './Pages/Home-page/Home-page';
import './Sass/main.css';
import HomeTemplates from './Templates/HomeTemplates';

function App() {
  return (
    <div className="App">
      <Switch>
        <HomeTemplates exact path="/" Component={HomePage} />
        <HomeTemplates exact path="/khoahoc" Component={CourseList} />
        <HomeTemplates exact path="/chitiet/:courseCode" Component={CourseDetail} />
      </Switch>
    </div>
  );
}

export default App;
