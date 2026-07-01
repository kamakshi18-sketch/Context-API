import React, { useState } from 'react'
import Componnentone from './components/Componnentone'
import Userconetxt from './components/Userconetxt'
import Navbar from './components/Navbar'
import CounterUseReducer from './components/CounterUseReducer'
import {products} from './components/Product'
import { cartReducer,initialState } from './components/CartReducer'
import { useReducer } from 'react'
// import UseCallbackandUseMemo from './components/UseCallbackandUseMemo'
import UseMemo from './components/UseMemo'
const App = () => {
  // const user="kamakshi"
    const [state,dispatch]= useReducer(cartReducer,initialState);
    const[cupon,setCupon]=useState("")

  return (
    <>
    {/* <Userconetxt.Provider value={user}>
    <Navbar/>   
                                             
    </Userconetxt.Provider> */}
           
    {/* <Componnentone/> */}
    {/* <CounterUseReducer/> */}
    {/* <UseCallbackandUseMemo/> */}
    <UseMemo/>
    <h1>Cart</h1>
    <input type="number" placeholder='dicount btao' value={cupon}
    onChange={(e)=>setCupon(e.target.value)}/>
    <h2>Total:Rs{state.total}</h2>
    {
      products.map((product)=>(
        <div key={product.id}
             style={{
              border:"1px solid gray",
              padding:15,
              marginBottom:15,
              height:"300",
              width:"200px"
             }}
            >
              <h3>{product.tittle}</h3>
              <p>{product.price}</p>
              <button onClick={()=>dispatch({
                type:"add_item",
                payload:product
              })}>
                Add to Cart
              </button>
              <button onClick={()=>dispatch({
                type:"increase_quantity",
                payload:product
              })}>
                Increase Quantity
              </button>
              <button onClick={()=>dispatch({
                type:"apply_cupon",
                payload:Number(cupon)
              })}>
                Apply Coupon
              </button>
              <button onClick={()=>dispatch({
                type:"clear_cart",
                payload:product
              })}>
                Clear Cart
              </button>
            </div>
      ))
    }
    <h2> Cart </h2>
        {state.cart.map((item)=>(
          <div key={item.id}>
            {item.name}
            {"-"}
            Qty : {item.quantity}
        </div>
        ))}
    </>
  )
}

export default App

// ye provider hai value transfer karta hai 