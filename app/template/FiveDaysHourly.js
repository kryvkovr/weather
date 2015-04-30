Ext.define('Weather.template.FiveDaysHourly', {
    extend: 'Ext.XTemplate',

    tpl: ['<div class="weatherDayHour">',
                '<div class="day">{day}</div>',
                '<div class="day">Hour-{hour}</div>',
                '<div class="temp-min">temp min {main.temp_min}</div>',
                '<div class="temp-max">temp max {main.temp_max}</div>',
                '<img src="http://openweathermap.org/img/w/{icon}.png"></img>',
            '</div>'
    ],
        
    constructor: function () {
        this.callParent(this.tpl);
    }
});
