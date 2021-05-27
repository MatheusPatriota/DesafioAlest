import React from 'react'
import 'font-awesome/css/font-awesome.min.css';
import axios from 'axios';

class Card extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      produtos: []
    }
  }

  componentDidMount() {
    axios.get("http://localhost:8000/produtos")
      .then(response => {
        this.setState({ produtos: response.data })
      })
      .catch(error => {
        console.log(error)
      })
  }

  // update(key) {
  //   axios.put(`http://localhost:8000/atualizar-produto/${key}`, this.state)
  //     .then(response => {
  //       this.setState({ produtos: response.data })
  //     })
  //     .catch(error => {
  //       console.log(error)
  //     })
  // }


  delete(id) {
    // 
    console.log(id)
    axios.delete(`http://localhost:8000/remover-produto/${id}`)
      .then(res => {
        console.log(res);
        console.log(res.data);
      })
    alert("Produto deletado")
    window.location.reload();

  }

  render() {
    const { produtos } = this.state;
    return (

      <div className="text-center col-12 row">
        {

          produtos.length ?

            produtos.map(produto =>
              <div className=" m-auto mb-3 col-3" key={produto.id} >
                <div className="card text-white bg-light-gray " >
                  <div className="card-header" id="product-name">{produto.nome}</div>
                  <div>
                    <img src={require('../assets/tenis.jpg').default} height={200} width={200} alt="foto-produto" className="img-fluid mt-4 img-produto" />
                  </div>
                  <div className="card-body">
                    <h4 className="card-title" id="product-picture">{produto.nome}</h4>
                    <p className="card-text" id="product-price">R${produto.valor}</p>
                  </div>
                </div>
                {/* <form onSubmit={this.delete }> */}
                  <button type="button" className="btn btn-info btn-actions m-auto"><i className="fa fa-edit" /></button>
                  
                {/* </form> */}
                
                <button type="button" className="btn btn-info btn-actions" onClick={() => this.delete(produto.id)}><i className="fa fa-trash" /></button>
               
              </div>
            ) :
            null
        }
      </div>





    );
  }
}


export default Card;