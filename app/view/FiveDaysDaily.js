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
        
       // this.itemTpl=2+2;
        this.tpl=Weather.template.Mytemplate.create({});
        
        this.callParent(arguments);
    },
    //tpl:'',
    //itemSelector:'',

    //xtype: 'dataview',

    
    //itemTpl: 'fffff',
    // itemTpl: Weather.template.Mytemplate.instanceCount,

    // itemTpl:new Ext.XTemplate('<div class="weatherDayBlock">',
    //                                 '<div style="font-size:20px">Day:{dt}</div>',
    //                                 '<div style="color:red">temp max {temp.max}</div>',
    //                                 '<div style="color:green">temp min {temp.min}</div>',
    //                             '</div>'
    //                         ),                        
    store:'WeatherFiveDaysDaily',
    listeners: {
        'itemclick': function(view, record, item, idx, event, opts){
          // var me= Ext.create('Weather.template.Mytemplate')
           console.log(Weather.template.Mytemplate.instanceCount)             
             
        }
    }

   

});