import React, { Component } from 'react';
import  '../../css/style.css';
import TrainsList from './TrainsList';
import trainCreator from '../containers/trainCreator';


class Main extends Component{
constructor() {
    super();
    this.state = {
        language: "en",
        trains: "",
        amount:"",
        trainList_en: "",
        trainList_ua: "",

    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleAmount = this.handleAmount.bind(this);
    this.handleWrite = this.handleWrite.bind(this);
}

handleWrite(){
    let printData=[];
    let obj = {};
    this.state.trains.map((train)=> {
        let a =0;
       for(let key in train){ (key ==="beforeDep")? a++ : obj[key] = train[key]; }
        printData.push(obj);
       return printData;
    });
    printData = JSON.stringify(printData);
    console.log(printData);
};

handleSubmit(e){
    e.preventDefault();
    if(this.state.amount <= 0){
        let worn = (this.state.language ==="en")? "Enter the number of routes !!!": "Введіть кількість маршрутів !!!"
        alert(worn);
    }else{
        let obj =trainCreator(Number(this.state.amount));
        this.setState({
            trainList_en: obj.trainList_en,
            trainList_ua: obj.trainList_ua
        });
        this.setState({
            trains:(this.state.language ==="en")? obj.trainList_en : obj.trainList_ua
        });
    }


};

handleAmount(e){
    const amount = (e.target.validity.valid) ? e.target.value : this.state.amount;
    if(Number(amount > 20)){
        alert(this.state.language ==="en" ? "Only numbers from 1 to 20 !!!"
              :"Тільки числа від 1 до 20 !!!");
        this.setState({amount:""});
    }else{
      this.setState({amount:amount});
    }
}

handleChange(event){
let search = event.target.value;
    search ==="en"? this.setState({
                    language: search,
                    trains:this.state.trainList_en })
              :
                this.setState({
                    language: search,
                    trains:this.state.trainList_ua })
}

render(){
    return(
        <div>
            <div className="main">
                <h1>{this.state.language ==="en" ? "Trains timetable" :"Розклад руху потягів"}</h1>
                <div className="form_block">
                    <form action="#" onSubmit={this.handleSubmit}>
                        <select name="language"   className="select_language" onChange={this.handleChange} >
                            <option value="en">EN</option>
                            <option value="ua">UA</option>
                        </select>
                        <input type="text" className="select_language" pattern="[0-9]*"  value={this.state.amount}
                                                                             onChange={this.handleAmount}/>
                        <input className="input_btn" type="submit" value={this.state.language==="en"?
                                                                              "Generate" :"Згенерувати"} />
                    </form>
                </div>
            </div>
            <div className="trains_list">
                    { this.state.trains && <TrainsList { ...this.state.trains}   flag={(this.state.language ==="en")}/>}
                    { this.state.trains && <button className = "btn_write" onClick={this.handleWrite}>{this.state.language ==="en"
                    ? "Write to file" :"Записати у файл"}</button>}
            </div>
        </div>
    )
  }
}

export default Main;