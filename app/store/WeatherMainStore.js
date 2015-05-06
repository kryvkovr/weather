Ext.define('Weather.store.WeatherMainStore', {
    extend: 'Ext.data.Store',
    //singleton : false,
    autoLoad:false,
    proxy: {
        type: 'ajax',      
        reader: {
            type: 'json',
            root: 'list'         
        }
    } 
});