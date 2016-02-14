Meteor.methods({
	crateAddItem: function (options) {
		// Find the current crate
		let currentCrate = Crate.findOne({
			userId: this.userId,
			completed: false
		}, {
			sort: {
				lastUpdated: -1
			}
		});

		if(currentCrate) {
			// Checks if the item is in the `items` array already
			let inItemsArray = Crate.findOne({
				userId: this.userId,
				completed: false,
				"items.collection": options.collection,
				"items.itemId": options.itemId
			}, {
				sort: {
					lastUpdated: -1
				}
			});

			// If it does, increment the quantity field by 1
			if(inItemsArray) {
				Crate.update({
					userId: this.userId,
					completed: false,
					"items.collection": options.collection,
					"items.itemId": options.itemId
				}, {
					$inc: {
						"items.$.quantity": 1
					}
				});
			}

			// Otherwise, push a new item onto the `items` array
			else {
				Crate.update({
					userId: this.userId,
					completed: false
				}, {
					$push: {
						items: {
							collection: options.collection,
							itemId: options.itemId,
							quantity: 1
						}
					}
				});
			}
		}

		// If the user does not currently have a crate
		// Create a new crate
		else {
			Crate.insert({
				userId: this.userId,
				items: [{
					collection: options.collection,
					itemId: options.itemId,
					quantity: 1
				}],
				lastUpdated: Date.now(),
				completed: false
			});
		}
	},
	crateUpdateQuantity: function (options) {
		Crate.update({
			userId: this.userId,
			completed: false,
			"items.itemId": options.itemId
		}, {
			$set: {
				"items.$.quantity": options.quantity
			}
		});
	},
	crateRemoveItem: function (options) {
		Crate.update({
			userId: this.userId,
			completed: false,
			"items.itemId": options.itemId
		}, {
			$pull: {
				items: {
					itemId: options.itemId
				}
			}
		});
	},
	crateGetCrate: function (userId) {
		// If userId is provided, make sure the user has admin priviledges
		if(userId) {
			if (!Roles.userIsInRole(Meteor.userId(), 'admin')) {
				userId = null;
			}
		}

		// If no userId is provided
		// use the currently logged-in user
		userId = userId ? userId : this.userId;

		if(userId) {
			return Crate.findOne({
				userId: userId,
				completed: false
			}, {
				sort: {
					lastUpdated: -1,
					limit: 1
				}
			});
		}
	}
});