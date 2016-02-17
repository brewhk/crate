Meteor.publish('ownCurrentCart', function () {
	return Crate.find({
		userId: this.userId,
		completed: false
	}, {
		sort: {
			lastUpdated: -1
		},
		limit: 1
	});
});

Meteor.publish('cart', function (options) {
	let userId = getAffectedUser(this.userId, options.userId);
	if(userId) {
		return Crate.find({
			userId: userId,
			completed: false
		}, {
			sort: {
				lastUpdated: -1
			},
			limit: 1
		});
	}
});
