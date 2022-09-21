import React, {useContext} from 'react';
import OrderItem from '@components/OrderItem.jsx';
import AppContext from '@context/AppContext.js';
import '@styles/MyOrder.scss';

import arrow from '@icons/flechita.svg';


const MyOrder = () => {
	const { state } = useContext(AppContext);

	const sumTotal = () => {
		const reducer = state.cart.reduce((accumalator, currentValue) => accumalator + currentValue.price, 0)
		return reducer;
	}

	return (
		<aside className="MyOrder">
			<div className="title-container">
				<img onClick={() => setToggleOrders(!toggleOrders)} src={arrow} alt="arrow" />
				<p className="title">My order</p>
			</div>
			<div className="my-order-content">
				  <div className='cart-product-list'>
				     {state.cart.map((item, index) => (
					 <OrderItem item={item} key={index} index={index}/>
				      ))}
				  </div>
				<div className="order">
					<p>
						<span>Total</span>
					</p>
					<p>${sumTotal()}</p>
				</div>
				<button className="primary-button">
					Checkout
				</button>
			</div>
		</aside>
	);
}

export default MyOrder;