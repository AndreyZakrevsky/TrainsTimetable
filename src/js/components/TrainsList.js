import React  from 'react';
import Train from './Train';


const  TrainsList = ( trainList  )=>{
     return(
        <div>
            <table className="table_head">
                <thead>
                    <tr>
                        <th>{trainList.titles[0]}</th>
                        <th>{trainList.titles[1]}</th>
                        <th>{trainList.titles[2]}</th>
                        <th>{trainList.titles[3]}</th>
                        <th>{trainList.titles[4]}</th>
                        <th>{trainList.titles[5]}</th>
                        <th>{trainList.titles[6]}</th>
                        <th>{trainList.titles[7]}</th>
                    </tr>
                </thead>
                <tbody>
                    {Object.keys(trainList).map( (train , i) => {
                        if(train === "titles" ){
                            return null;
                        }else{
                            return(
                                <Train {...trainList[train]} key={ i } />
                            )
                        }
                    })}
                </tbody>
            </table>
        </div>
    );
};

export default TrainsList;