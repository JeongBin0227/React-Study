import React from 'react'
import {Route, Link} from 'react-router-dom'
import About from './About'
import Home from './Home'
import Profiles from './Profiles'
import HistorySample from './HistorySample'
import WithRouterSample from './WithRouterSample'
import './App.css'

function App() {
  return (
    <div>
      <ul>
        <li>
          <Link to="/">홈</Link>
        </li>
        <li>
          <Link to="/about">소개</Link>
        </li>
        <li>
          <Link to='/profiles'> 프로필 </Link>
        </li>
        <li>
          <Link to='/history'> 히스토리 예제 </Link>
        </li>
      </ul>
      <Route path="/" component={Home} exact={true}/>
      <Route path="/about" component={About}/>
      <Route path="/info" component={About}/>
      <Route path="/profiles" component={Profiles}/>
      <Route path="/history" component={HistorySample}/>
      <WithRouterSample/>
    </div>
  )
}

export default App
