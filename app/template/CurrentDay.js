Ext.define('Weather.template.CurrentDay', {
    extend: 'Ext.XTemplate',

    tpl: ['{sys}{weather}{main}'
    ],
        
    constructor: function () {
        this.callParent(this.tpl);
    }
});