import React from 'react';
import './css/Home.css';
import Product from './Product';

function Home() {
	return (
		<div className="home">
			<div className="home__container">
				<img
					className="home__image"
					src={require('./assets/banner.jpg')}
					alt="banner"
				/>
				<div className="home__row">
					<Product
						id="122"
						title="Razer DeathAdder Essential Wired Gaming Mouse"
						price={69.69}
						image="https://m.media-amazon.com/images/I/51KmYlNX6lL._SL1000_.jpg"
						rating={4}
					/>
					<Product
						id="123"
						title="Samsung LC49RG90SSuXEN 49' Curved LED Gaming Monitor"
						price={259.99}
						rating={4}
						image="https://images.samsung.com/is/image/samsung/p6pim/in/ls55bg970nwxxl/gallery/in-odyssey-ark-g97nb-ls55bg970nwxxl-537234213?$720_576_PNG$"
					/>
				</div>
				<div className="home__row">
					<Product
						id="4090"
						title="ASUS Rog Strix Geforce RTX 4090 Oc Edition Gaming Graphics Card "
						price={1999.99}
						rating={4}
						image="https://m.media-amazon.com/images/I/815d7TTP5UL._SL1500_.jpg"
					/>
					<Product
						id="169"
						title="Sony PS5 PlayStation Console"
						price={599.99}
						image="https://m.media-amazon.com/images/I/51mWHXY8hyL._SL1000_.jpg"
						rating={4}
					/>
					<Product
						id="11"
						title="One Plus 11R"
						price={499.99}
						rating={4}
						image="https://m.media-amazon.com/images/I/71qjUzUt+ML._SL1500_.jpg"
					/>
				</div>
				<div className="home__row">
					<Product
						id="1"
						title="Nintendo Switch – OLED Model - The Legend of Zelda: Tears of the Kingdom Edition"
						price={349.99}
						rating={5}
						image="https://m.media-amazon.com/images/I/71hBz3ZtiuL._SL1500_.jpg"
					/>
				</div>
			</div>
		</div>
	);
}
export default Home;
