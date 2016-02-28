import Ember from 'ember';

export default Ember.Component.extend({
	percentage: Ember.computed('itemPrice', 'orderPrice', function(){
		return this.get('itemPrice') / this.get('orderPrice') * 100 | 0;
	}),
	isImportant: Ember.computed.gte('percentage', 50),
	actions:{
		toggleDetails(){
			this.toggleProperty('showDetails');
		}
	}
});