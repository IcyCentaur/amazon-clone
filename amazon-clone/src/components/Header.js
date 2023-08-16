import React from 'react';
import './css/Header.css';
import SearchIcon from '@mui/icons-material/Search';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { Link } from 'react-router-dom';

function Header() {
	return (
		<div className="header">
			<Link to="/">
				<img
					className="header__logo"
					src={require('./assets/scamazon-logo.png')}
					alt="Scamazon. Not the real thing"
				/>
			</Link>
			<div className="header__search">
				<input className="header__search__input" type="text" />
				<SearchIcon className="header__search__icon" />
			</div>
			<div className="header__nav">
				<div className="header__option">
					<span className="header__option__lineOne">Hello Guest</span>
					<span className="header__option__lineTwo">Sign In</span>
				</div>
				<div className="header__option">
					<span className="header__option__lineOne">Returns </span>
					<span className="header__option__lineTwo">& Orders</span>
				</div>
				<div className="header__option">
					<span className="header__option__lineOne">Your </span>
					<span className="header__option__lineTwo">Prime</span>
				</div>
			</div>
			<Link to="/checkout">
				<div className="header__option__cart">
					<ShoppingCartIcon />
					<span className="header__option__lineTwo header__option__cartCount">
						0
					</span>
				</div>
			</Link>
		</div>
	);
}
export default Header;
