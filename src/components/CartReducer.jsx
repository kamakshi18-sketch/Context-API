export const initialState={
    cart:[],
    total:0,
    discount:0
}
const calculateTotal=(cart,discount=0)=>{
    let total=cart.reduce((sum,item)=>sum + item.price*item.quantity,0)
    total=total-(total*discount)/100
    return total
}
export function cartReducer(state,action){
    switch(action.type){
        case "add_item":{
            const exisitingItem=state.cart.find((item)=>
                item.id===action.payload.id)
            let updatedCart;
            if (exisitingItem){
                updatedCart=state.cart.map((item)=>item.id===action.payload.id
            ? {... item,quantity:item.quantity+1}:item)
            }
            else{updatedCart=[
                ...state.cart,{
                    ...action.payload,
                    quantity:1
                }
            ]
                
            }
            const total=updatedCart.reduce((sum,item)=>sum+item.price*item.quantity,0)
            calculateTotal(updatedCart, state.discount)

            return{
                cart:updatedCart,
                total
            }
        }
        case"increase_quantity":{ 
            const updatedCart=state.cart.map(
                item=>item.id===action.payload.id ?{...item,quantity:item.quantity+1}:item
            )
            return{
                ...state,
                cart:updatedCart,
                total:calculateTotal(updatedCart,state.discount)
            }
        }
        case"apply_cupon":{ 
            return{
                ...state,
                discount:action.payload,
                total:calculateTotal(state.cart,action.payload)
            }
        }
        case"clear_cart":{ 
            return{
                cart:[],
                discount:0,
                total:0
            }
        }
        default:
            return state
    }
}