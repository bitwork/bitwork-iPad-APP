var News = persistence.define('News', {
    nodeId: "INT",
    title: "TEXT",
    body: "TEXT",
    image: "TEXT",
    expirationDate: "DATE"
});

News.index('nodeId', { unique: true });

var Calendar = persistence.define('Calendar', {
    nodeId: "INT",
    title: "TEXT",
    body: "TEXT",
    image: "TEXT",
    location: "TEXT",
    startDate: "DATE",
    expirationDate: "DATE"
});

Calendar.index('nodeId', { unique: true });


var Link = persistence.define('Link', {
    linkId: "INT",
    label: "TEXT",
    linkUrl: "TEXT",
    description: "TEXT"
});

Link.index('linkId', { unique: true });


var MPLStammdaten = persistence.define('MPLStammdaten', {
    nodeId: "INT",
    productDescription: "TEXT",
    pieceNumber: "TEXT",
    price: "TEXT",
    cooling: "TEXT",
    variant: "TEXT",
    volume: "TEXT",
    pressure: "TEXT",
    performance: "TEXT"
});

MPLStammdaten.index(['nodeId', 'piecenumber'], { unique: true });

var Contacts = persistence.define('Contacts', {
    contactId: "INT",
    name: "TEXT",
    forename: "TEXT",
    phone: "TEXT",
    mobilePhone: "TEXT",
    fax: "TEXT",
    email: "TEXT",
    department: "TEXT",
    jobFunction: "TEXT",
    profilePicture: "TEXT",
    isFolder: "BOOL",
    parentFolder: "INT"
});

Contacts.index('contactId', { unique: true });