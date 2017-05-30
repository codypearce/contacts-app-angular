app.service('sort', function() {
    this.firstSort = function(a,b) {
      if (a.firstName < b.firstName)
        return -1;
      if (a.firstName > b.firstName)
        return 1;
      return 0;
    }
    this.lastSort = function(a,b) {
      if (a.lastName < b.lastName)
        return -1;
      if (a.lastName > b.lastName)
        return 1;
      return 0;
    }
    this.firstAndLast = function(arr) {
      return arr.sort(this.firstSort).sort(this.lastSort);
    }
});
