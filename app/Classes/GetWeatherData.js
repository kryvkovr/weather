Ext.define('Weather.Classes.GetWeatherData', {
    // singleton:true,
    getWeatherJson:function(url) {
        return new Promise(function(resolve, reject) {
            var req = new XMLHttpRequest();
            req.open('GET', url);

            req.onload = function() {
                if (req.status == 200){
                    resolve(req.response);
                }else {
                    reject(Error('Cant load weather data'));
                }
            };

            req.onerror = function() {
                reject(Error("Network Error"));
            };

            req.send();
          });
    }


   
});
