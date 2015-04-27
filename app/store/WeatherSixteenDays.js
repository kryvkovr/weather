Ext.define('Weather.store.WeatherSixteenDays', {
    extend: 'Ext.data.Store',
    //model:'Weather.model.SixteenDays',
    // proxy: {
    //     type: 'ajax',      
    //     reader: {
    //         type: 'json',
    //         root: 'list'         
    //     }
    // } 

     fields:['dt'],
            data : [
                 {dt: 'Ed'},
                 {dt: 'Tommy'},
                 {dt: 'Ed'},
                 {dt: 'Tommy'},
                 {dt: 'Ed'},
                 {dt: 'Tommy'}

             ]      
});