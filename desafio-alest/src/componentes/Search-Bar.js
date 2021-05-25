import React from 'react'
import 'font-awesome/css/font-awesome.min.css';


const SearchBar = () => {

    return (
        <div class="container mb-5 m-auto">
            <div class="row d-flex justify-content-center">
                <div class="col-md-9">
                    <div class="card p-4 ">
                        <div class="d-flex justify-content-center px-5">
                            <div class="search"> <input type="text" class="search-input" placeholder="Search..." name="" /> <a href="www.eth.com.br" class="search-icon"> <i class="fa fa-search"></i> </a> </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    )

}


export default SearchBar;