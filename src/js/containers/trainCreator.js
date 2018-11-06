import generateCoords from './generateCoords';
import {CITIES_UA , CITIES_EN ,DAYS_UA ,DAYS_EN , DISTANCES ,ARR_UA ,ARR_EN} from './layouts';


const createNameTrain = ()=>{
    let numb = String(Math.floor(Math.random() * (1000 - 150)+100));
    let rand = Math.floor(Math.random() * (20 - 1)+1);
    let charEn = (ARR_EN[rand]);
    let charUa = (ARR_UA[rand]);
    return  [(numb + charEn  ) , (numb + charUa)];
};

const getDepartureTime = (date ,flag)=>{
    let day =(flag)? DAYS_EN : DAYS_UA;
    return `${day[date.getDay()]} ${date.getHours()}:${(date.getMinutes() < 10) ? '0' + date.getMinutes() : date.getMinutes()}`

};

const getCost = coords=> String(((DISTANCES[coords[0]][coords[1]] / 100) * 40.251).toFixed(2));
const randomDate = (start, end) => new Date(start.getTime() + Math.random() * (end.getTime() - start.getTime()));

const getArrivalTime = (date ,coords ,flag)=>{
    let timeHour = (DISTANCES[coords[0]][coords[1]] / (Math.random() * (121 - 80)+80)).toFixed(2);
    let timeMinutes  = (timeHour +'').split(".")[1].substr(0,2);
    timeHour = Math.floor(timeHour);
    if(timeMinutes > 60){
        timeMinutes = timeMinutes % 60;
        timeHour++ ;
    }
    date.setHours(date.getHours() + timeHour);
    date.setMinutes(date.getMinutes() + Number(timeMinutes));
    let day =(flag)? DAYS_EN : DAYS_UA;

    return `${day[date.getDay()]} ${date.getHours()}:${(date.getMinutes() < 10) ? '0' + date.getMinutes() : date.getMinutes()}`
};


class Train {
    constructor( name , departure_point ,arrival_point, day , departure_time , arrival_time , cost) {
        this.name = name;
        this.departure_point = departure_point;
        this.arrival_point = arrival_point;
        this.day = day;
        this.departure_time = departure_time;
        this.arrival_time = arrival_time;
        this.cost = cost;
    }
}


const createTrains = (amunt)=>{
    const coords = generateCoords(amunt);
    const trainsUaPlusEn = {
        trainList_en :[],
        trainList_ua :[]
    };

    coords.map( (coord)=>{
        let names = createNameTrain();
        let time = randomDate(new Date(2018, 5, 1), new Date());
        trainsUaPlusEn.trainList_en.push(new Train(names[0] , CITIES_EN[coord[0]] , CITIES_EN[coord[1]]
            ,DAYS_EN[time.getDay()],getDepartureTime(time , true), getArrivalTime(time, coord ,true) , `${getCost(coord)} (UAH)` ));
        trainsUaPlusEn.trainList_ua.push(new Train(names[1] , CITIES_UA[coord[0]] , CITIES_UA[coord[1]]
            ,DAYS_UA[time.getDay()] , getDepartureTime(time , false) ,getArrivalTime(time, coord ,false) ,`${getCost(coord)} (грн.)` ));
    });

     return trainsUaPlusEn;
};

export default createTrains;


