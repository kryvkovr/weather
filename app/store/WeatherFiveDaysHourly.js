Ext.define('Weather.store.WeatherFiveDaysHourly', {
    extend: 'Ext.data.Store',
    model:'Weather.model.FiveDaysHourly',
    autoLoad:false,
    proxy: {
        type: 'ajax',      
        reader: {
            type: 'json',
            root: 'list'         
        }
    }       
});