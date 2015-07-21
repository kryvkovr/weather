Ext.define('Weather.template.FiveDaysDaily', {
    extend: 'Ext.XTemplate',

    tpl: ['<div class="weatherDayBlock">',
                '<div class="date">Day:{dt}</div>',
                '<div class="temp-max">temp max {temp.max}</div>',
                '<div class="temp-min">temp min {temp.min}</div>',
            '</div>'
    ],

    constructor: function () {
        this.callParent(this.tpl);
    }
});


