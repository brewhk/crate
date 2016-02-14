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
})