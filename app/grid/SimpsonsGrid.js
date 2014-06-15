/**
 * This class is the main view for the application. It is specified in app.js as the
 * "autoCreateViewport" property. That setting automatically applies the "viewport"
 * plugin to promote that instance of this class to the body element.
 *
 * TODO - Replace this content of this view to suite the needs of your application.
 */
Ext.define('MyApp.grid.SimpsonsGrid', {
    extend: 'Ext.grid.Panel',
    requires: [
        'Ext.grid.plugin.RowEditing',
        'MyApp.store.SimpsonsStore'
    ],

    alias: 'widget.simpsons',
    reference: 'simpsonsGrid',

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
        this.store = Ext.create('MyApp.store.SimpsonsStore');
        this.callParent();
    }
});