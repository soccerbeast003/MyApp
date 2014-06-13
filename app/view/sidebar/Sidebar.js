/**
 * This class is the main view for the application. It is specified in app.js as the
 * "autoCreateViewport" property. That setting automatically applies the "viewport"
 * plugin to promote that instance of this class to the body element.
 *
 * TODO - Replace this content of this view to suite the needs of your application.
 */
Ext.define('MyApp.view.sidebar.Sidebar', {
    extend: 'Ext.grid.Panel',

    requires: [
        'MyApp.store.Sidebar'
    ],

    alias: 'widget.sidebarMain',

    selType: 'cellmodel',

    region: 'west',

    title: 'Navigation',
    width: 125,
    disableSelection: true,
    hideHeaders: true,
    split: true,
//
//    controller: 'center',

//    viewModel: {
//        type: 'center'
//    },
//
//    layout: {
//        type: 'fit'
//    },


    initComponent: function () {
        this.columns = [
            {
                dataIndex: 'page',
                flex: 1

            }

        ];
        this.store = Ext.create('MyApp.store.Sidebar');





        this.callParent();
    }
});