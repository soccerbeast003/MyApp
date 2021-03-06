/**
 * This class is the main view for the application. It is specified in app.js as the
 * "autoCreateViewport" property. That setting automatically applies the "viewport"
 * plugin to promote that instance of this class to the body element.
 *
 * TODO - Replace this content of this view to suite the needs of your application.
 */
Ext.define('MyApp.view.sidebar.SidebarController', {
    extend: 'Ext.app.ViewController',

    requires: [
        'Ext.MessageBox'
    ],

    alias: 'controller.sidebar',
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
    },

    init: function () {
        this.listen({
            controller: {
                'suppliers': {
                    editEvent: this.addGrid
                }
            }
//            component: {
//                'simpsons': {
//                    editEvent: me.addGrid
//                }
//            }
        });

    },

    addGrid: function () {
        var suppliersGrid = this.lookupReference('suppliersGrid'),
            mainPanel = this.getView().up('main'),
            eastPanel = mainPanel.down('#stupidsteve');
        if (eastPanel) {
            eastPanel.destroy();
        }

        mainPanel.insert(0, Ext.create({

            xtype: 'panel',
            width: 300,
            itemId: 'stupidsteve',
            region: 'east',
            title: 'Details',
            split: true,
            closable: true,
            items: [
                {
                    xtype: 'suppliers'
                }
            ]

        }));

    }


});