Ext.define('RandomWorder.model.RandomWord', {
    extend: 'Ext.data.Model',
    
    config: {
        fields: [
            { name: 'id', type: 'auto' },
            { name: 'word', type: 'string' },
            { name: 'recorded', type: 'date' }

        ],
        identifier: {
            type: 'uuid'
        }
    }
});
