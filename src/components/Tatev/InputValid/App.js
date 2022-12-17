import React, {useState} from 'react'

function App() {
    const [val,setVal] = useState({
		value: "",
		errorMessage: "Invalid parameter",
		isValid: true,
		validatde: {
			number: false, //
			upperCase: true, // +
			required: true, // +
            noSpace: true, //
		}
	})
    
    const validate = (value,option) => {
        let result = true;
            if(option.required){
                result = result && value.trim() !== ""
            }

            if(option.upperCase) {
                result = result && value.match(/[A-Z]/g)
            }


            // if(option.number) {
            //     result = result && !value.match(/\d/g)
            //     console.log(!value.match(/\d/g),'4444');
            // }

            // if(option.noSpace){
            //     result = result && value.match(/^ *$/) === null;
            // }

        return result
    }

    const handeleChange = (e) => {
        const isValid = validate(e.target.value, val.validatde)
        if(isValid){
            setVal({...val, value: e.target.value, isValid: true})
        }else{
            setVal({...val, value: e.target.value, isValid: false})

        }
    }
  return (
    <div>
        <form>
            <input type='text' onChange={handeleChange} value={val.value}/>
            {!val.isValid && <p id='error'>{val.errorMessage}</p>}
        </form>
    </div>
  )
}

export default App