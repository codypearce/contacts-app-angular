app.controller('mainCtrl', function($scope,  $mdSidenav, $mdDialog, contacts, filterContacts, sort) {
  // Initial Sort
  $scope.contacts = sort.firstAndLast(contacts.contacts);
  $scope.$watch(function() {return filterContacts.filter}, function(filter) {
    if(filterContacts.filter !== 'all') {
      $scope.contacts = sort.firstAndLast(contacts.contacts.filter(x => x.labels.some(a => a == filterContacts.filter)));
    } else {
      $scope.contacts = sort.firstAndLast(contacts.contacts);
    }
  });

  $scope.isFavorite = function(contact) {
    return contact.labels.indexOf('favorites') > -1;
  };

   $scope.favoriteToggle = function(contact) {
     const index = contact.labels.indexOf('favorites');
     if(index > -1) {
       contact.labels.splice(index, 1);
     } else {
       contact.labels.push('favorites');
     }
   };

  $scope.addContact = function(ev) {
   $mdDialog.show({
     controller: DialogController,
     templateUrl: '../templates/dialogs/addContact.html',
     parent: angular.element(document.body),
     targetEvent: ev,
     clickOutsideToClose:true,
     fullscreen: $scope.customFullscreen,
     locals: {},
   })
  };
})
