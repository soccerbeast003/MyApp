/**
 * This class is the main view for the application. It is specified in app.js as the
 * "autoCreateViewport" property. That setting automatically applies the "viewport"
 * plugin to promote that instance of this class to the body element.
 *
 * TODO - Replace this content of this view to suite the needs of your application.
 */
Ext.define('MyApp.view.center.Center', {
    extend: 'Ext.container.Container',

    requires: [
        'Ext.tree.Panel',
        'Ext.data.TreeStore',
        'Ext.grid.Panel',
        'Ext.grid.plugin.RowEditing',
        'MyApp.view.center.grids.SimpsonsGrid'
    ],

    xtype: 'app-center',

    region: 'center',

    controller: 'center',

//    viewModel: {
//        type: 'center'
//    },

    layout: {
        type: 'fit'
    },

    initComponent: function () {

        this.items = [
            {
                xtype: 'tabpanel',
                items: [
                    {
                        title: 'Tab 1',
                        xtype: 'simpsons'
                    },
                    {
                        title: 'Tab 2',
                        layout: 'vbox',

                        items: [
                            {
                                xtype: 'panel',
                                title: 'whatever',
                                width: 100,
                                height: 500,
                                bodyStyle: {
                                    backgroundColor: 'red'

                                }

                            },
                            {
                                xtype: 'panel',
                                title: 'eer',
                                width: 100,
                                height: 500
                            }
                        ]

                    }

                ]

            }
        ]
        this.callParent();
    }
});

