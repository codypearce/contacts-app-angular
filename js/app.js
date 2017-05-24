var app = angular.module('contacts', ['ngMaterial']);

app.controller('mainCtrl', function($scope,  $mdSidenav) {
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

})

app.controller('LeftCtrl', function($scope) {
  console.log('test')
})
