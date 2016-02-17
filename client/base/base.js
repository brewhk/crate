Stevedore = {};

Stevedore.defaultOptions = {};

Stevedore.addItem = function (options) {
	_.extend(options, Stevedore.defaultOptions);
	Meteor.call('crateAddItem', options);
}

Stevedore.updateQuantity = function (options) {
	_.extend(options, Stevedore.defaultOptions);
	Meteor.call('crateUpdateQuantity', options);
}

Stevedore.removeItem = function (options) {
	_.extend(options, Stevedore.defaultOptions);
	Meteor.call('crateRemoveItem', options);
}
