
 const nameTrain = ()=>{
     let numb = String(Math.floor(Math.random() * (1000 - 150)+100));
     let rand = Math.floor(Math.random() * (20 - 1)+1);

     return  {[numb]:rand};
 };

 export default nameTrain;