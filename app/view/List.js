Ext.define('RandomWorder.view.List', {
    extend: 'Ext.dataview.List',
    xtype: 'wordlist',

    requires: [
        'Ext.TitleBar',
    ],


    config: {
        title: 'List',
        iconCls: 'list',
        layout: 'fit',

        items: [
            {
                docked: 'top',
                xtype: 'titlebar',     
                title: 'List',
        
                items: [
                    {
                        xtype: 'button',
                        ui: 'decline',
                        text: 'clear',
                        itemId: 'clearListButton'
                    }
                ]
            },
            
            {
                xtype: 'list',
                store: 'RandomWords',
                itemTpl: [
                    '<div>{word}</div>'
                ]
            },
        ],

        listeners: [
            {
                delegate: '#clearListButton',
                event: 'tap',
                fn: function () {
                        //<debug>
                        console.log('Delete Every History');
                        //</debug>
                        this.fireEvent('clearlist')
                }
            }
        ]

    }

});
