import style from "./cartItem.module.css"

const CartItem = (props) => {
   return(
      <div className={style.cart_item}>
            <img className={style.cart_img} src={props.img} alt="img" />
            <h3 className={style.cart_title}>
               {props.title}
               <br />
               <span className={style.cart_price}>{props.price} руб.</span>
            </h3>
            <button onClick={()=> props.onRemoveCartItem(props.id)} className={style.close_btn}>Удалить</button>
      </div>
   )
}

export default CartItem