import Ember from 'ember';

export default Ember.Object.extend({
	
  title: Ember.computed.alias('product.title'),
  unitPrice: Ember.computed.alias('product.price'),
  img: Ember.computed.alias('product.imageUrl'),
  price: Ember.computed('quantity', 'unitPrice', function(){
  	return parseInt(this.get('quantity'),10) * this.get('unitPrice');
  })
});
