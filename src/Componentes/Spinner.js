import React, { Component } from 'react'
import tenor from '../media/tenor.gif'

export class spinner extends Component {
  render() {
    return (
      <div className='text-center my-3'>
        <img src={tenor} style={{height:'50px', width:'50px'}} alt='Loading' />
      </div>
    )
  }
}

export default spinner