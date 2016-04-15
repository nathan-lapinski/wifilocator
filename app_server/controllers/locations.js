/* GET 'home' page */
module.exports.homelist = function(req,res){
	res.render('locations-list', {
		title: 'WiFiLocator',
		pageHeader: {
			title: 'WiFiLocator',
			strapline: 'Find coffee shops with wifi near you!'
		}
	});
};

/* GET 'Location info' page */
module.exports.locationInfo = function(req,res){
	res.render('location-info', {title: 'Location Info'});
};

/*Get 'Add review' page */
module.exports.addReview = function(req,res){
	res.render('location-review-form', {title: 'Add review'});
};