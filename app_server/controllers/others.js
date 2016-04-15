/* GET 'about' page */
module.exports.about = function(req,res){
	//for now, just render the index template and pass the about string 
	//to test that the route is working.
	res.render('generic-text', {title: 'About'});
};