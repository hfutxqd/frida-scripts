setImmediate(function() {
	Java.perform(function() {
		var ANSI_BLUE = "\u001B[34m";
		var ANSI_CYAN = "\u001B[36m";
		var ANSI_WHITE = "\u001B[37m";

		var sqliteDatabase = Java.use("android.database.sqlite.SQLiteDatabase");

		// execSQL(String sql)
		sqliteDatabase.execSQL.overload('java.lang.String').implementation = function(var0) {
			console.log("[*] SQLiteDatabase.exeqSQL called with query: " + var0 + "\n");
			var execSQLRes = this.execSQL(var0);
			return execSQLRes;
		};

		// execSqL(String, sql, Obj[] bindArgs)
		sqliteDatabase.execSQL.overload('java.lang.String', '[Ljava.lang.Object;').implementation = function(var0, var1) {
			console.log("[*] SQLiteDatabase.exeqSQL called with query: " + var0 +  " and arguments: " + var1 + "\n");
			var execSQLRes = this.execSQL(var0, var1);
			return execSQLRes;
		};

		// insert(String table, String nullColumnHack, ContentValues values)
		sqliteDatabase.insert.overload('java.lang.String', 'java.lang.String', 'android.content.ContentValues').implementation = function(var0, var1, var2) {
			console.log("[*] SQLiteDatabase.insert called. Adding new value: " + var2 + " to database: " + var0 + "\n");
			var insertValueRes = this.insert(var0, var1, var2);
			return insertValueRes;
		};

		// insertOrThrow(String table, String nullColumnHack, ContentValues values)
		sqliteDatabase.insertOrThrow.overload('java.lang.String', 'java.lang.String', 'android.content.ContentValues').implementation = function(var0, var1, var2) {
			console.log("[*] SQLiteDatabase.insertOrThrow called. Adding new value: " + var2 + " to database: " + var0 + "\n");
			var insertValueRes = this.insertOrThrow(var0, var1, var2);
			return insertValueRes;
		};

		// insertOrThrow(String table, String nullColumnHack, ContentValues values)
		sqliteDatabase.insertOrThrow.overload('java.lang.String', 'java.lang.String', 'android.content.ContentValues').implementation = function(var0, var1, var2) {
			console.log("[*] SQLiteDatabase.insertOrThrow called. Adding new value: " + var2 + " to database: " + var0 + "\n");
			var insertValueRes = this.insertOrThrow(var0, var1, var2);
			return insertValueRes;
		};

		// insertWithOnConflict(String table, String nullColumnHack, ContentValues initialValues, int conflictAlgorithm)
		sqliteDatabase.insertWithOnConflict.overload('java.lang.String', 'java.lang.String', 'android.content.ContentValues', 'int').implementation = function(var0, var1, var2, var3) {
			console.log("[*] SQLiteDatabase.insertWithOnConflict called. Adding new value: " + var2 + " to database: " + var0 + " and conflictAlgorithm: " + var3 + "\n");
			var insertValueRes = this.insertWithOnConflict(var0, var1, var2, var3);
			return insertValueRes;
		};

		// rawQuery(String sql, String[] selectionArgs) 
		sqliteDatabase.rawQuery.overload('java.lang.String', '[Ljava.lang.String;').implementation = function(var0, var1) {
			console.log("[*] SQLiteDatabase.rawQuery called with query: " + var0 + " and contentValues: " + var1 +"\n");
			var rawQueryRes = this.rawQuery(var0, var1);
			return rawQueryRes;
		};

		// rawQuery(String sql, String[] selectionArgs) 
		sqliteDatabase.rawQuery.overload('java.lang.String', '[Ljava.lang.String;', 'android.os.CancellationSignal').implementation = function(var0, var1, var2) {
			console.log("[*] SQLiteDatabase.rawQuery called with query: " + var0 + " and contentValues: " + var1 +"\n");
			var rawQueryRes = this.rawQuery(var0, var1, var2);
			return rawQueryRes;
		};

		// update(String table, ContentValues values, String whereClause, String[] whereArgs)
		sqliteDatabase.update.overload('java.lang.String', 'android.content.ContentValues', 'java.lang.String', '[Ljava.lang.String;').implementation = function(var0, var1, var2, var3) {
			var methodVal = "[*] SQLiteDatabase.update called.";
			var logVal = "Update table: " + var0 + " with where clause: "  + var2 + " whereArgs:" + var3 + " and values to update: " + var1 +"\n";
			console.log(ANSI_CYAN + methodVal + ANSI_CYAN, ANSI_WHITE + logVal + ANSI_WHITE);
			
			var updateRes = this.update(var0, var1, var2, var3);
			return updateRes;
		};

		// updateWithOnConflict(String table, ContentValues values, String whereClause, String[] whereArgs, int conflictAlgorithm) 
		sqliteDatabase.updateWithOnConflict.overload('java.lang.String', 'android.content.ContentValues', 'java.lang.String', '[Ljava.lang.String;', 'int').implementation = function(var0, var1, var2, var3, var4) {
			var methodVal = "[*] SQLiteDatabase.updateWithOnConflict called.";
			var logVal = "Update table: " + var0 + " with where clause: "  + var2 + " whereArgs:" + var3 + " values to update: " + var1 + " and conflictAlgorithm: " + var4 +"\n";
			console.log(ANSI_CYAN + methodVal + ANSI_CYAN, ANSI_WHITE + logVal + ANSI_WHITE);
			
			var updateRes = this.updateWithOnConflict(var0, var1, var2, var3, var4);
			return updateRes;
		};

	});
});