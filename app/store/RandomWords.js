Ext.define('RandomWorder.store.RandomWords', {
    extend: 'Ext.data.Store',

    required: ['Ext.data.proxy.LocalStorage'],

    config: {
        model: 'RandomWorder.model.RandomWord',

        proxy: {
            type: 'localstorage',
            id: 'randomworder-store'
        },

        // data: [
        //     {
        //         id: '1',
        //         word: 'drowssoP',
        //         recorded: '2013-11-01 09:00:00',
        //     }
        // ],
        autoLoad: true,

        sorters: [{
            property: 'recorded',
            direction: 'DESC'
        }],

        //autoLoad: true,
    }
});
