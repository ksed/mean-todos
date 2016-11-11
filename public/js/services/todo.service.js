
(function() {
  angular.module('mean-todos')
        .factory('TodoService', TodoService);

  TodoService.$inject = ['$http'];

  function TodoService($http){
    init();
    var todos = [];
    return {
      get: getAllTodos,
      create: createOneTodo,
      update: updateOneTodo,
      delete: deleteOneTodo
    };

    function init() {
      // this will make our first data request upon load
      $http.get('/todos')
          .then(function(response) {
              todos = response.data.todos;
            })
          .catch(function(err) {
            console.log(err);
          });
    }
    function getAllTodos() {
      return todos;
    }
    function createOneTodo(todo) {
      $http.post('/todos', todo)
          .then(function(response) {
            todos.push(todo);
          })
          .catch(function(err) {
            console.log(err);
          });
    }
    function updateOneTodo(index, todo) {
      $http.put('/todos/'+todo._id, {description: todo.description})
          .then(function(response) {
            todos[index] = todo;
          })
          .catch(function(err) {
            console.log(err);
          });
    }
    function deleteOneTodo(index) {
      $http.delete('/todos/'+todos[index]._id)
          .then(function(response) {
            todos.splice(index, 1);
          })
          .catch(function(err) {
            console.log(err);
          });
    }
  }
}());
