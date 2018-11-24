import generateCoords from './generateCoords';
import Train from "./createTrain";
import nameTrain from "./nameTrain";

const createTemplates = (amount)=>{
    const coords = generateCoords(amount);
    const trains = [];
    coords.map( (coord)=>{
        let name = nameTrain();
        let time =  new Date();
            time.setDate(time.getDate()+ (Math.random() * (15 - 0)+ 0));
            time.setHours(time.getHours()+ (Math.random() * (25 - 1)+ 1));
            time.setMinutes(time.getMinutes()+ (Math.random() * (61 - 1)+ 1));
            time.setSeconds(time.getSeconds()+ (Math.random() * (61 - 1)+ 1));
        trains.push(new Train(name , coord[0] , coord[1] , time));
        return trains;
    });
    return trains;
};

export default createTemplates;





