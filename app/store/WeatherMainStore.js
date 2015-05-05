Ext.define('Weather.store.WeatherMainStore', {
    extend: 'Ext.data.Store',
    proxy: {
        type: 'ajax',      
        reader: {
            type: 'json',
            root: 'list'         
        }
    } 
});