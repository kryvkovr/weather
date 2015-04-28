Ext.define('Weather.view.Main', {
    extend: 'Ext.container.Container',
    requires:[
        'Ext.tab.Panel',
        'Ext.layout.container.Border',
        'Weather.view.Header',
        'Weather.view.Center'
    ],
      
    xtype: 'app-main',

    layout: {
        type: 'border'
    },
    items: [{
        xtype: 'weather-header',
        region:'north',
    },{
        xtype: 'center-panel',
        region:'center',
    }]
});