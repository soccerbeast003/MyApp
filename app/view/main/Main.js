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
        'MyApp.view.east.East'
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
        var headerImage = Ext.create('Ext.Img', {
            src: 'http://www.sencha.com/img/20110215-feat-html5.png'
        });
        this.on('editEvent', function() {

        });
        this.items = [
            {
                xtype: 'eastPanel'

            },


            {
                xtype: 'treepanel',
                region: 'west',
                title: 'Simple Tree',
                store: Ext.create('Ext.data.TreeStore', {

                    root: {
                        expanded: true,
                        children: [
                            { text: "detention", leaf: true },
                            { text: "homework", expanded: true, children: [
                                { text: "book report", leaf: true },
                                { text: "algebra", leaf: true}
                            ] },
                            { text: "buy lottery tickets", leaf: true }
                        ]
                    }

                }),


                width: 250,
                split: true,

                tbar: [
                    {
                        text: 'Delete',
                        handler: 'onDelete'

                    } ,
                    {
                        text: 'Quit',
                        handler: 'onQuit'

                    }
                ]
            },
            {
                xtype: 'app-center'
            },

//
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
