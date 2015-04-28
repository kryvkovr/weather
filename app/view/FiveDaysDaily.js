Ext.define("Weather.view.FiveDaysDaily", {
    id:'weatherDaily',
    alias: 'widget.weather-five-days-daily',

    requires:[
        'Weather.template.Mytemplate'
    ],
    
    extend: 'Ext.view.View',
    height:200,

    itemSelector: '',

    initComponent: function() {
        this.itemTpl=Weather.template.Mytemplate.create({});
        this.callParent(arguments);
    },
   
    store:'WeatherFiveDaysDaily',
    listeners: {
        'itemclick': function(view, record, item, idx, event, opts){
           console.log(Weather.template.Mytemplate.instanceCount)             
        }
    }

   

});