import React, {Component} from 'react';
// import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
// import Sidebar from '../components/Sidebar';
import  CardList  from '../components/CardList';
import SearchBox from '../components/SearchBox';
import Scroll from '../components/Scroll';
import ErrorBoundry from '../components/ErrorBoundry';
import './App.css';
import { SiGithub } from "react-icons/si";


// import { ReactComponent } from '*.svg';
// import { render } from '@testing-library/react';

class App extends Component {
  constructor(){
    super()
    this.state = {
      robots: [],
      searchfield: '',
    };
  }

componentDidMount(){
  fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => {
      return response.json();
    })
    .then(users =>{
      this.setState({robots: users})
    });
}

  onSearchChange = (event) =>{
    this.setState({searchfield: event.target.value })
    
  }

  render(){
    const { robots, searchfield } = this.state;
    const filteredRobots = robots.filter(robots =>{
      return robots.name.toLowerCase().includes(searchfield.toLowerCase());
    })
    const robotsLength = robots.length;
    if (!robotsLength){
      return (
        <div>
          <h1>Loading...</h1>
        </div>)
    }else{
      return(

        <div >
          
          {
          <div className='searchBox' >
              <SearchBox searchChange={this.onSearchChange} />
          </div>
          }


          <div className='cardList'>
            <Scroll>
                <ErrorBoundry>
                <CardList robots={filteredRobots} />
                </ErrorBoundry>
            </Scroll>
            
          </div>

        
      </div>

      );
    } 
  }
}

export default App;