import React, { Component } from 'react';

class Train extends Component{
    constructor(props){
        super(props);
        this.state = {beforeRes:null};
        this.countdown= this.countdown.bind(this);
    }

    countdown(){
    let t ,total,days,hours,minutes,seconds;

        let timeinterval = setInterval(()=>{
          t = Date.parse(this.props.beforeDep) - Date.parse(new Date());
          total = t ;
          days = Math.floor(t / (1000 * 60 * 60 * 24));
          hours =  Math.floor((t / (1000 * 60 * 60)) % 24);
          minutes =  Math.floor((t / 1000 / 60) % 60);
          seconds =Math.floor((t / 1000) % 60);

         let goodTime =  `(${days }) ${('0' + hours).slice(-2)}:${('0' + minutes).slice(-2)}:${('0' + seconds).slice(-2)}`;
            this.setState({beforeRes:goodTime});
            if (total <= 0) {
                clearInterval(timeinterval);
            }
        }, 1000);

    }
    componentDidMount(){this.countdown();}

    render(){
        const{name, departure_point , arrival_point , day ,departureDate , arrivalDate ,cost } = this.props;
        return(
            <tr>
               <td>{this.state.beforeRes}</td>
               <td>{name}</td>
               <td>{departure_point}</td>
               <td>{arrival_point}</td>
               <td>{day}  </td>
               <td>{departureDate}</td>
               <td>{arrivalDate}</td>
               <td>{cost}</td>
            </tr>
        )
    }
}
export default Train;

