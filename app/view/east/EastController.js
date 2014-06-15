/**
 * This class is the main view for the application. It is specified in app.js as the
 * "autoCreateViewport" property. That setting automatically applies the "viewport"
 * plugin to promote that instance of this class to the body element.
 *
 * TODO - Replace this content of this view to suite the needs of your application.
 */
Ext.define('MyApp.view.east.EastController', {
    extend: 'Ext.app.ViewController',

    requires: [
        'Ext.MessageBox'
    ],

    alias: 'controller.east',
    hidden: true,
    init: function () {
        this.listen({
            controller: {
                'center': {
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
        var eastPanel = this.getView(),
            DetailsGrid = this.lookupReference('detailsGrid');

        if(DetailsGrid){
            eastPanel.remove(DetailsGrid);
        }
        eastPanel.insert(0, {
            xtype: 'details'
        });
    }

});