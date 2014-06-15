/**
 * This class is the main view for the application. It is specified in app.js as the
 * "autoCreateViewport" property. That setting automatically applies the "viewport"
 * plugin to promote that instance of this class to the body element.
 *
 * TODO - Replace this content of this view to suite the needs of your application.
 */
Ext.define('MyApp.view.main.Main', {
    extend: 'Ext.container.Container',
    requires: [
        'Ext.tree.Panel',
        'Ext.data.TreeStore',
        'Ext.grid.Panel',
        'Ext.grid.plugin.RowEditing',
        'MyApp.view.center.Center',
        'Ext.tab.Panel',
        'Ext.Img',
        'MyApp.view.east.East',
        'MyApp.view.sidebar.Sidebar'
    ],

    xtype: 'app-main',

    controller: 'main',
    viewModel: {
        type: 'main'
    },

    layout: {
        type: 'border'
    },

    initComponent: function () {
        this.items = [
            {
                xtype: 'app-east'

            },
//            {
//                xtype: 'app-center'
//            },
            {
                xtype: 'sidebar'
            },


            {
                region: 'north',

                xtype: 'panel',
                items: [
                    {
                        xtype: 'image',
                        src: 'resources/images/headerimage.jpg'
                    }
                ],
                height: 100

            },
            {
                region: 'south',

                xtype: 'panel',
                items: [
                    {
                        xtype: 'image',
                        src: 'resources/images/headerimage.jpg'
                    }
                ],
                height: 100

            }
        ];
        this.callParent();
    }


});
