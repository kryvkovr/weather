Ext.define('Weather.template.Mytemplate', {
    extend: 'Ext.XTemplate',

    tpl: ['<div class="weatherDayBlock">',
                '<div style="font-size:20px">Day:{dt}</div>',
                '<div style="color:red">temp max {temp.max}</div>',
                '<div style="color:green">temp min {temp.min}</div>',
            '</div>'
    ],
        
    constructor: function () {
        this.callParent(this.tpl);
    }
});


