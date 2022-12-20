export class WeatherDataProcessor {
    #cityGeocodes
    constructor() {
        this.#cityGeocodes = [{city:"Rehovot", latitude:31.894756, longitude:34.809322},
         {city:"Haifa", latitude:32.794044, longitude:34.989571}, {city: "Jerusalem", latitude:31.771959, longitude:35.217018},
         {city: "Eilat", latitude:29.5581, longitude:34.9482},{city: "Tel-Aviv", latitude: 32.166313, longitude:34.843311}
        {}, {}] //todo fill this array from Internet
    }
        getData(requestObject) {
            //{city, dateFrom, dateTo, hoursFrom, hoursTo}
            const url = this.getUrl(requestObject);
            const promiseResponse = fetch(url);
            return this.processData(promiseResponse.then(response => response.json()));
    
        }
        getUrl(requestObject) {
            
                "https://api.open-meteo.com/v1/gfs?latitude=31.0461&longitude=34.8516&hourly=temperature_2m&timezone=IST&start_date=2022-12-18&end_date=2023-01-03
                let start_date = "2022-12-18";
                let end_date = "2022-12-18";
                const baseUrl = "https://api.open-meteo.com/v1/gfs?";
                const baseParams = "&hourly=temperature_2m&timezone=IST&";
                const url = `${baseUrl}latitude=${latitude}&longitude=${longitude}${baseParams}start_date=${start_date}&end_date=${end_date}`
                let promiseResponse = fetch(url)
                let promiseData = promiseResponse.then(response => response.json());
                let dataProcessing = promiseData.then(data => console.log(data.hourly.temperature_2m));
                console.log(dataProcessing);
            }
        
        processData(promiseData) {
            return promiseData(data => {
                //TODO
               // return {city, objects: [{date,hour,temperature},...]}
            })
        }
    }



