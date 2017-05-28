app.service('contacts', function() {
    this.contacts =  [
      {
        id: 1,
        firstName: 'Luke',
        lastName: 'Skywalker',
        phone: '555-555-5555',
        email: 'skywalkingoveru@rebels.io',
        img: 'luke-skywalker.jpg',
      },
      {
        id: 2,
        firstName: 'Darth',
        lastName: 'Vader',
        phone: '555-555-5554',
        email: 'idontlikesand@empire.io',
        img: 'darth-vader.jpg',
      },
    ];
    this.num = 3;
    this.addContact = function(contact) {
      contact.id = this.num;
      this.num++;
      this.contacts.push(contact);
    }

});
