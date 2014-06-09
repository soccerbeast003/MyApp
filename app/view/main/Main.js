/**
 * This class is the main view for the application. It is specified in app.js as the
 * "autoCreateViewport" property. That setting automatically applies the "viewport"
 * plugin to promote that instance of this class to the body element.
 *
 * TODO - Replace this content of this view to suite the needs of your application.
 */
Ext.define('MyApp.view.main.Main', {
    extend: 'Ext.container.Container',

    xtype: 'app-main',

    controller: 'main',
    viewModel: {
        type: 'main'
    },


        layout: {
        type: 'border'
    },

    items: [
        {
            xtype: 'container',
            style: {
                backgroundColor: 'red'

            },
            region: 'east',
            width: 100,
            split: true

        },

        {
            xtype: 'panel',
            bind: {
                title: '{name}',

                html: '{color}'
            },
            region: 'west',

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
            region: 'center',
            xtype: 'tabpanel',
            items: [
                {
                    title: 'Tab 1',
                    html: '<h2>Content appropriate for the current navigation.</h2>'
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
    ],

    initComponent: function () {
        console.log(this);

        this.callParent();
    }
});
