app.component('peopledetails', {
  templateUrl: '/people-details/people-details.html',
  controller: function($scope, $http, $routeParams, $mdDialog, $location) {

    var username = $routeParams.username;

    $http.get('/api/people/' + username).then(function success(response) {
      $scope.person = response.data;
      console.log(response.data);
    }, function error(response) {
      $mdDialog.show(
        $mdDialog.alert()
          .parent(angular.element(document.querySelector('#popupContainer')))
          .clickOutsideToClose(true)
          .title('Person Not Found')
          .textContent('You will be redirected to the people list')
          .ariaLabel('No user ' + username)
          .ok('Got it!')
      ).then(function () {
        $location.path('/people');
      });
    });
  }
});