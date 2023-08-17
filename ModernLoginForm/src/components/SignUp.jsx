import React, { useEffect, useState } from "react";
import './Validate'
const SignUp = () => {
  const [data, setData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
    isAccepted: false,
  });
const [errors, setErrors] = useState({})

useEffect(() =>{
  setErrors(validate(data))
  console.log(errors)
}, [data])


  const changeHandler = event => {
    if (event.target.name === "isAccepted") {
      setData({...data, [event.target.name]: event.target.checked})
    } else {
      setData({...data, [event.target.name]: event.target.value})
    }
    
  }
  return (
    <div>
      <form>
        <h2>SignUp</h2>
        <div>
          <label>Name</label>
          <input type="text" name="name" value={data.name} onChange={changeHandler}/>
        </div>
        <div>
          <label>Email</label>
          <input type="text" name="email" value={data.email} onChange={changeHandler}/>
        </div>
        <div>
          <label>Password</label>
          <input type="password" name="password" value={data.password} onChange={changeHandler}/>
        </div>
        <div>
          <label>Confirm Password</label>
          <input type="password" name="confirmPassword" value={data.confirmPassword} onChange={changeHandler}/>
        </div>
        <div>
          <label>I accept terms of privacy policy</label>
          <input type="checkbox" name="isAccepted" value={data.isAccepted} />
        </div>
        <div>
          <a href="#">Login</a>
          <button type="submit">Sign Up</button>
        </div>
      </form>
    </div>
  );
};

export default SignUp;