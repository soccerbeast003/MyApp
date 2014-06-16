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

    fields: ['name', 'productid', 'description'],
    data: {
        'items': [
            { 'name': 'Lisa', "productid": "234d345", "description": "cat"  },
            { 'name': 'Bart', "productid": "th546dssdf", "description": "dog" },
            { 'name': 'Homer', "productid": "sadfg43563", "description": "ferret"  },
            { 'name': 'Marge', "productid": "m35cc64e3j", "description": "monkey"  }
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