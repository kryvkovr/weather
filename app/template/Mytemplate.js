Ext.define('Weather.template.Mytemplate', {
    extend: 'Ext.XTemplate',

    tpl: ['<div>{dt}hello world</div>'],
    // statics: {
    //     instanceCount: 'blalalalalaalalalal',
    // },        
    constructor: function () {
        this.callParent(this.tpl);
    }
});