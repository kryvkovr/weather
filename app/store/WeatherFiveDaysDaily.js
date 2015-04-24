Ext.define('Weather.store.WeatherFiveDaysDaily', {
    extend: 'Ext.data.Store',
    model:'Weather.model.FiveDaysDaily',
    //fields: ['dt', 'temp'],    
    proxy: {
        type: 'ajax',      
        url: 'http://api.openweathermap.org/data/2.5/forecast/daily?q=London&cnt=5&mode=json',
        reader: {
            type: 'json',
            root: 'list'         
        }
    }       
});