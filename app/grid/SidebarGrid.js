/**
 * This class is the main view for the application. It is specified in app.js as the
 * "autoCreateViewport" property. That setting automatically applies the "viewport"
 * plugin to promote that instance of this class to the body element.
 *
 * TODO - Replace this content of this view to suite the needs of your application.
 */
Ext.define('MyApp.grid.SidebarGrid', {
    extend: 'Ext.grid.Panel',
    requires: [
        'MyApp.store.SidebarStore'
    ],

    alias: 'widget.sidebar',
    reference: 'sidebarGrid',
    selType: 'cellmodel',

//    controller: 'main',
//    viewModel: {
//        type: 'center'
//    },

    title: 'Navigation',
    height: 200,
    width: 400,

    initComponent: function () {

        this.columns = [
            {
                dataIndex: 'page'

            }

        ];
        this.store = Ext.create('MyApp.store.SidebarStore');
        this.callParent();
    }
});