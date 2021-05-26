import React from 'react'
import 'font-awesome/css/font-awesome.min.css';


const Card = () => {
  return (
    <div className="text-center col-3 m-auto mb-3">
      <div className="card text-white bg-light-gray mb-3" >
        <div className="card-header" id="product-name">Product</div>
        <div>
          <img src={require('../assets/tenis.jpg').default}  height={200} width={200} alt="foto-produto" className="img-fluid mt-4 img-produto" />
        </div>
        <div className="card-body">
          <h4 className="card-title" id="product-picture">Picture</h4>
          <p className="card-text" id="product-price">$Price</p>
        </div>
      </div>
      <button type="button" className="btn btn-info btn-actions m-auto"><i className="fa fa-edit" /></button>
      <button type="button" className="btn btn-info btn-actions"><i className="fa fa-trash" /></button>
    </div>


  )
}

export default Card;