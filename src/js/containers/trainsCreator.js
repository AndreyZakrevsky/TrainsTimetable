
const getDateString = (date , lang)=>{
     let day = date.getDay();
     let curDate = date.getDate();
     let month = date.getMonth();
     let year = date.getFullYear();
     let hours = date.getHours();
     let minues = (date.getMinutes() < 10) ? '0' + date.getMinutes() : date.getMinutes();
   return `${('0' + curDate).slice(-2)}.${('0' + (month +1)).slice(-2)}.${year} ${lang.days[day ]}(${hours}:${minues})`;
};

const createTrains = (temp , lang)=>{
    let trains = [];
        temp.map( (item)=>{
             let obj = {};
             let a = Object.keys(item.name)[0];
                 obj.name = `${a}${lang.letters[item.name[a]]}`;
                 obj.departure_point = lang.cities[item.departure_point];
                 obj.arrival_point = lang.cities[item.arrival_point];
                 obj.departureDate = getDateString(item.departureDate , lang);
                 obj.arrivalDate = getDateString(item.arrivalDate() , lang);
                 obj.day = lang.days[item.departureDate.getDay() ] ;
                 obj.cost = `${item.cost()}(${lang.currency})`;
                 obj.beforeDep = item.departureDate;
                 trains.push(obj);
             return trains;
       });
    return trains;
};

export default createTrains;