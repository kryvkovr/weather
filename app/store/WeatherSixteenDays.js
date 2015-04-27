Ext.define('Weather.store.WeatherSixteenDays', {
    extend: 'Ext.data.Store',
    model:'Weather.model.SixteenDays',
    proxy: {
        type: 'ajax',      
        reader: {
            type: 'json',
            root: 'list'         
        }
    } 
});