import React from 'react'
import { useParams, Link } from "react-router-dom"

function ProductPage(props) {
	const { id } =useParams()
	const products = props.products
	const product = products.find(x => x._id === id)
	return <div>
		<div>
			<Link to="/">Back</Link>
		</div>
		<div className="details">
			<div className="details-image">
				<img src={product.image} alt="product"></img>
			</div>
		<div className="details-info">
			<ul>
				<li>
					<h4>{product.name}</h4>
				</li>
				<li>
					{product.rating} stars {product.numReviews} Reviews
				</li>
				<li>
					<b>{product.price}</b>
				</li>
				<li>
					Size:
					<div>
						{product.size.map(size =>
						<button key={size}>{size}'</button>)}
					</div>
				</li>
			</ul>
		</div>
		</div>
		<div className="details-action">
              <ul>
                <li>Price: {product.price}</li>
                <li>
                  Status:{' '}
                  {product.countInStock > 0 ? 'In Stock' : 'Unavailable.'}
                </li>
                <li>
                  {product.countInStock > 0 && (
                    <button
                      className="button primary"
                    >
                      Order now
                    </button>
                  )}
                </li>
              </ul>
            </div>
		</div>
}

export default ProductPage
