Ext.define('Weather.store.WeatherMainStore', {
    extend: 'Ext.data.Store',
    //singleton : false,
    proxy: {
        type: 'ajax',      
        reader: {
            type: 'json',
            root: 'list'         
        }
    } 
});