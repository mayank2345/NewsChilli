import React, { Component } from 'react'

export class NewsItem extends Component {


  render() {
    let { title, description, imgUrl, newsUrl, author, publishedAt, source } = this.props;
    return (
      <div className='my-3' >
        <div className="card">
          <div style={{display:'flex', justifyContent:'flex-end', position:'absolute', right:'0'}}>
            <span className="badge rounded-pill bg-danger">{source}</span>
          </div>
          <img style={{ maxHeight: '20rem' }} src={imgUrl} className="card-img-top" alt="..." />
          <div className="card-body">
            <h5 className="card-title">{title}</h5>
            <p className="card-text">{description}</p>
            <p className="card-text"><small className="text-muted">By {author} on {new Date(publishedAt).toGMTString()}</small></p>
            <a href={newsUrl} target='blank' className="link-primary">Read More</a>
          </div>
        </div>
      </div>
    )
  }
}

export default NewsItem
