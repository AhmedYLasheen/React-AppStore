import React, { Component } from 'react'
import Navbar from './components/Navbar'
import Products from './components/Products'
import Cart from './components/Cart'

export default class App extends Component {
  state={cartItems:[]}

  componentDidMount(){
    let data=JSON.parse(localStorage.getItem('data'))
    if(data!==null){
      this.setState({cartItems:data})
    }
  }
  addToLocalStorage=(data)=>{
    localStorage.setItem("data",JSON.stringify(data))
  }

  addItem=(item)=>{
    let exist=this.state.cartItems.find((elm)=> elm.id === item.id)
      if(exist){
          let cart=this.state.cartItems.map((elm)=> elm.id === item.id ? {...exist,qty:exist.qty+1}:elm)
          this.setState({cartItems:cart})
          this.addToLocalStorage(cart)
      }
      else{
        let cart=[...this.state.cartItems,{...item,qty:1}]
        this.setState({cartItems:cart})
        this.addToLocalStorage(cart)
      }
  }

  removeItem =(item)=>{
    let exist=this.state.cartItems.find((elm)=> elm.id === item.id)
    if (exist.qty >1){
      let cart=this.state.cartItems.map((elm)=> elm.id === item.id ? {...exist,qty:exist.qty -1}:elm)
      this.setState({cartItems:cart})
      this.addToLocalStorage(cart)
    }
  }
    removeProduct=((item)=>{
      let cart=this.state.cartItems.filter((elm)=> elm.id !==item.id)
      this.setState({cartItems:cart})
      this.addToLocalStorage(cart)
    })
  render() {
    let totalQty=this.state.cartItems.reduce((x,y)=>x+y.qty,0)
    let totaPrice=this.state.cartItems.reduce((x,y)=>x+y.qty*y.price,0)
    return (
      <> 

        <Navbar totaPrice={totaPrice} totalQty={totalQty} />

          <div className="container-fluit">
            <div className="row">
              <div className="col-md-9">
               <Products addItem={this.addItem} />
              </div>
              <div className="col-md-3">
              
              
               <Cart removeProduct={this.removeProduct}
               removeItem={this.removeItem}
                addItem={this.addItem}
                 cartItems={this.state.cartItems}/>
              </div>
            </div>
          </div>

      </>
    )
  }
}
