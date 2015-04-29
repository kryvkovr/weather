Ext.define("Weather.view.SixteenDays", {
    extend: 'Ext.view.View',

    requires:[
         'Weather.template.SixteenDays'
     ],

    alias: 'widget.sixteen-days',
    title: '16 DAYS',
    autoScroll: true,  
    store:'WeatherSixteenDays',
   
    initComponent: function() {
        this.itemTpl=Weather.template.SixteenDays.create({});
        this.callParent(arguments);
    }
   
   
});

