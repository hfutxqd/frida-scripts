setImmediate(function() {
	Java.perform(function() {

		var bufferedReader = Java.use("java.io.BufferedReader");

		bufferedReader.readLine.overload().implementation = function () {
			var line = this.readLine();
			console.log("[*] BufferedReader.readLine called: " + line +"\n");
			return line;
		};

		var writer = Java.use("java.io.Writer");

		writer.write.overload('java.lang.String').implementation = function (var0) {
			console.log("[*] Writer.write called: " + var0 +"\n");
			this.write(var0);
		};
	});
});