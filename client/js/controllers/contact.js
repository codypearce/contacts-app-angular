app.controller('contactCtrl', function($scope, $routeParams, contacts,  $mdDialog, $location,) {
  const id = $routeParams.id;
  const contact = contacts.contacts.filter(x => x.id === parseInt(id))[0];
  $scope.contact = contact;

  $scope.editContact = function(ev) {
    $mdDialog.show({
      controller: DialogController,
      templateUrl: '../templates/dialogs/editContact.html',
      parent: angular.element(document.body),
      targetEvent: ev,
      clickOutsideToClose:true,
      fullscreen: $scope.customFullscreen,
      locals: {
        contact: $scope.contact,
      }
    })
  };

  $scope.deleteContact = function() {
    contacts.deleteContact($scope.contact);
    $location.path('/');
  }
})
