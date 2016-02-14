**This package is work-in-progress**

### Usage

Add the package

    meteor add brewhk:crate

On the client-side, specify the default options using `Meteor.startup()`:

	Meteor.startup(function () {
		Stevedore.defaultOptions = {
			collection: 'items'
		};
	});

Add the `{{crateAddItemButton}}` within the context of the item