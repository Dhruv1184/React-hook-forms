import { useForm } from "react-hook-form"

import './App.css'

function App() {
  const {register,handleSubmit,formState:{errors}} = useForm()



  const onSubmit = (data) => {
    confirm('Registration Succesful')
    console.log(data)}

 
  return (
    <>
    <div className="body">
      <form onSubmit={handleSubmit(onSubmit)} >
        <div>
        <input type="text" placeholder='First name' {...register('FirstName',{required: 'First name is required'})}/>
        <p>{errors.FirstName?.message}</p>
      </div>
      <div>
        <input type="text" placeholder='Last name'  {...register('LastName',{required: 'Last name is required'})}/>
        <p>{errors.LastName?.message}</p>
      </div>
      <div>
        <input type="text" placeholder='Email'  {...register('Email',{required: 'Email is required',pattern:{
          value:/^[a-zA-Z0-9]+@+[a-zA-Z0-9]+.+[A-z]/,
          message:'Enter a valid Email'
        }})}/>
        <p>{errors.Email?.message}</p>
      </div>
      <div>
        <input type="password" placeholder='Password' {...register('Password',{required: 'Password is required',
        minLength:{
          value: 4,
         message: 'Password must be more than 4 digit ',
        },
        maxLength: {
          value: 20,
          message:'Password must be lesser than 20 digit'
        }
        
      })}/>
        <p>{errors.Password?.message}</p>
      </div>
      <button type="submit" className="btn">Register</button>
      </form>
    </div>
   
    

    </>
  )
}

export default App
