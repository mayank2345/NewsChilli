import React, { Component } from 'react'
import { Link } from 'react-router-dom'

export class Navbar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      searchTerm: '',
    };
  }

  handleInputChange = (e) => {
    this.setState({ searchTerm: e.target.value });
  };

  handleSearch = () =>  {
    const { searchTerm } = this.state;
    this.props.onSearch(searchTerm);
    
  };
  render() {
    return (
      <div style={{ width: '100%', zIndex: '1' }}>
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
          <div className="container-fluid">
            <Link className="navbar-brand" to="/"><img src='redchill.jpg' alt='..' style={{ width: '40px', height: '30px', backgroundBlendMode: 'darken' }}></img></Link>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
              <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <li className="nav-item">
                  <Link className="nav-link active" aria-current="page" to="/">Home</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/business">Business</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/entertainment">Entertainment</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/health">Health</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/science">Science</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/sports">Sports</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/technology">Technology</Link>
                </li>
              </ul>
              <div className="d-flex">
                <input className="form-control me-2" type="search" value={this.state.searchTerm} onChange={this.handleInputChange} placeholder="Search" aria-label="Search" />
                <Link className="btn btn-outline-success" to={`/searchResult`}  onClick={this.handleSearch}>Search</Link>
              </div>
            </div>
          </div>
        </nav>
      </div>
    )
  }
}

export default Navbar
