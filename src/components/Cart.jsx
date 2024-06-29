import React from 'react'
import "../components/cart.css"

const Cart = ({cartItems, addProduct, removeProduct}) => {
    const totalPrice = cartItems.reduce((price,item)=>price + item.quantity * item.price, 0)
  return (
    <div className='sport-items'>
        <div className='sport-item-header'><h1>Shopping Cart</h1></div>

        {cartItems.length === 0 && (
            <div className='sport-item-empty'>No items are added</div>
        )}

        <div>

            <table  width="100%" cellPadding={30}  >
                <tbody>
                    <tr>
                        <td><b>IMAGE</b></td>
                        <td><b>NAME</b></td>
                        <td><b>DESCRIPTION</b></td>
                        <td><b>INC & DEC</b></td>
                        <td><b>AMOUNT</b></td>
                    </tr>
                

            {cartItems.map((item)=>(

                    <tr>
                        <td><img className='sport-list-image' src={item.image} alt="" /></td>
                        <td><div className='sport-list-name'><h3>{item.name}</h3><div className='sport-list-rating'><p>{item.rating}</p></div></div></td>
                        <td><div className='sport-list-description'><p>{item.description}</p></div></td>
                        <td><div className='sport-list-function'>
                        <button className='sport-add'onClick={()=>addProduct(item)}>+</button>
                        <span className='quantity'>{item.quantity}</span>
                        <button className='sport-remove'onClick={()=>removeProduct(item)}>-</button>
                    </div></td>
                    <td><div className='sport-price'>₹{item.price}</div></td>
                    </tr>

                    
             
            )
            
            )}
            </tbody>
            </table>

        </div>
        <div className='sport-total-price'>
            Total Price
            <div className='sport-total'>₹{totalPrice}</div>
        </div>
        <div className='sport-checkout'>
            <button className='checkout'>Checkout</button>
        </div>

    </div>
  )
}

export default Cart