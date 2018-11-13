
const randNambers = ()=>{
    let coord;
    do{
        coord = [Math.floor(Math.random() * (5 - 0)),Math.floor(Math.random() * (5 - 0))];
    }while((coord[0] === coord[1]));
    return coord.join('');
};

const find = (array, value)=>{
    for (let i = 0; i < array.length; i++) {
        if (array[i] === value) return i;
    }
    return -1;
};

const generateCoords = (amount)=>{
    let coordinates= [];
    let coo = [];
    let tamp;
    for(let i=1; i<amount+1; i++){
        if(coordinates.length > 0){
            let flag = false , coord;
            do{
                coord = randNambers();
                if(find(coordinates , coord) < 0 ){
                    coordinates.push(coord);
                    flag = false;
                }else{
                    flag = true;
                }
            }while(flag)
        }else{
            coordinates.push(randNambers());
        }
    }

    for (var i = 0; i < coordinates.length; i++) {
        tamp = coordinates[i].split('');
        coo.push([Number(tamp[0]) , Number(tamp[1])]);
    }
    return coo;
}

export default generateCoords;