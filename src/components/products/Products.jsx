import React from 'react'
import axios from 'axios'
import Card from "./card/Card"
import style from './products.module.css'


const Products = (props) => {

	const onAddToCart = async (objToCart) => {
		try{
			const findCartItem = props.cartItems.find((cartItem) => cartItem.myId === objToCart.myId)
			if (findCartItem){
				axios.delete(`https://6351455adfe45bbd55bb7f1d.mockapi.io/cart/${findCartItem.id}`)  // удаляем в бекэнде
				props.setCartItems(prev => prev.filter(cartItem => cartItem.myId !== objToCart.myId))  // удаляем в фронтэнде
				} else {
					const { data } = await axios.post('https://6351455adfe45bbd55bb7f1d.mockapi.io/cart', objToCart)
					props.setCartItems([...props.cartItems, data]);
			}
			
		}
		catch{
			alert('Не удалось добавить товар в корзину')
		}
		
	}

	const onAddToFavorite = async (objFavorite) => {
		try{
			const findFavouriteItem = props.favoritesItems.find(favoritesItems => favoritesItems.myId === objFavorite.myId)
			if (findFavouriteItem) {
			axios.delete(`https://6351455adfe45bbd55bb7f1d.mockapi.io/favourites/${findFavouriteItem.id}`)
			props.setFavoritesItems(prev => prev.filter(favItems => favItems.myId !== objFavorite.myId))  // удаляем в фронтэнде
		} else{
			const { data } = await axios.post('https://6351455adfe45bbd55bb7f1d.mockapi.io/favourites', objFavorite)
			props.setFavoritesItems([...props.favoritesItems, data]);
			}
		}
		catch {
			alert('Не удалось добавить товар в избранное')
		}
	}

	const onSearchInput = (inputValue) => {
		props.setSearch(inputValue.target.value)
	}

	return(
      <div className={style.products_section}>

         <div className={style.search}>
            <h2>{props.search ? `Поиск по запросу: ` + props.search : 'Все смартфоны'}</h2> 
            <div className={style.search_block}>
            <img src="/img/search.png" alt="search" />
            <input onChange={onSearchInput} placeholder="Поиск по товарам" />
            </div>
         </div>
               
         <div className={style.products}>
				{      
					// фильтруем в выдачу результат поиска, приводим аргумент поиска и title к нижнему регистру - .toLowerCase() )
					props.items.filter((item) => item.title.toLowerCase().includes(props.search.toLowerCase())).map((obj, index) => {
					   return(
							<Card 
								key = {index}
								{...obj}

								onFavorite={
                        	(favoritesObj) => {
                        	onAddToFavorite(favoritesObj)
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

export default Products