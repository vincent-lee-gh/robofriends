import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import './containers/App.css'
import  App  from './containers/App';
import SearchBox from './components/SearchBox';
import {BrowserRouter as Router, Switch, Route,  withRouter } from 'react-router-dom';
import About from './pages/About';
import Sidebar from './components/Sidebar';
import reportWebVitals from './reportWebVitals';
import 'tachyons';

function ShowSearchbox(props) {
  const isAppPage = props.isAppPage;
  if (isAppPage) {
    <div className='searchBox' >

    <SearchBox />
    </div>
  }
}

ReactDOM.render(
  <React.StrictMode>
    <Router>
    <div className='container'>
    <div className='headline' >
            <div className='g-left' id='headline-L'>
              <h1 >RoboFriends</h1>
              {/* <div className='searchBox' >

              <SearchBox />
              </div> */}
            </div>
            <div className='g-right' >
              {/* <Router> */}
                <div >
                  <Sidebar  />
                </div>
              {/* </Router> */}
              {/* <button><a href="https://github.com/vincent-lee-gh" target="_blank"><SiGithub size='2.5em' /></a> </button> */}
              
            </div>
            
          </div>
          <Switch>
            <Route path="/app" exact component={App} />
            <Route path="/info/about" exact component={About} />

              // <App />
          </Switch>
      
    </div>
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
