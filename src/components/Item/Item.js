import React from 'react'

const Item = () => {
  return (
    <div className="container p-3">
    <div className="card mb-3">
      <div className="row g-0">
        <div className="col-md-4 img-fluid p-3">
          <img src="https://http2.mlstatic.com/D_NQ_NP_320015-MLA25096921915_102016-O.jpg" className="img-fluid rounded-start" alt="..." />
        </div>
        <div className="col-md-8">
          <div className="card-body">
            <h3 className="card-title h1">Card title</h3>
            <p className="card-text">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores quos hic sit esse aliquid aliquam ipsa dicta quae fuga, recusandae praesentium deserunt eveniet molestiae vero expedita! Accusamus officiis nobis, ullam voluptatibus pariatur quo, eius quidem repellat, cumque assumenda quae hic error incidunt velit. In laborum dolorum maxime! Ratione, accusamus soluta.
            </p>
            <p><strong className="card-text h4">
              $5.000
            </strong>
            </p>
            <p className="card-text">
              <small className="text-muted lead">"Categoria"</small>              
            </p>
            <p className="card-text">
              <small className="text-muted lead">"Autor"</small>
            </p>
            <a href="..." className="btn btn-danger">
              "btnText"
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>
  )
}

export default Item