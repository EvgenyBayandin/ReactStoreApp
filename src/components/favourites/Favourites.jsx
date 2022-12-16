import React from "react";
import style from "./favourites.module.css";
import axios from "axios";
import FavouritesCard from "./favouritesCard/FavouritesCard";
import { AppContext } from "../../App";

const Favourites = (props) => {

	const context = React.useContext(AppContext);

	const onAddToCart = (objToCart) => {
		axios.post('https://6351455adfe45bbd55bb7f1d.mockapi.io/cart', objToCart)
		context.setCartItems([...context.cartItems, objToCart]);
	}

	const onRemoveFavorites = (id) => {
		axios.delete(`https://6351455adfe45bbd55bb7f1d.mockapi.io/favourites/${id}`)
		context.setFavoritesItems((prev) => prev.filter(item => Number(item.id) !== Number(id))) 
	}

	return(
		<div className={style.products_section}>

         <div className={style.search}>
            <h2>Избранные товары</h2> 
         </div>
               
         <div className={style.products}>

				{                   
					context.favoritesItems.map( obj => {
						return(
						<FavouritesCard 
							key={obj.id} 
							id={obj.id}
							title={obj.title} 
							description={obj.description} 
							price={obj.price} 
							img={obj.img}
							onFavorite={
                        (id) => {
                        onRemoveFavorites(id)
                        }
                     }
							onPlus={
								(objToCart) => {
									onAddToCart(objToCart)
								}
							}
						/>
						)
					})
				}
         </div>
      </div>
   )
}

export default Favourites