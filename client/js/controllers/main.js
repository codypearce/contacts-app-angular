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

  $scope.isFavorite = function(contact) {
    return contact.labels.indexOf('favorites') > -1;
   }

   $scope.favoriteToggle = function(contact) {
     const index = contact.labels.indexOf('favorites');
     if(index > -1) {
       contact.labels.splice(index, 1);
     } else {
       contact.labels.push('favorites');
     }
   }

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
  };
})
