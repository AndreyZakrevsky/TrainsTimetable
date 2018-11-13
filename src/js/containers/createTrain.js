import {DISTANCES} from './layouts';

class Train {
    constructor( name , departure_point ,arrival_point, departureDate ) {
        this.name = name;
        this.departure_point = departure_point;
        this.arrival_point = arrival_point;
        this.departureDate = departureDate;
    }

    arrivalDate(){
        let date = new Date();
            date.setDate(this.departureDate.getDate());
            date.setHours(this.departureDate.getHours());
            date.setMinutes(this.departureDate.getMinutes());
            date.setSeconds(this.departureDate.getSeconds());
        let timeHour = (DISTANCES[this.departure_point][this.arrival_point] / (Math.random() * (121 - 80)+80)).toFixed(2);
        let timeMinutes  = (timeHour +'').split(".")[1].substr(0,2);
            timeHour = Math.floor(timeHour);
            if(timeMinutes > 60){
                timeMinutes = timeMinutes % 60;
                timeHour++ ;
            }
            date.setHours(date.getHours() + timeHour);
            date.setMinutes(date.getMinutes() + Number(timeMinutes));
        return date;
    }

    cost(){
      return String(((DISTANCES[this.departure_point][this.arrival_point] / 100) * 40.251).toFixed(2));
    }

}

export default Train;