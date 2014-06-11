/**
 * This class is the main view for the application. It is specified in app.js as the
 * "autoCreateViewport" property. That setting automatically applies the "viewport"
 * plugin to promote that instance of this class to the body element.
 *
 * TODO - Replace this content of this view to suite the needs of your application.
 */
Ext.define('MyApp.view.center.CenterController', {
    extend: 'Ext.app.ViewController',

    requires: [
        'Ext.MessageBox'
    ],

    alias: 'controller.center',
    onQuit: function () {
        Ext.Msg.confirm('Quit', 'Are you sure?', 'onConfirm', this);
    },
    onAdd: function () {
        var myGrid = this.lookupReference('myGrid'),
            rowEditor = myGrid.getPlugin('rowEdit');

        Ext.Msg.confirm('Yes', 'It Worked!', 'onConfirm', this);
        rowEditor.cancelEdit();
        rowEditor.startEdit(0, 0);
    },
    onEdit: function () {
        this.fireEvent('editEvent');
    }

});