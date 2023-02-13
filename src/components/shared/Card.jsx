

function Card({title,desc,url,link}) {
  return (
    <div className="card w-96 glass">
        <figure><img src={url} alt="car!"/></figure>
          <div className="card-body text-white">
            <h2 className="card-title">{title}</h2>
            <p>{desc}</p>
            <div className="card-actions justify-end">
              <a href={link} target='_blank' rel="noreferrer" className="btn btn-primary">Check Out!</a>
            </div>
          </div>
    </div>
  )
}

export default Card