Ext.define('Weather.template.CurrentDay', {
    extend: 'Ext.XTemplate',

    tpl: [
        '<h1>{name}</h1>',
        '<table>',
            '<tr>',
                '<td><img src="http://openweathermap.org/img/w/{icon}.png"></img></td>',
                '<td><span>{description}</span></td>',
            '</tr>',
            '<tr>',
                '<td>Sunrise</td>',
                '<td>{sunrise}</td>',
            '</tr>',
            '<tr>',
                '<td>Sunset</td>',
                '<td>{sunset}</td>',
            '</tr>',
            '<tr>',
                '<td>Max-temp</td>',
                '<td>{main.temp_max}</td>',
            '</tr>',
            '<tr>',
                '<td>Min-temp</td>',
                '<td>{main.temp_min}</td>',
            '</tr>',
            '<tr>',
                '<td>Pressure</td>',
                '<td>{main.pressure}</td>',
           ' </tr>',
           '<tr>',
                '<td>Wind speed</td>',
                '<td>{wind.speed}</td>',
           ' </tr>',
        '</table>',
    ],
        
    constructor: function () {
        this.callParent(this.tpl);
    }
});

