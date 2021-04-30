"use strict";
exports.__esModule = true;
var axios_1 = require("axios");
var url = 'https://jsonplaceholder.typicode.com/posts/1';
axios_1["default"].get(url).then(function (response) {
    var todo = response.data;
    var id = todo.id;
    var title = todo.title;
    var body = todo.body;
    logTodo(id, title, body);
});
var logTodo = function (id, title, body) {
    console.log("\n        The Todo with ID: " + id + "\n        Has a title of: " + title + "\n        And a body of: " + body + "\n    ");
};
