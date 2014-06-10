/**
 * This class is the main view for the application. It is specified in app.js as the
 * "autoCreateViewport" property. That setting automatically applies the "viewport"
 * plugin to promote that instance of this class to the body element.
 *
 * TODO - Replace this content of this view to suite the needs of your application.
 */
Ext.define('MyApp.view.main.MainController', {
    extend: 'Ext.app.ViewController',

    requires: [
        'Ext.MessageBox'
    ],

    alias: 'controller.main',

    onDelete: function () {
        Ext.Msg.confirm('Confirm', 'Are you sure?', 'onConfirm', this);
    },
    onQuit: function () {
        Ext.Msg.confirm('Quit', 'Are you sure?', 'onConfirm', this);
    },
    onAdd: function () {
        var myGrid = this.lookupReference('myGrid'),
            rowEditor = myGrid.getPlugin('rowEdit');

        Ext.Msg.confirm('Yes', 'It Worked!', 'onConfirm', this);
        rowEditor.cancelEdit();

//        // Create a model instance
//        var r = Ext.create('Employee', {
//            name: 'New Guy',
//            email: 'new@sencha-test.com',
//            start: Ext.Date.clearTime(new Date()),
//            salary: 50000,
//            active: true
////        });
//
//        myGrid.store.insert(0, r);
        rowEditor.startEdit(0, 0);
    },

    onConfirm: function (choice) {
        if (choice === 'yes') {
            //
        }
    }
});
