import React  from 'react';

const  Train = ({name, departure_point , arrival_point , day ,departure_time , arrival_time ,cost})=>{

    return(
        <tr>
            <td>{name}</td>
            <td>{departure_point}</td>
            <td>{arrival_point}</td>
            <td>{day}  </td>
            <td>{departure_time}</td>
            <td>{arrival_time}</td>
            <td>{cost}</td>
        </tr>
    )
};
export default Train;
