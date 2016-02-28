import Ember from 'ember';
import LineItem from '../models/line-item';
import Order from '../models/order';
import Product from '../models/product';

const products = [
	Product.create({title:'Tent', price:19.9, description:'For 3 persons', imageUrl:'assets/images/tent.jpg'}),
	Product.create({title:'Pillow', price:5.2, description:'Quite soft', imageUrl:'assets/images/pillow.jpg'}),
	Product.create({title:'Flashlight', price:4.3, description:'Works with battery', imageUrl:'assets/images/flashlight.jpg'}),
	Product.create({title:'Backpack', price:15.8, description:'For back packers', imageUrl:'assets/images/backpack.jpg'})
];

const orders = [
	Order.create({id:1234, name:'Yusuf Özlü',
												items:[
												LineItem.create({product:products[0],quantity:1}),
													LineItem.create({product:products[1],quantity:1}),
														LineItem.create({product:products[2],quantity:3}),
															LineItem.create({product:products[3],quantity:0})
													]

												}),
	Order.create({id:1235, name:'Semih Sipahi',
												items:[
												LineItem.create({product:products[0],quantity:0}),
													LineItem.create({product:products[1],quantity:5}),
														LineItem.create({product:products[2],quantity:1}),
															LineItem.create({product:products[3],quantity:1})
													]

												}),
	Order.create({id:1236, name:'Mücahit Şenol',
												items:[
												LineItem.create({product:products[0],quantity:1}),
													LineItem.create({product:products[1],quantity:4}),
														LineItem.create({product:products[2],quantity:0}),
															LineItem.create({product:products[3],quantity:1})
													]

												})


];

export default Ember.Service.extend({

	getOrderById(id){ return orders.findBy('id',id);},

	getOrders()
		{
		return orders;
	},

	getProducts(){
		return products;
	},
	newOrder() {
		return Order.create({
			items: products.map((product)=> {
				return LineItem.create({
					product: product
				});
			}),
		});
	},
	saveOrder(order){
		order.set('id', Math.random()+9000);
		orders.pushObject(order);
	}
	
});
