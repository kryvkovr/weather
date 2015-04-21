Ext.define('Weather.view.Viewport', {
    extend: 'Ext.container.Viewport',
    requires:[
        'Ext.layout.container.Fit',
        'Weather.view.Main',
        'Weather.view.Header',
        'Weather.view.Center',
        'Ext.toolbar.TextItem'
    ],

    layout: {
        type: 'fit'
    },

    items: [{
        xtype: 'app-main'
    }]
});
