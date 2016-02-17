getAffectedUser = function (currentUserId, requestedUserId) {
	// If requestedUserId is provided, make sure the currentUserId has admin priviledges
	if(requestedUserId) {
		if (!Roles.userIsInRole(currentUserId, 'admin')) {
			return null;
		} else {
			return requestedUserId;
		}
	}

	// If no requestedUserId is provided
	// use the currentUserId
	return currentUserId;
}
