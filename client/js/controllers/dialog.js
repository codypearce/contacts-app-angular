
function DialogController($scope, $mdDialog, $http, contacts, labels, locals) {
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
  $scope.uploadFile = function(elem) {
    $scope.image = elem.files
    $scope.$apply();

    var fd = new FormData();
    fd.append("file", $scope.image[0]);

    $http.post('/uploadImage', fd, {
        withCredentials: true,
        headers: {'Content-Type': undefined },
        transformRequest: angular.identity
    }).then(function() {
      console.log('success');
    })

  }
  $scope.editContact = function(contact) {
    $mdDialog.hide();
    contacts.editContact(contact);
  }
}
