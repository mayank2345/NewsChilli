import './App.css';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import React, { Component } from 'react'
import Navbar from './Componentes/Navbar';
import News from './Componentes/News';
import LoadingBar from 'react-top-loading-bar'
import Footer from './Componentes/Footer';
import SearchedNews from './Componentes/SearchedNews';


// Class based components. Easily manages methods.
export default class App extends Component {
  apiKey = process.env.REACT_APP_NEWS_API
  country = 'in'
  
  state = {
    progress : 0,
    searchResult: ''
  }

  setProgress = (progress)=>{
    this.setState({progress:progress})
  }

  handleSearch = (searchTerm) =>{
    this.setState({searchResult:searchTerm})

  }
  
  render() {
    return (
      <Router>
        <Navbar onSearch={this.handleSearch}/>
        <LoadingBar
        color='#f11946'
        height={3}
        progress={this.state.progress}
        />
        <Routes>
          <Route exact path='/' element={<News apiKey={this.apiKey} setProgress={this.setProgress}  key='home' pageSize={10} country={this.country} category='general'/>}></Route>
          <Route exact path='/business' element={<News apiKey={this.apiKey} setProgress={this.setProgress}  key='business' pageSize={10} country={this.country} category='business'/>}></Route>
          <Route exact path='/entertainment' element={<News apiKey={this.apiKey} setProgress={this.setProgress}  key='entertainment' pageSize={10} country={this.country} category='entertainment'/>}></Route>
          <Route exact path='/health' element={<News apiKey={this.apiKey} setProgress={this.setProgress}  key='health' pageSize={10} country={this.country} category='health'/>}></Route>
          <Route exact path='/science' element={<News apiKey={this.apiKey} setProgress={this.setProgress}  key='science' pageSize={10} country={this.country} category='science'/>}></Route>
          <Route exact path='/sports' element={<News apiKey={this.apiKey} setProgress={this.setProgress}  key='sports' pageSize={10} country={this.country} category='sports'/>}></Route>
          <Route exact path='/technology' element={<News apiKey={this.apiKey} setProgress={this.setProgress}  key='technology' pageSize={10} country={this.country} category='technology'/>}></Route>
          <Route exact path={`/searchResult`} element={<SearchedNews setProgress={this.setProgress} apiKey={this.apiKey} pageSize={10} query={this.state.searchResult}/>}></Route>        
        </Routes>
        <Footer />
      </Router>
      
    )
  }
}
