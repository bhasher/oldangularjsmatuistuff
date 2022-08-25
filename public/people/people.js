app.component('people', {
  templateUrl: '/people/people.html',
  controller: function($scope, $http) {

    $scope.refresh = function() {
      $http.get('/api/people').then(function success(response) {
        $scope.people = response.data;
      }, function error(response) {
        console.error(response);
      });   
    }

    $scope.refresh();

    $scope.select = function(person) {
      alert(`Selected ${person.login.username}!`)
    }
  }
});