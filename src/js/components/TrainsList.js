import React  from 'react';
import Train from './Train';


const  TrainsList = ( trainList  )=>{
    const flag = trainList.flag;

     return(
        <div>
            <table className="table_head">
                <thead>
                    <tr>
                        <th>{(flag === true )? "Time left before departure" : "Залишилось часу до відправлення "}</th>
                        <th>{(flag === true )? "Train number" : "Номер поїзда"}</th>
                        <th>{(flag === true )? "Train departure point" : "Пункт відправлення"}</th>
                        <th>{(flag === true )? "Point of train arrival" : "Пункт прибуття"}</th>
                        <th>{(flag === true )? "Day of the week" : "День тижня"}</th>
                        <th>{(flag === true )? "Departure time" : "Час відправлення"}</th>
                        <th>{(flag === true )? "Arrival time" : "Час прибуття"}</th>
                        <th>{(flag === true )? "Cost" : "Вартість"}</th>
                    </tr>
                </thead>
                <tbody>
                    {Object.keys(trainList).map( (train , i) => {
                        if(train === "arriveTime" || train === "flag"){
                            return null;
                        }else{
                            return(
                                <Train {...trainList[train]} flag={flag} key={ i } />
                            )
                        }
                    })}
                </tbody>
            </table>
        </div>
    );
};

export default TrainsList;