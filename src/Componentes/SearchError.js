import React, { Component } from 'react'
import { BiSolidError } from "react-icons/bi";
import errorGif from "../media/Error.gif"


export class SearchError extends Component {
  render() {
    return (
      <div>
        <div className='text-center my-3'>
            <img src={errorGif} style={{width:'20%',height:'20%'}} alt='error'></img>
        </div>
        <h2 className='text-center'><BiSolidError/> Error 404: No results found!!</h2>
      </div>
    )
  }
}

export default SearchError
