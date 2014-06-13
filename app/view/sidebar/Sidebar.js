/**
 * This class is the main view for the application. It is specified in app.js as the
 * "autoCreateViewport" property. That setting automatically applies the "viewport"
 * plugin to promote that instance of this class to the body element.
 *
 * TODO - Replace this content of this view to suite the needs of your application.
 */
Ext.define('MyApp.view.sidebar.Sidebar', {
    extend: 'Ext.tab.Panel',

    alias: 'widget.sidebar',

//    ui: 'navigation',

    region: 'center',

    split: true,

    height: 400,

    width: 1200,

    tabPosition: 'left',

    tabRotation: 0,

    defaults: {
        textAlign: 'left',
        bodyPadding: 15
    },

    items: [
        {
            title: 'Home'
        },
        {
            title: 'Suppliers',
            xtype: 'suppliers'
        },
        {
            title: 'Product Types'
        },
        {
            title: 'About'
        }
    ]
});
