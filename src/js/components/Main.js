import React, { Component } from 'react';
import  '../../css/style.css';
import TrainsList from './TrainsList';
import templatesTreins from '../containers/templatesTreins';
import langEn  from "../languageConfig/langEn";
import langUa  from "../languageConfig/langUa";
import createTrains from "../containers/trainsCreator";
const AMOUNT_OF_DEPARTURES = 2 *(langEn.cities.length *(langEn.cities.length - 1) / 2);

class Main extends Component{
constructor() {
    super();
    this.state = {
        language: langEn ,
        templatesTrains: null,
        trains: null,
        amount: AMOUNT_OF_DEPARTURES,
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleAmount = this.handleAmount.bind(this);
    this.handleWrite = this.handleWrite.bind(this);
}

handleWrite(e){
    // let printData=[];
    // let obj = {};
    // this.state.trains.map((train)=> {
    //     let a =0;
    //    for(let key in train){ (key ==="beforeDep")? a++ : obj[key] = train[key]; }
    //     printData.push(obj);
    //    return printData;
    // });
    // printData = JSON.stringify(printData);
    // let someData = 'data:application/json;charset=utf-8,' + encodeURIComponent(printData);
    // e.target.href = someData;
    // e.target.target = '_blank';
    // e.target.download = 'trains.json';

};

handleSubmit(e){
    e.preventDefault();
         let temp = templatesTreins(Number(this.state.amount));
         this.setState({templatesTrains: temp});
         let trains = (this.state.templatesTrains === null)? createTrains(temp , this.state.language)
                                 : createTrains(this.state.templatesTrains ,  this.state.language);
         this.setState({trains: trains});

};

handleAmount(e){
    const amount = (e.target.validity.valid) ? e.target.value : this.state.amount;
    if(Number(amount > AMOUNT_OF_DEPARTURES)){
        alert(this.state.language.warning);
        this.setState({amount:AMOUNT_OF_DEPARTURES});
    }else{
      this.setState({amount:amount});
    }
}

handleChange(event){
let search = event.target.value;
    if((search ==="en")){
        this.setState({ language :  langEn });
            this.setState({ trains : createTrains(this.state.templatesTrains , langEn)});
    }else{
        this.setState({ language :  langUa});
            this.setState({ trains : createTrains(this.state.templatesTrains , langUa)});
    }
}

render(){
    return(
        <div>
            <div className="main">
                <h1>{this.state.language.mainTitle} </h1>
                <div className="form_block">
                    <form action="#" onSubmit={this.handleSubmit}>
                        <select name="language"   className="select_language" onChange={this.handleChange} >
                            <option value="en">EN</option>
                            <option value="ua">UA</option>
                        </select>
                        <input type="text" className="select_language" pattern="[0-9]*"  value={this.state.amount}
                                                                             onChange={this.handleAmount}/>
                        <input className="input_btn" type="submit" value={this.state.language.buttonTitles[0]} />
                    </form>
                </div>
            </div>
            <div className="trains_list">
                { this.state.trains && <TrainsList { ...this.state.trains}   titles={this.state.language.titles}/>}
                {/*{ this.state.trains && <a href="#" className = "btn_write" onClick={this.handleWrite}> {this.state.language.buttonTitles[1]} </a>}*/}

            </div>
    </div>
    )
  }
}

export default Main;