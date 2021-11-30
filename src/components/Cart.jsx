import React, { Component } from 'react'

export default class Cart extends Component {
    render() {
        
        return (
            <>
                <h2 className="cartIitems my-5 pt-5">Cart Items</h2>
                {this.props.cartItems.length === 0 ? <h5>Cart Is Empty</h5> : ''}
               {this.props.cartItems.map((value,index)=>{
                   return(
                    <div>
                        <div className="cartItem overflow-hidden text-center">
                    <div className="cartImg float-left">
                        <img className="w-100" src={value.image} alt="" />
                    </div>

                    <div className="cart-action float-left  ">
                        <h6>{value.title}</h6>
                        <p className="price">${value.price}</p>
                        <button onClick={()=>{
                            this.props.addItem(value)
                       }} className="btn btn-info">+</button>
                        <span className="px-2">{value.qty}</span>
                        <button onClick={()=>{
                            this.props.removeItem(value)
                       }} className="btn btn-danger">-</button>
                        <button onClick={()=>{
                            this.props.removeProduct(value)
                       }} className="btn btn-danger ml-2"><i className="fas fa-trash"></i></button>
                    </div>
                </div>
                <hr/>
                    </div>
                   )
               })}

            </>
        )
    }
}
