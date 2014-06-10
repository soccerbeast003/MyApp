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
        'Ext.Img'
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
        var rowEditing = Ext.create('Ext.grid.plugin.RowEditing', {
            clicksToMoveEditor: 1,
            autoCancel: false,
            pluginId: 'rowEdit'
        });
        var headerImage = Ext.create('Ext.Img', {
            src: 'http://www.sencha.com/img/20110215-feat-html5.png'
        });
        this.items = [
            {
                xtype: 'container',
                region: 'east',
                width: 300,
                split: true

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

//            {
//                region: 'center',
//                xtype: 'tabpanel',
//                items: [
//                    {
//                        xtype: 'grid',
//                        reference: 'myGrid',
//                        tbar: [
//                            {
//                                text: 'Add Employee',
//                                handler: 'onAdd'
//                            },
//                            {
//                                text: 'Remove Employee',
//                                handler: 'onRemove'
//                            }
//                        ],
//                        title: 'Simpsons Grid',
//                        height: 200,
//                        width: 400,
//                        columns: [
//                            {
//                                header: 'Name',
//                                dataIndex: 'name'
//
//                            },
//
//                            {
//                                header: 'Email',
//                                dataIndex: 'email',
//                                flex: 1,
//                                editor: {
//                                    allowBlank: false,
//                                    vtype: 'email'
//                                }
//                            },
//                            { header: 'Phone', dataIndex: 'phone' }
//                        ],
//                        plugins: [rowEditing],
//                        store: {
//                            storeId: 'simpsonsStore',
//                            fields: ['name', 'email', 'phone'],
//                            data: {'items': [
//                                { 'name': 'Lisa', "email": "lisa@simpsons.com", "phone": "555-111-1224"  },
//                                { 'name': 'Bart', "email": "bart@simpsons.com", "phone": "555-222-1234" },
//                                { 'name': 'Homer', "email": "homer@simpsons.com", "phone": "555-222-1244"  },
//                                { 'name': 'Marge', "email": "marge@simpsons.com", "phone": "555-222-1254"  }
//                            ]},
//                            proxy: {
//                                type: 'memory',
//                                reader: {
//                                    type: 'json',
//                                    rootProperty: 'items'
//                                }
//                            }
//                        }
//
//                    },
//                    {
//                        title: 'Tab 2',
//                        layout: 'vbox',
//
//                        items: [
//                            {
//                                xtype: 'panel',
//                                title: 'whatever',
//                                width: 100,
//                                height: 500,
//                                bodyStyle: {
//                                    backgroundColor: 'red'
//
//                                }
//
//                            },
//                            {
//                                xtype: 'panel',
//                                title: 'eer',
//                                width: 100,
//                                height: 500
//                            }
//                        ]
//
//                    }
//
//                ]
//            },

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
