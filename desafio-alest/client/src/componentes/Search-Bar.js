import React from 'react'
import 'font-awesome/css/font-awesome.min.css';


const SearchBar = () => {

    return (
        <div className="container mb-5 m-auto">
            <div className="row d-flex justify-content-center">
                <div className="col-md-9">
                    <div className="card p-4 ">
                        <div className="d-flex justify-content-center px-5">
                            <div className="search"> <input type="text" className="search-input" placeholder="Search..." name="" /> <a href="www.eth.com.br" className="search-icon"> <i className="fa fa-search"></i> </a> </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    )

}


export default SearchBar;