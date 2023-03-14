import React, { Component } from 'react'

export class Newsiteam extends Component {
    
  render() {
    let {title, description, imgurl,author,date , newsUrl, source } = this.props;
    return (
      <div className='my-3'>
        <div className="card">
        <span className="position-absolute top-0  translate-middle badge rounded-pill bg-danger" style={{left: '90%', zIndex:'1'}}>{source}</span>
            <img src={imgurl?imgurl:"https://c.ndtvimg.com/2023-03/ir8aoek_elon-musk-old-video_625x300_09_March_23.jpg"} className="card-img-top" alt="..." />
            <div className="card-body">
                <h5 className="card-title">{title}...</h5>
                <p className="card-text">{description}...</p>
                <p className="card_text"><small className="text-muted">By {!author? "unknown":author} on {new  Date(date).toGMTString()}</small></p>
                <a href={newsUrl} target="_blank" className="btn btn-sn btn-dark" rel="noreferrer">read more</a>
            </div>
            </div>
      </div>
    )
  }
}

export default Newsiteam
