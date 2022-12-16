import React from 'react';
import axios from 'axios';
import { Route, Routes } from 'react-router-dom' 
import './App.css';
import Header from './components/header/Header';
import Footer from './components/footer/Footer';
import Cart from './components/cart/Cart';
import Favourites from './components/favourites/Favourites';
import Home from './components/Home';

	// создаем Context и экспортируем
	export const AppContext = React.createContext({})
	
function App() {

	
	// стейт/состояние для хранения товаров
	const [products, setProducts] = React.useState([]);

	// стейт/состояние для поиска товаров
	const [search, setSearch] = React.useState('');

	// стейт для хранения товаров в избранном
	const [favoritesItems, setFavoritesItems] = React.useState([]);

	// стейт/состояние для корзины
	const [cartOpened, SetCartOpened] = React.useState(false);

	// стейт/состояние для хранения товаров в корзине
	const [cartItems, setCartItems] = React.useState([]);



 	// используем хук useEffect для ограничения обращений к серверу БД (по первому рендерингу и повторно после обновления) 
	React.useEffect(() => {
		
	//Ниже описан Основной способ взаимодействия с БД !!!! получаем по API сведения с сервера -> вынимаем из ответа json -> помещаем результат в res.data и  -> выводим данные в консоль / на страницу 

	// Внутри useEffect делаем ассинхронную функцию, что бы коректно отображались состояния кнопок по обновлению страницы (сохраняли состояние нажата/не нажата)
	
	async function axiosData() {

	// получаем по запросу сведения из БД и подгружаем в стейт корзины
	const cartData = await axios.get('https://6351455adfe45bbd55bb7f1d.mockapi.io/cart');
	// получаем по запросу сведения из БД и подгружаем в стейт избранноего
	const favouritesData = await axios.get('https://6351455adfe45bbd55bb7f1d.mockapi.io/favourites');
	// получаем по запросу сведения из БД и подгружаем список всех товаров на главной странице
   const productsData = await axios.get('https://6351455adfe45bbd55bb7f1d.mockapi.io/products');

	

	// после получения ответов на запросы к БД, записываем состояние и выводим на страницу
	setCartItems(cartData.data);
	setFavoritesItems(favouritesData.data);
	setProducts(productsData.data);

	}
	axiosData()
	
},[])

	// удаляем товары из корзины
	const onRemoveCartItem = (id) => {
		axios.delete(`https://6351455adfe45bbd55bb7f1d.mockapi.io/cart/${id}`)
		setCartItems((prev) => prev.filter(item => Number(item.id) !== Number(id)))
	}

	// меняем состоние кнопки + в карточке товара после удаления товара в корзине
	const itemAdded = (id) => {
		return cartItems.some((objToCart) => objToCart.id === id) 
	}

	// меняем состояние кнопки добавлено в избранное после удаления из избранного
	const itemFavorited = (id) => {
  	 return favoritesItems.some((objFavorite) => objFavorite.id === id)
	}

	return (
		<AppContext.Provider value={{
			products, 
			cartItems, 
			favoritesItems,
			setCartItems,
			setProducts,
			setFavoritesItems,
			itemAdded,
			itemFavorited			
			}}>

   		<div className="app">
				{cartOpened ? <Cart 
					onRemoveCartItem={onRemoveCartItem}
					cartItems={cartItems} 
					closeCart={ () => SetCartOpened(false) }
					totalPrice={
						cartItems.reduce((totalElement, objPrice) => totalElement + objPrice.price, 0)
					}
					/> : null
			}			 		

		
		<Header openCart={ () => SetCartOpened(true) } cartItems={cartItems} />	

		<Routes>
			<Route path='/favourites' element={
				<Favourites 					
				/> 
			}
			/>
			
			<Route path='/' element={
				<Home 
				// передаем стейты
					items={products} 
					cartItems={cartItems} 
					setCartItems={setCartItems} 
					setSearch={setSearch}
					search={search}
					favoritesItems={favoritesItems}
					setFavoritesItems={setFavoritesItems}
					
				/>
			}
			/>
			</Routes>

		<Footer />
		
			</div> 
		</AppContext.Provider>    
	);
}

export default App;
