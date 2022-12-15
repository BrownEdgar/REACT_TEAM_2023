import React ,{ useState} from 'react'
import './App.scss'

function Form() {
 const [val, setval] = useState({
   value:'',
   errorMesege:'dasdasdas',
   isValid:true,
   validate: {
      minLenght:8,
      numberTwoLenght:true,
      startWithUpper:true
   }
 })

 const validateFunc = (value,options) => {
  let result = true;


  if(options.minLenght){
   result = value.length > options.minLenght
   
  }

//   if(options.numberTwoLenght){

//       result = !value.match(/\d/g) 
   
//   }
if(options.startWithUpper) {
   result = !!value.match(/[A-Z]/g);
}
console.log(result)












   return result 
 }


 
 function handleChange(e){
   
     let isValid = validateFunc(e.target.value,val.validate);

     if(isValid){
      setval({...val, value:e.target.value, isValid:true})
     }else{
      setval({...val, value:e.target.value, isValid:false})
     }
   
 }
 
  return (
    <div className='Container'>
     <form className='Container-Form'>
         <label  htmlFor='password'>Password</label>
         <input type='password' id='password' value={val.value} onChange={handleChange}/>  
          {!val.isValid && <p> {val.errorMesege}</p>}
     </form>        
    </div>
   )
 
 


}



 

export default Form


