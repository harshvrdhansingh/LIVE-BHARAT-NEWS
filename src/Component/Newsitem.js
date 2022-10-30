 import React from 'react'

 const Newsitem = (props)=> {
   
    let  {title, description, imageUrl, newsUrl, date} = props
    return (
  
      <div className='my-3'>
        {/*  card body was copied from bootstrap vrsn 5.1 */}
        <div className="card" style={{width: "18rem"}}>
          <img src= { !imageUrl?"https://community.spotify.com/t5/image/serverpage/image-id/106208i2C0401950E6463A4/image-size/medium?v=v2&px=400":imageUrl} className="card-img-top" alt="..."/>
            <div className="card-body">
              <h5 className="card-title"> {title}</h5>
              <p className="card-text"> {description}</p>
              <p className="card-text"><small className="text-muted">Updated on {date} </small></p>
              <a  rel= "noreferrer" href={newsUrl} target="_blank" className="btn btn-sm btn-sucess"> Read More   </a>
            </div>
        </div>
      </div>
    )
  }
export default Newsitem