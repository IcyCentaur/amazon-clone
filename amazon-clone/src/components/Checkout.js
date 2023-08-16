import React from 'react';

import './css/Checkout.css';
import Subtotal from './Subtotal';

function Checkout() {
	return (
		<div className="checkout">
			<div className="checkout__items">
				<img
					className=" checkout__items__ad"
					src="https://images-eu.ssl-images-amazon.com/images/G/31/img22/Sports/July/Trusticons/Trust-icon_1080x140_B.jpg"
					alt="ad--banner"
				/>
				<div>
					<h2 className="checkout__items__title">Your Cart Items</h2>
				</div>
			</div>
			<div className="checkout__billing">
				<Subtotal />
			</div>
		</div>
	);
}
export default Checkout;
