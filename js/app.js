var app = angular.module('contacts', ['ngMaterial', 'ngRoute']);

app.controller('mainCtrl', function($scope,  $mdSidenav, $mdDialog, contacts) {
  $scope.contacts = contacts.contacts;

  $scope.addContact = function(ev) {
   $mdDialog.show({
     controller: DialogController,
     templateUrl: '../templates/addContact.html',
     parent: angular.element(document.body),
     targetEvent: ev,
     clickOutsideToClose:true,
     fullscreen: $scope.customFullscreen // Only for -xs, -sm breakpoints.
   })
   .then(function(contact) {
     console.log(contact)
   }, function() {
     console.log('canceled')
   });
  };
})

function DialogController($scope, $mdDialog, contacts) {
  $scope.hide = function() {
    $mdDialog.hide();
  };

  $scope.cancel = function() {
    $mdDialog.cancel();
  };
  $scope.addContact = function(contact) {
    $mdDialog.hide();
    contacts.addContact(contact);
  };
}
app.controller('LeftCtrl', function($scope) {
  console.log('test')
})
