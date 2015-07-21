Ext.define("Weather.view.SixteenDays", {
    extend: 'Ext.view.View',
    alias: 'widget.sixteen-days',

    requires:[
         'Weather.template.SixteenDays',
         'Weather.store.WeatherSixteenDays',
         'Weather.model.SixteenDays'
     ],

    
    title: '16 DAYS',
    autoScroll: true,  
   // store:'WeatherSixteenDays',
   
    initComponent: function() {
        this.itemTpl=Weather.template.SixteenDays.create({});
        this.callParent(arguments);
    }
   
});

