var fs = require('fs'),
	colors = require('colors');

/*var StatMode = require('stat-mode');

fs. stat('./cat.jpg', function(err,stats) {
	var statMode = new StatMode(stats);
	console.log(stats);
})*/

/*fs.readFile('./tekst.txt', 'utf-8', function(err, data) {
	console.log('Dane przed zapisem!'.blue);
	console.log(data);
	fs.appendFile('./tekst.txt', '\nA tak wygląda po zapisie!', function(err) {
		if(err) throw err; //jeśli pojawi się bład, wyrzuć wyjątek
		console.log('Zapisano!'.blue);
		fs.readFile('./tekst.txt', 'utf-8', function(err, data) {
			console.log('Dane po zapisie'.blue)
			console.log(data);
		});
	});
		
});*/
var path = '.'; //Zadanie 1.7 Badamy otoczenie pobiera zawartośc katalogu w postaci tablicy i wyświetla w pliku newfile.text
fs.readdir(path, function(err, files) {
	fs.writeFile('newfile.txt', files, function(err){
		if (err) throw err;
		console.log('The file has been saved');
	});
});
// Koniec Zadania 1.7

