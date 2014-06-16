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

    width: 500,
    height: 300,
    title: "HBoxLayout Panel",
    layout: {
        type: 'hbox',
        align: 'stretch'
    },
    items: [{
        layout:{
            type: 'vbox'
        },
        items: [{

            xtype: 'panel',
            title: 'Inner Panel One',
            flex: 1
        }]
    },{
        xtype: 'panel',
        title: 'Inner Panel Two',
        flex: 1
    },{
        xtype: 'panel',
        title: 'Inner Panel Three',
        flex: 1
    }],
    alias: 'widget.home',
//    controller: 'home',
    initComponent: function () {

        this.callParent();
    }
});