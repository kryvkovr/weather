Ext.define('Weather.template.CurrentDay', {
    extend: 'Ext.XTemplate',

    tpl: ['hello from template{name}'
    ],
        
    constructor: function () {
        this.callParent(this.tpl);
    }
});