Ext.define('RandomWorder.view.Form', {
    extend: 'Ext.form.Panel',
    xtype: 'wordform',

    requires: [
        'Ext.TitleBar',
        'Ext.form.FieldSet',
        'Ext.field.Spinner',
        'Ext.field.Checkbox'
    ],

    config: {
        title: 'Home',
        iconCls: 'home',
        layuout: 'fit',
        
        items: [
            {
                docked: 'top',
                xtype: 'titlebar',
                title: 'Home'
            },
            {
                xtype: 'fieldset',
                instructions: 'This app generates random words with elements you selected',
                items: [
                    {
                        xtype: 'spinnerfield',
                        name: 'length',
                        label: 'Length',
                        labelWidth: '50%',
                        value: 4,     
                        minValue: 1,
                        maxValue: 10,
                        stepValue: 1
                    },
                    {
                        xtype: 'checkboxfield',
                        label: 'Lowercase',
                        labelWidth: '80%',
                        name: 'lowercase',
                    },
                    {
                        xtype: 'checkboxfield',
                        label: 'Uppercase',
                        labelWidth: '80%',
                        name: 'uppercase',
                    },
                    {
                        xtype: 'checkboxfield',
                        label: 'Digit',
                        name: 'digit'
                    },
                    {
                        xtype: 'checkboxfield',
                        label: 'Symbol',
                        name: 'symbol'
                    },      
                ]
            },

            {
                layout: {
                    type: 'vbox',
                    pack: 'center',
                    align: 'center'
                },
                items: {
                    xtype: 'button',
                    ui: 'action', 
                    text: 'Generate',
                    witdth: '80%',
                    minWidth: '200px',
                    handler: function() {
                        var form = this.up('wordform');
                        form.fireEvent(
                            'showword', form.getRecord(), form.getValues());
                    }
                }
            }

        ],
        listeners: [{
            event: 'activate',
            fn: function () {
                //this.down('wordform').setup();
                this.setup()
            }
        }]
    },

    setup: function () {
        var now = new Date();
        var record = Ext.create('RandomWorder.model.RandomWord', {
            recorded: now,
        });
        this.setRecord(record);
        //<debug>    
        
        console.log(record.data.recorded);
        console.log('Hello World');
        //</debug>
    }
      
});
