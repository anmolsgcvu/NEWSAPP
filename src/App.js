import './App.css';

import React, { Component } from 'react'
import Nabar from './components/Nabar';
import News from './components/News';
import LoadingBar from 'react-top-loading-bar';

import { BrowserRouter as Router, Route, Switch} from 'react-router-dom';

export default class App extends Component {
  page = 5;
  api = '89ea725d81304262a61298e69cb47055'
  state = {
    pa:0
  }
  setp =(progress) =>{
    this.setState({progress: progress})
  }
  render() {
    return (
      <div>
        <Router>
        <Nabar/>
        <LoadingBar
        color='#f11946'
        progress={this.state.progress}
      />
        <Switch>
        <Route exact path='/'><News setp={this.setp} api={this.api}  key="home" page={this.page} category="general" country="in"/></Route>
          <Route exact path="/business"><News setp={this.setp} api={this.api}  key="business" page={this.page} category="business" country="in"/></Route>
          <Route exact path="/entertainment"><News setp={this.setp} api={this.api}  key="entertainment" page={this.page} category="entertainment" country="in"/></Route>
          <Route exact path='/general'><News setp={this.setp} api={this.api}  key="general" page={this.page} category="general" country="in"/></Route>
          <Route exact path='/health'><News setp={this.setp} api={this.api}  key="health" page={this.page} category="health" country="in"/></Route>
          <Route exact path='/science'><News setp={this.setp} api={this.api}  key="science" page={this.page} category="science" country="in"/></Route>
          <Route exact path='/sports'><News setp={this.setp} api={this.api}  key="sports" page={this.page} category="sports" country="in"/></Route>
          <Route exact path='/technology'><News setp={this.setp} api={this.api}  key="technology" page={this.page} category="technology" country="in"/></Route>
        </Switch>
        </Router>
      </div>
    )
  }
}
