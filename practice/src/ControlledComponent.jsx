import { useState } from "react";

function ControlledComponent() {
  const [text,setText]=useState('');
  const [hobbies,setHobbies] = useState([]);
  const [gender,setGender] = useState('');
  const [city,setCity] = useState('');
  const handleCheckbox=(e)=>{
    hobbies.includes(e.target.name)?setHobbies(hobbies.filter((val)=>val!=e.target.name)):setHobbies([...hobbies,e.target.name])
    console.log(e.target.name,hobbies)
  }

  return (
    <>
    <input type="text" name='text' value={text} onChange={(e)=>setText(e.target.value)} placeholder="enter the text...."/>
    <h1>{text}</h1>
    <input type="checkbox" name="book" id="" onChange={(e)=>handleCheckbox(e)}/>book
    <input type="checkbox" name="play" id="" onChange={(e)=>handleCheckbox(e)}/>play
    <input type="checkbox" name="code" id="" onChange={(e)=>handleCheckbox(e)}/>code
    <h1>your Hobbies : {hobbies.join("  ")}</h1>
    <input type="radio" name="gender"  value='male' id="" onClick={e=>setGender(e.target.value)} />male
    <input type="radio" name="gender" value='female' id="" onClick={e=>setGender(e.target.value)} />female
    <h1>Your gender :{gender}</h1>
    <h1>Your City :{city}</h1>
    <select name="city" id="" onChange={(e)=>setCity(e.target.value)} >
      <option value="delhi" >delhi</option>
      <option value="mumbai">mumbai</option>
      <option value="bangalore">bangalore</option>
    </select>
    <button onClick={()=>setText("")}>clear</button>
    </>
  );
}

export default ControlledComponent;
