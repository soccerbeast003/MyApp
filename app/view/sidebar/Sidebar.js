/**
 * This class is the main view for the application. It is specified in app.js as the
 * "autoCreateViewport" property. That setting automatically applies the "viewport"
 * plugin to promote that instance of this class to the body element.
 *
 * TODO - Replace this content of this view to suite the needs of your application.
 */
Ext.define('MyApp.view.sidebar.Sidebar', {
    extend: 'Ext.container.Container',

    requires: [
        'Ext.grid.Panel',
        'MyApp.grid.SidebarGrid'
    ],

    alias: 'sidebarMain',

    region: 'west',

    controller: 'center',

//    viewModel: {
//        type: 'center'
//    },

    layout: {
        type: 'fit'
    },

    xtype: 'sidebarGrid',

    initComponent: function () {
        this.items = [
            {
                xtype: 'sidebar',
                split: true,
                width: 125
            }
        ];



        this.callParent();
    }
});