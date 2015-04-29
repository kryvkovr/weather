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



// itemTpl:new Ext.XTemplate('<div class="sixteenWeatherDayBlock">{dt}',                                      
//                                         '<div class="weatherDescription">',
//                                             '<img src="http://openweathermap.org/img/w/{weather}.png"></img>',
//                                             '<div class="tempMax">Max-temp: {temp.max}</div>',
//                                             '<div class="tempMin">Min-temp: {temp.min}</div>',
//                                             '<div class="tempNight">Night-temp: {temp.night}</div>',
//                                         '</div>',                                        
//                                 '</div>'
//                             ),