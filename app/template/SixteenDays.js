Ext.define('Weather.template.SixteenDays', {
    extend: 'Ext.XTemplate',

    tpl: ['<div class="sixteenWeatherDayBlock">{dt}',  
                '<div class="weatherDescription">',
                    '<img src="http://openweathermap.org/img/w/{weather}.png"></img>',
                    '<div class="tempMax">Max-temp: {temp.max}</div>',
                    '<div class="tempMin">Min-temp: {temp.min}</div>',
                    '<div class="tempNight">Night-temp: {temp.night}</div>',
                    '<div class="tempMax">Night-temp: {pressure}</div>',
                    '<div class="tempMax">Night-temp: {speed}</div>',
                 '</div>',  
            '</div>'
    ],
        
    constructor: function () {
        this.callParent(this.tpl);
    }
});


