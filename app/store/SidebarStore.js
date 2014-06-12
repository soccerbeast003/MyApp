/**
 * This class is the main view for the application. It is specified in app.js as the
 * "autoCreateViewport" property. That setting automatically applies the "viewport"
 * plugin to promote that instance of this class to the body element.
 *
 * TODO - Replace this content of this view to suite the needs of your application.
 */
Ext.define('MyApp.store.SidebarStore', {
    extend: 'Ext.data.Store',

    storeId: 'sidebarStore',

    fields: ['page'],
    data: {
        'items': [
            { 'page': 'Main'},
            { 'page': 'Suppliers'},
            { 'page': 'Product Types'},
            { 'page': 'About'}
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