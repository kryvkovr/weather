Ext.define('Weather.store.WeatherFiveDaysHourly', {
    extend: 'Ext.data.Store',
    model:'Weather.model.FiveDaysHourly',
    proxy: {
        type: 'ajax',      
        //url: 'http://api.openweathermap.org/data/2.5/forecast/daily?q=London&cnt=5&mode=json',
        reader: {
            type: 'json',
            root: 'list'         
        }
    }       
});