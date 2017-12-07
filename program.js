process.stdin.setEncoding('utf-8');
process.stdin.on('readable', function() {
	var input = process.stdin.read();
	if(input !== null) {
		var instruction = input.toString().trim();
		switch(instruction) {
			case 'version':
				var version = process.versions.node;
				process.stdout.write(version);
				break;
			case 'lang':
				var lang = String(process.env.LANG); /*only for Mac and Linux*/
				process.stdout.write(lang);
				break;
			case '/exit':
				process.stdout.write('Quiting app!\n');
				process.exit();
				break;
			default:
				process.stderr.write("Wrong instruction!\n");
			
			}
		
	}
});
