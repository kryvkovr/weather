Ext.define('Weather.template.SixteenDays', {
    extend: 'Ext.XTemplate',

    tpl: ['<div class="sixteenWeatherDayBlock">{dt}',  
                '<div class="weatherDescription">',
                    '<table>',
                        '<tr>',
                            '<td><img src="http://openweathermap.org/img/w/{icon}.png"></img></td>',
                            '<td><span>{description}</span></td>',
                        '</tr>',
                        '<tr>',
                            '<td>Wind-speed</td>',
                            '<td>{speed}</td>',
                        '</tr>',
                        '<tr>',
                            '<td>Presuure</td>',
                            '<td>{pressure}</td>',
                        '</tr>',
                        '<tr>',
                            '<td>Max-temp</td>',
                            '<td>{temp.max}</td>',
                        '</tr>',
                        '<tr>',
                            '<td>Min-temp</td>',
                            '<td>{temp.min}</td>',
                        '</tr>',
                        '<tr>',
                            '<td>Night-temp</td>',
                            '<td>{temp.night}</td>',
                       ' </tr>',
                    '</table>',
                 '</div>',  
            '</div>'
    ],
        
    constructor: function () {
        this.callParent(this.tpl);
    }
});


