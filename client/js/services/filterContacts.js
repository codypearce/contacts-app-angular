app.service('filterContacts', function(contacts) {
    this.filter = 'all';

    this.updateFilter = function(filter) {
      this.filter = filter;
    }
});
