Ext.define('Weather.store.WeatherFiveDaysDaily', {
    extend: 'Ext.data.Store',
    model:'Weather.model.FiveDaysDaily',
    autoLoad:false,
    proxy: {
        type: 'ajax',      
        reader: {
            type: 'json',
            root: 'list'         
        }
    }       
});