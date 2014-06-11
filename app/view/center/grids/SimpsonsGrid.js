/**
 * This class is the main view for the application. It is specified in app.js as the
 * "autoCreateViewport" property. That setting automatically applies the "viewport"
 * plugin to promote that instance of this class to the body element.
 *
 * TODO - Replace this content of this view to suite the needs of your application.
 */
Ext.define('MyApp.view.center.grids.SimpsonsGrid', {
    extend: 'Ext.grid.Panel',
    requires: [
        'Ext.grid.plugin.RowEditing'
    ],

    xtype: 'simpsons',
    reference: 'simpsonGrid',

//    controller: 'main',
//    viewModel: {
//        type: 'center'
//    },

    title: 'Simpsons Grid',
    height: 200,
    width: 400,

    initComponent: function () {

        var rowEditing = Ext.create('Ext.grid.plugin.RowEditing', {
            clicksToMoveEditor: 1,
            autoCancel: false,
            pluginId: 'rowEdit'
        });
        this.tbar = [
            {
                text: 'Add Employee',
                handler: 'onAdd'
            },
            {
                text: 'Remove Employee',
                handler: 'onRemove'
            },
            {
                text: 'Edit Employee',
                handler: 'onEdit'
            }
        ];

        this.columns = [
            {
                header: 'Name',
                dataIndex: 'name'

            },

            {
                header: 'Email',
                dataIndex: 'email',
                flex: 1,
                editor: {
                    allowBlank: false,
                    vtype: 'email'
                }
            },
            { header: 'Phone', dataIndex: 'phone' }
        ];
        this.plugins = [rowEditing];
        this.store = Ext.create('Ext.data.Store', {
            storeId: 'simpsonsStore',
            fields: ['name', 'email', 'phone'],
            data: {
                'items': [
                    { 'name': 'Lisa', "email": "lisa@simpsons.com", "phone": "555-111-1224"  },
                    { 'name': 'Bart', "email": "bart@simpsons.com", "phone": "555-222-1234" },
                    { 'name': 'Homer', "email": "homer@simpsons.com", "phone": "555-222-1244"  },
                    { 'name': 'Marge', "email": "marge@simpsons.com", "phone": "555-222-1254"  }
                ]
            },
            proxy: {
                type: 'memory',
                reader: {
                    type: 'json',
                    rootProperty: 'items'
                }
            }
        });
        this.callParent();
    }
});