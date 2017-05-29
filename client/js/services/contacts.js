app.service('contacts', function() {
    this.contacts =  [
      {
        id: 1,
        firstName: 'Luke',
        lastName: 'Skywalker',
        phone: '555-555-5555',
        email: 'skywalkingoveru@rebels.io',
        img: 'luke-skywalker.jpg',
        labels: ['family'],
      },
      {
        id: 2,
        firstName: 'Darth',
        lastName: 'Vader',
        phone: '555-555-5554',
        email: 'idontlikesand@empire.io',
        img: 'darth-vader.jpg',
        labels: ['work', 'family'],
      },
      {
        id: 3,
        firstName: 'Leia',
        lastName: 'Skywalker',
        phone: '555-555-5553',
        email: 'youreshort@rebels.io',
        img: 'leia-skywalker.jpg',
        labels: ['family', 'favorites'],
      },
    ];
    this.num = 4;
    this.addContact = function(contact) {
      contact.id = this.num;
      this.num++;
      this.contacts.push(contact);
    }
    this.editContact = function(contact) {
      this.contacts[contact.id] = contact
    }
});
