Ext.define('Weather.view.Main', {
    extend: 'Ext.container.Container',
    requires:[
        'Ext.tab.Panel',
        'Ext.layout.container.Border'
    ],
    
    xtype: 'app-main',

    layout: {
        type: 'border'
    },
    items: [{
        xtype: 'aliasmyheader'
    },{
        xtype: 'centerPanel'
    }]
});