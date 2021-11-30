import React, { Component } from 'react'
import data  from "../store.js"

export default class Products extends Component {
    render() {
        return (
            <div>
                <div className="row  text-center mt-5 pt-5">
                   {data.map((value,index)=>{
                       return(
                       <div key={value.id} className="col-md-4 my-3">
                            <div  className="item  ">
                             <img height="320" className="w-100" src={value.image} alt="" />
                             <div className="card-title">
                                 <h6 className="my-4">{value.title}</h6>
                                 <span>${value.price}</span>
                             </div>
                             <button onClick={()=>{
                                 this.props.addItem(value)
                            }} className="btn mainColor w-100 ">Add to cart</button>
                       </div>
                       </div>
                       )
                   })}
                </div>
            </div>
        )
    }
}
