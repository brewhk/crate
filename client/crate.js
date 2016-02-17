Template.crateAddItemButton.events({
	'click .crateAddItemButton': function (event, template) {
		Stevedore.addItem({
			itemId: this._id
		});
	}
});

Template.crateRemoveItemButton.events({
	'click .crateRemoveItemButton': function (event, template) {
		Stevedore.removeItem({
			itemId: this._id
		});
	}
});
