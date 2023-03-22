import { userValidation } from './Validation';
function App() {

  const createUser = async (event)=>{
    event.preventDefault()
    let formData = {
      name : event.target[0].value,
      email: event.target[1].value,
      password: event.target[2].value
    }
    console.log(formData)
    const isValid = await userValidation.isValid(formData)
    console.log(isValid)
  }

  return (
    <div className="container">
      <form className="form" onSubmit={createUser}>
      <input type="text" placeholder="Enter your First name"/>
      <input type="text" placeholder="Enter your Last name"/>
      <input type="text" placeholder="Enter your Roll No"/>
      <select name="Department" id="Department">
      <option value="ENTER YOUR DEPARTMENT">Enter Your Department</option>
    <option value="AIDS">AIDS</option>
    <option value="CSBS">CSBS</option>
    <option value="ECE">ECE</option>
    <option value="CSE">CSE</option>
    <option value="IT">IT</option>
    <option value="MECH">MECH</option>
    <option value="AIML">AIML</option>
    <option value="BM">BM</option>
    <option value="BT">BT</option>
    <option value="FT">FT</option>
    <option value="TT">TT</option>
    <option value="AERO">AERO</option>
    <option value="CT">CT</option>
  </select>
      <input type="text" placeholder="Mail ID eg: prabakarm913@gmail.com"/>
      <select name="CURRENT SEMESTER" id="CURRENT SEMESTER">
      <option value="ENTER YOUR CURRENT SEMESTER">Enter Your Current Semester</option>
    <option value="I">I</option>
    <option value="II">II</option>
    <option value="III">III</option>
    <option value="IV">IV</option>
    <option value="V">V</option>
    <option value="VI">VI</option>
    <option value="VII">VII</option>
    <option value="VIII">VIII</option>
  </select>
      <input type="password" placeholder="Enter your password"/>
      <input type="date" id="birthday" name="birthday">   
      </input>
      <input type="age" placeholder="Your age is"/>
      <input type="text" placeholder="Enter courses learned"/>
      <input type="text" placeholder="Enter languages known"/>
      <input className="submit" type="submit"/>

      
      </form>
    </div>
  );
}

export default App;