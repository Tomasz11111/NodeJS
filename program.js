process.stdin.setEncoding('utf-8');
process.stdin.on('readable', function() {
	var input = process.stdin.read();
	if(input !== null) {
		var instruction = input.toString().trim();
		if (instruction === '/exit') {
			process.stdout.write('Quiting app!\n');
			process.exit();
		}
		else if(instruction === 'version') {
			var version = process.versions.node;
			process.stdout.write(version);
		}
		else if(instruction === 'lang') /*only for Mac and Linux*/ {
			var lang = process.env.LANG;
			process.stdout.write(lang);
			}
		else 
		{
			process.stderr.write("Wrong instruction!\n");
		}
	}
});
