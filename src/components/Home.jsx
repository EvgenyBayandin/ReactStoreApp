import Banner from "./banner/Banner"
import About from "./about/About"
import Products from "./products/Products"
// import TestSlider from "./TestSlider"

const Home = (props) => {
	return(

		<>
					{/* <TestSlider /> */}

					<Banner />

					<About />
		
					<Products 
					// передаем стейты через пропсы из app.jsx
						items={props.items} 
						cartItems={props.cartItems} 
						setCartItems={props.setCartItems} 
						setSearch={props.setSearch}
						search={props.search}
						favoritesItems={props.favoritesItems}
						setFavoritesItems={props.setFavoritesItems}
						
					/>
				</>

	)
}

export default Home