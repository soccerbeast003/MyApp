/**
 * This class is the main view for the application. It is specified in app.js as the
 * "autoCreateViewport" property. That setting automatically applies the "viewport"
 * plugin to promote that instance of this class to the body element.
 *
 * TODO - Replace this content of this view to suite the needs of your application.
 */
Ext.define('MyApp.view.east.East', {
    extend: 'Ext.container.Container',
    requires: [
        'Ext.tree.Panel',
        'Ext.data.TreeStore',
        'Ext.grid.Panel',
        'Ext.grid.plugin.RowEditing',
        'MyApp.view.center.Center',
        'Ext.tab.Panel',
        'Ext.Img',
        'MyApp.view.center.grids.SimpsonsGrid'

    ],

    xtype: 'app-east',
    controller: 'east',
    region: 'east',
    split: true,
    //    viewModel: {
//        type: 'east'
//    },

    layout: {
        type: 'fit'
    },

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