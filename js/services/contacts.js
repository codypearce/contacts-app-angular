app.service('contacts', function() {
    this.contacts =  [
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

    this.addContact = function(contact) {
      this.contacts.push(contact);
    }

});
