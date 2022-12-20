import React  from 'react'
import { useFormik } from 'formik'

function Form() {
 const formik = useFormik({
   initialValues: {
      name:'',
      password:'',
      policy:false
   }
  })
  
   return    <form className='myForm'>
   
      <div>
         <label htmlFor='name'>Username</label>
         <input type='text' id='name' name='name' />
      </div>
      <div>
         <label htmlFor='password'>Password</label>
         <input type='password' id='password' name='password' />
      </div>
      <div>
         <input type='checkbox' id='policy' name='policy' />
         <label className='label-box' htmlFor='policy'>Lorem</label>
      </div>
      <input type='submit' value='Submit' />
    
 </form>
 
 


}



 

export default Form


