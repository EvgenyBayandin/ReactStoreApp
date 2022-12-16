import CartItem from "./cartItem/cartItem"
import style from './cart.module.css'

const Cart = (props) => {
   return(
      <div className={style.overlay}>
            <div className={style.cart}>
            <div className={style.title_block}>
               <h2>Корзина</h2>
               <button className={style.close_btn} onClick={props.closeCart}>Продолжить покупки</button>
            </div>
            
				{
					props.cartItems.length > 0 ? 
					<div className={style.cart_list}>
					{
						props.cartItems.map( obj => {
							return(
								<CartItem 
									key={obj.id}
									id={obj.id} 
									title={obj.title} 
									description={obj.description}
									price={obj.price} 
									img={obj.img}
									onRemoveCartItem={props.onRemoveCartItem}
								/>
							)
						}
					)
				}
               
            </div> 
					: <h2>Ваша корзина пуста</h2>
				}

            <div className={style.total_price}>
               <p className={style.total_price_text}>Итого: </p>
               <p className={style.total_price_summ}>{props.totalPrice} руб.</p>
               <button>Оформить заказ</button>
            </div>

            </div>
      </div>
   )
}

export default Cart