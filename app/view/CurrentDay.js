Ext.define("Weather.view.CurrentDay", {
    id:'current-day',
    title: 'CURRENT DAY',
    extend: 'Ext.view.View',
    alias: 'widget.weather-current-day',

    requires:[
        'Weather.template.CurrentDay'
    ],

    itemSelector: '',
    store:"CurrentDay",

    initComponent: function() {
        this.itemTpl=Weather.template.CurrentDay.create({});
        this.callParent(arguments);
    }
});