Ext.define('Weather.view.Main', {
    extend: 'Ext.container.Container',
    requires:[
        'Ext.tab.Panel',
        'Ext.layout.container.Border',
        'Weather.view.Header',
        'Weather.view.Center',
        'Ext.toolbar.TextItem'
    ],
    
    xtype: 'app-main',

    layout: {
        type: 'border'
    },
    items: [{
        xtype: 'weatherHeader'
    },{
        xtype: 'centerPanel'
    },{
        xtype: 'aliasweatherOneDayHourly'
    }]
});