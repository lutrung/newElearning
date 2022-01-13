import React from 'react';
import CourseList from './Pages/CourseList/CourseList';
import HomePage from './Pages/Home-page/Home-page';
import './Sass/main.css';
import HomeTemplates from './Templates/HomeTemplates';
import { Route, Switch } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Switch>
        <HomeTemplates exact path="/" Component={HomePage} />
        <Route exact path="/khoahoc" component={CourseList} />
      </Switch>
    </div>
  );
}

export default App;
