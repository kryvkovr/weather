Ext.define('Weather.view.Viewport', {
    extend: 'Ext.container.Viewport',
    requires:[
        'Ext.layout.container.Fit',
        'Weather.view.Main'
    ],

    layout: {
        type: 'border'
    },

    items: [{
        xtype: 'aliasmyheader'
    },{
        xtype: 'centerPanel'
    }]
});
