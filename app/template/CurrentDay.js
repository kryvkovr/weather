Ext.define('Weather.template.CurrentDay', {
    extend: 'Ext.XTemplate',

    tpl: ['<table>',
            '<tr>',
                '<td><img src="http://openweathermap.org/img/w/{icon}.png"></img></td>',
                '<td><span>{description}</span></td>',
            '</tr>',
            '<tr>',
                '<td>Sunrise</td>',
                '<td>{sys.sunrise}</td>',
            '</tr>',
            '<tr>',
                '<td>Sunset</td>',
                '<td>{sys.sunrise}</td>',
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
    ],
        
    constructor: function () {
        this.callParent(this.tpl);
    }
});

