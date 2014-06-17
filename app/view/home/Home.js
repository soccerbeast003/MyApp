/**
 * This class is the main view for the application. It is specified in app.js as the
 * "autoCreateViewport" property. That setting automatically applies the "viewport"
 * plugin to promote that instance of this class to the body element.
 *
 * TODO - Replace this content of this view to suite the needs of your application.
 */
Ext.define('MyApp.view.home.Home', {
    extend: 'Ext.Panel',
    requires: [

    ],
    alias: 'widget.home',
    width: 500,
    height: 300,
    title: "HBoxLayout Panel",
    layout: {
        type: 'hbox',
        align: 'stretch'
    },
    items: [

        {
            flex: 1,
            layout: {
                type: 'vbox'
            },
            items: [
                {
                    width: 675,
                    xtype: 'customerCatalogs',
                    title: 'Current Catalogs',
                    flex: 1
                }
            ]

        },

        {
            flex: 1,
            layout: {
                type: 'vbox'
            },
            items: [
                {
                    width: 700,
                    xtype: 'simpsons',
                    title: 'Recently Modified Catalogs',
                    flex: 1
                },
                {
                    width: 700,
                    xtype: 'suppliers',
                    title: 'Recently Added Catalogs',
                    flex: 1
                }
            ]
        }
    ],

//    controller: 'home',

    initComponent: function () {

        this.callParent();
    }
});