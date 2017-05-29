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
  function firstSort(a,b) {
    if (a.firstName < b.firstName)
      return -1;
    if (a.firstName > b.firstName)
      return 1;
    return 0;
  }
  function lastSort(a,b) {
    if (a.lastName < b.lastName)
      return -1;
    if (a.lastName > b.lastName)
      return 1;
    return 0;
  }

  $scope.contacts = contacts.contacts.sort(firstSort).sort(lastSort);
  $scope.$watch(function() {return filterContacts.filter}, function(filter) {
    if(filterContacts.filter !== 'all') {
      $scope.contacts = contacts.contacts.filter(x => x.labels.some(a => a == filterContacts.filter)).sort(firstSort).sort(lastSort);
    } else {
      $scope.contacts = contacts.contacts.sort(firstSort).sort(lastSort);
    }
  });

  $scope.addContact = function(ev) {
   $mdDialog.show({
     controller: DialogController,
     templateUrl: '../templates/addContact.html',
     parent: angular.element(document.body),
     targetEvent: ev,
     clickOutsideToClose:true,
     fullscreen: $scope.customFullscreen,
     locals: {},
   })
   .then(function(contact) {
     console.log(contact)
   }, function() {
     console.log('canceled')
   });
  };
})

app.controller('contactCtrl', function($scope, $routeParams, contacts,  $mdDialog) {
  const id = $routeParams.id;
  const contact = contacts.contacts.filter(x => x.id === parseInt(id))[0];
  $scope.contact = contact;

  $scope.editContact = function(ev) {
    $mdDialog.show({
      controller: DialogController,
      templateUrl: '../templates/editContact.html',
      parent: angular.element(document.body),
      targetEvent: ev,
      clickOutsideToClose:true,
      fullscreen: $scope.customFullscreen,
      locals: {
        contact: $scope.contact,
      }
    })
  };
})

function DialogController($scope, $mdDialog, contacts, labels, locals) {
  $scope.labels = labels.labels;
  if(locals) {
    $scope.locals = locals;
  }


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
  $scope.editContact = function(contact) {
    $mdDialog.hide();
    contacts.editContact(contact);
  }
}
app.controller('sideNavCtrl', function($scope, contacts, filterContacts, $location, labels) {
  $scope.labels = labels.labels;
  $scope.updateFilter = function(filter) {
    filterContacts.updateFilter(filter);
    $location.path('/');
  }
})
