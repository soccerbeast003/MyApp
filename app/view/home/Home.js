/**
 * This class is the main view for the application. It is specified in app.js as the
 * "autoCreateViewport" property. That setting automatically applies the "viewport"
 * plugin to promote that instance of this class to the body element.
 *
 * TODO - Replace this content of this view to suite the needs of your application.
 */
Ext.define('MyApp.view.home.Home', {
    extend: 'Ext.layout.container.Table',
    requires: [

    ],

    alias: 'widget.home',
    controller: 'home',
//    region: 'center',
    layout: {
        type: 'table',
        columns: 4
    },
//    split: true,
//    closable: true,
//    title: 'Details',
    //    viewModel: {
//        type: 'east'
//    },

    initComponent: function () {

//        this.items = [
//            {
//                xtype: 'container',
//                region: 'east',
//                width: 300,
//                height: 200,
//                split: true
//
//            }
//        ];
        this.callParent();
    }
});