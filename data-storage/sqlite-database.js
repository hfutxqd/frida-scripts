setImmediate(function() {
	Java.perform(function() {
		var sqliteDatabase = Java.use("android.database.sqlite.SQLiteDatabase");
		sqliteDatabase.execSQL.overload('java.lang.String').implementation = function(var0) {
			console.log("[*] SQLiteDatabase.exeqSQL called with value: " + var0 + "\n");
			var execSQL = this.execSQL(var0);
			return execSQL;
		};

		sqliteDatabase.execSQL.overload('java.lang.String', '[Ljava.lang.Object;').implementation = function(var0, var1) {
			console.log("[*] SQLiteDatabase.exeqSQL called with value: " + var0 +  " and arguments: " + var1 + "\n");
			var execSQL = this.execSQL(var0, var1);
			return execSQL;
		};

		sqliteDatabase.insert.overload('java.lang.String', 'java.lang.String', 'android.content.ContentValues').implementation = function(var0, var1, var2) {
			console.log("[*] SQLiteDatabase.insert called. Adding new value: " + var2 + " to database: " + var0 + "\n");
			var insertValue = this.insert(var0, var1, var2);
			return insertValue;
		};

		sqliteDatabase.insertOrThrow.overload('java.lang.String', 'java.lang.String', 'android.content.ContentValues').implementation = function(var0, var1, var2) {
			console.log("[*] SQLiteDatabase.insertOrThrow called. Adding new value: " + var2 + " to database: " + var0 + "\n");
			var insertValue = this.insertOrThrow(var0, var1, var2);
			return insertValue;
		};

		sqliteDatabase.rawQuery.overload('java.lang.String', '[Ljava.lang.String;').implementation = function(var0, var1) {
			console.log("[*] SQLiteDatabase.rawQuery called with values: " + var0 + "\n");
			var rawQuery = this.rawQuery(var0, var1);
			return rawQuery;
		};

	});
});