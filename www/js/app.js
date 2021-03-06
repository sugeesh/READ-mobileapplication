// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
// 'starter.services' is found in services.js
// 'starter.controllers' is found in controllers.js

var db;

var example = angular.module('app', ['ionic', 'app.controllers', 'app.routes', 'app.services', 'app.directives', 'ngCordova'])

.run(function($ionicPlatform, $cordovaSQLite) {
    $ionicPlatform.ready(function() {
        // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
        // for form inputs)
        db = $cordovaSQLite.openDB({
            name: "my.db",
            location: 1
        });
        // $cordovaSQLite.execute(db, "CREATE TABLE IF NOT EXISTS rbcquestion (id INTEGER,date TEXT,recommendchapterid INTEGER,content TEXT, userid INTEGER)");
        $cordovaSQLite.execute(db, "CREATE TABLE IF NOT EXISTS recommendbook (id INTEGER PRIMARY KEY,name TEXT,courseid INTEGER,section INTEGER)");
        $cordovaSQLite.execute(db, "CREATE TABLE IF NOT EXISTS recommendchapter (id INTEGER PRIMARY KEY,name TEXT,start_page INTEGER,end_page INTEGER,section INTEGER,recommendbookid INTEGER,finished INTEGER)");
        // $cordovaSQLite.execute(db, "CREATE TABLE IF NOT EXISTS rbcanswer (id INTEGER PRIMARY KEY,user_id INTEGER,content TEXT,date TEXT)");
        $cordovaSQLite.execute(db, "CREATE TABLE IF NOT EXISTS course ( id INTEGER PRIMARY KEY,fullname TEXT,shortname TEXT, date INTEGER)");

        // $cordovaSQLite.execute(db, "INSERT INTO course VALUES(1,'Database Systems','CS-3542',1465621314)");
        // $cordovaSQLite.execute(db, "INSERT INTO course VALUES(2,'Database Structures','CS-3542',1465621314)");
        // $cordovaSQLite.execute(db, "INSERT INTO course VALUES(3,'Algorithms','CS-3542',1465621314)");
        // $cordovaSQLite.execute(db, "INSERT INTO course VALUES(4,'OS','CS-3542',1465621314)");
        //
        // $cordovaSQLite.execute(db, "INSERT INTO recommendbook VALUES(1,'Database Systems',1)");
        // $cordovaSQLite.execute(db, "INSERT INTO recommendbook VALUES(2,'Database Systems 2',1)");
        //
        // $cordovaSQLite.execute(db, "INSERT INTO recommendchapter VALUES(1,'Chapter 1',1,20,1,1,1)");
        // $cordovaSQLite.execute(db, "INSERT INTO recommendchapter VALUES(2,'Chapter 2',20,28,2,1,0)");
        // $cordovaSQLite.execute(db, "INSERT INTO recommendchapter VALUES(3,'Chapter 3',30,40,3,1,1)");

        if (window.cordova && window.cordova.plugins && window.cordova.plugins.Keyboard) {
            cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
            cordova.plugins.Keyboard.disableScroll(true);
        }
        if (window.StatusBar) {
            // org.apache.cordova.statusbar required
            StatusBar.styleDefault();
        }



    });
});
