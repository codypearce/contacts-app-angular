var app = angular.module('contacts', ['ngMaterial']);

app.controller('mainCtrl', function($scope,  $mdSidenav, $mdDialog) {
  $scope.contacts = [
    {
      firstName: 'Luke',
      lastName: 'Skywalker',
      phone: '555-555-5555',
      email: 'skywalkingoveru@rebels.io',
      img: 'luke-skywalker.jpg',
    },
    {
      firstName: 'Darth',
      lastName: 'Vader',
      phone: '555-555-5554',
      email: 'idontlikesand@empire.io',
      img: 'darth-vader.jpg',
    },
  ];

  $scope.addContact = function(ev) {
   $mdDialog.show({
     controller: DialogController,
     templateUrl: '../templates/addContact.html',
     parent: angular.element(document.body),
     targetEvent: ev,
     clickOutsideToClose:true,
     fullscreen: $scope.customFullscreen // Only for -xs, -sm breakpoints.
   })
   .then(function(answer) {
     console.log(answer)
   }, function() {
     console.log('canceled')
   });
  };

  function DialogController($scope, $mdDialog) {
    $scope.hide = function() {
      $mdDialog.hide();
    };

    $scope.cancel = function() {
      $mdDialog.cancel();
    };

    $scope.answer = function(answer) {
      $mdDialog.hide(answer);
    };
  }
})

app.controller('LeftCtrl', function($scope) {
  console.log('test')
})
