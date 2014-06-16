/**
 * This class is the main view for the application. It is specified in app.js as the
 * "autoCreateViewport" property. That setting automatically applies the "viewport"
 * plugin to promote that instance of this class to the body element.
 *
 * TODO - Replace this content of this view to suite the needs of your application.
 */
Ext.define('MyApp.view.grid.Details', {
    extend: 'Ext.grid.Panel',
    requires: [
        'Ext.grid.plugin.RowEditing',
        'MyApp.store.Details'
    ],

    alias: 'widget.details',
    reference: 'detailsGrid',
//    controller: 'main',
//    viewModel: {
//        type: 'center'
//    },

    height: 200,
    width: 400,

    initComponent: function () {

        var rowEditing = Ext.create('Ext.grid.plugin.RowEditing', {
            clicksToMoveEditor: 1,
            autoCancel: false,
            pluginId: 'rowEdit'
        });

        this.columns = [
            {
                header: 'Name',
                dataIndex: 'name'

            },

            {
                header: 'Product Id',
                dataIndex: 'productid',
                flex: 1,
                editor: {
                    allowBlank: false,
                    vtype: 'email'
                }
            },
            { header: 'Description', dataIndex: 'description' }
        ];
        this.plugins = [rowEditing];
        this.store = Ext.create('MyApp.store.Details');
        this.callParent();
    }
});