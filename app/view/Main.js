Ext.define('RandomWorder.view.Main', {
    extend: 'Ext.tab.Panel',
    xtype: 'main',
    requires: [
        'RandomWorder.view.Form',
        'RandomWorder.view.List'
    ],
    config: {
        tabBarPosition: 'bottom',

        // Passwordの複雑度とPasswordの一覧はタブパネル、
        // Passwordの出力結果はカードを使う？

        layout: {
            animation: ''
        },

        items: [
            { xtype: 'wordform' },
            { xtype: 'wordlist' }
        ],
    }
});
