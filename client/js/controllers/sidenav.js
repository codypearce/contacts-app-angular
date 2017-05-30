app.controller('sideNavCtrl', function($scope, contacts, filterContacts, $location, labels) {
  $scope.labels = labels.labels;
  $scope.updateFilter = function(filter) {
    filterContacts.updateFilter(filter);
    $location.path('/');
  }
})
