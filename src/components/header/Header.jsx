import style from './header.module.css'
import { Link } from 'react-router-dom'

const Header = (props) =>{
   return(
      <header>
            <Link to='/'>
					<h1 className={style.logo}>STORE</h1>
            </Link>
				<nav>
					<Link to='/favourites'>
            		<button className={style.nav_item}>ИЗБРАННОЕ</button>
					</Link>
					<div className={style.cart_btn}>
						<button className={style.nav_item} onClick={props.openCart}>КОРЗИНА</button>
						<span className={style.count_cart_items}>{props.cartItems.length}</span>
					</div>
            	
            </nav>
      </header>
   )
} 

export default Header