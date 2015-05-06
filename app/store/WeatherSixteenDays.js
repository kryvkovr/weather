Ext.define('Weather.store.WeatherSixteenDays', {
    extend: 'Ext.data.Store',
    //model:'Weather.model.SixteenDays',
    autoLoad:false,
    proxy: {
        type: 'ajax',      
        reader: {
            type: 'json',
            root: 'list'         
        }
    } 
});



