Ext.define('Weather.template.FiveDaysHourly', {
    extend: 'Ext.XTemplate',

    tpl: ['<div class="weatherDayHour">',
                '<div style="font-size:15px;color:#fff">Hour-{hour}</div>',
                '<div style="color:red">temp min {main.temp_min}</div>',
                '<div style="color:yellow">temp max {main.temp_max}</div>',
                '<img src="http://openweathermap.org/img/w/{icon}.png" width="100"></img>',
            '</div>'
    ],
        
    constructor: function () {
        this.callParent(this.tpl);
    }
});
