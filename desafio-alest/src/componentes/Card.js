import React from 'react'
import 'font-awesome/css/font-awesome.min.css';


const Card = () => {
  return (
    <div class="text-center col-3 m-auto mb-3">
      <div className="card text-white bg-light-gray mb-3" >
        <div className="card-header" id="product-name">Product</div>
        <div>
          <img src={require('../assets/tenis.jpg').default} roundedCircle height={200} width={200} alt="foto-produto"  className="img-fluid mt-4 img-produto"/>
        </div>
        <div className="card-body">
          <h4 className="card-title" id="product-picture">Picture</h4>
          <p className="card-text" id="product-price">$Price</p>
        </div>
      </div>
      <button type="button" class="btn btn-info btn-actions m-auto"><i class="fa fa-edit" /></button>
        <button type="button" class="btn btn-info btn-actions"><i class="fa fa-trash" /></button>
    </div>


  )
}

export default Card;