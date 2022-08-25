app.component('percentage', {
  templateUrl: '/percentage/percentage.html',
  controller: function($scope, $mdToast) {

    $scope.percentage = 50;

    $scope.toastPercentage = function(event) {
      $mdToast.show(
        $mdToast.simple()
          .textContent(`${$scope.percentage}%`)
          .hideDelay(3000)
      );
    }
    
  }
});