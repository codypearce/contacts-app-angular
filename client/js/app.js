var app = angular.module('contacts', ['ngMaterial', 'ngRoute']);

app.config(function($routeProvider, $locationProvider) {
    $routeProvider
    .when("/", {
        templateUrl : "templates/home.html",
        controller: 'mainCtrl'
    })
    .when("/contact/:id", {
        templateUrl : "templates/contact.html",
        controller: 'contactCtrl'
    })
    $locationProvider.html5Mode(true);
});


app.controller('mainCtrl', function($scope,  $mdSidenav, $mdDialog, contacts, filterContacts) {
  $scope.contacts = contacts.contacts;
  $scope.$watch(function() {return filterContacts.filter}, function(filter) {
    if(filterContacts.filter !== 'all') {
      $scope.contacts = contacts.contacts.filter(x => x.labels.some(a => a == filterContacts.filter));
    }
  });

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

app.controller('contactCtrl', function($scope, $routeParams, contacts) {
  const id = $routeParams.id;
  const contact = contacts.contacts.filter(x => x.id === parseInt(id))[0];
  $scope.contact = contact;
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
app.controller('sideNavCtrl', function($scope, contacts, filterContacts, $location) {
  $scope.updateFilter = function(filter) {
    filterContacts.updateFilter(filter);
    $location.path('/');
  }
})
