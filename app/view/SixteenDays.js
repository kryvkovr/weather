Ext.define("Weather.view.SixteenDays", {
    extend: 'Ext.view.View',
    //id:'weatherDaily',
    alias: 'widget.sixteen-days',
    title: '16 DAYS',
    autoScroll: true,  
    itemTpl:new Ext.XTemplate('<div class="sixteenWeatherDayBlock">{dt}',                                      
                                        '<div class="weatherDescription">',
                                            '<img src="http://openweathermap.org/img/w/{weather}.png"></img>',
                                            '<div class="tempMax">Max-temp: {temp.max}</div>',
                                            '<div class="tempMin">Min-temp: {temp.min}</div>',
                                            '<div class="tempNight">Night-temp: {temp.night}</div>',
                                        '</div>',                                        
                                '</div>'
                            ),
     store:'WeatherSixteenDays'
    // requires:[
    //     'Weather.template.FiveDaysDaily'
    // ],

    // height:200,
    // itemSelector: '',

    // initComponent: function() {
    //     this.itemTpl=Weather.template.FiveDaysDaily.create({});
    //     this.callParent(arguments);
    // },
   
    //store:'WeatherFiveDaysDaily'
});