
/*
 * GET home page.
 */

exports.index = function(req, res){
	/*var compiled = dust.compile("Hi {name}", "index");
	dust.loadSource(compiled);
	dust.render("index", {name: "Raj"})*/
  res.render('index', { name: 'Raj', template: 'dust', title: 'Node and Dust' });
};

function printHello(text1) {
	console.log("Hello "+ text1.value);
}
