/**
 * This class is the main view for the application. It is specified in app.js as the
 * "autoCreateViewport" property. That setting automatically applies the "viewport"
 * plugin to promote that instance of this class to the body element.
 *
 * TODO - Replace this content of this view to suite the needs of your application.
 */
Ext.define('MyApp.store.Details', {
    extend: 'Ext.data.Store',

    storeId: 'detailsStore',

    fields: ['name', 'email', 'phone'],
    data: {
        'items': [
            { 'name': 'Lisa', "email": "lisa@simpsons.com", "phone": "555-111-1224"  },
            { 'name': 'Bart', "email": "bart@simpsons.com", "phone": "555-222-1234" },
            { 'name': 'Homer', "email": "homer@simpsons.com", "phone": "555-222-1244"  },
            { 'name': 'Marge', "email": "marge@simpsons.com", "phone": "555-222-1254"  }
        ]
    },
    proxy: {
        type: 'memory',
        reader: {
            type: 'json',
            rootProperty: 'items'
        }
    },
    autoLoad: true
});