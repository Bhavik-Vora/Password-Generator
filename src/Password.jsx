import { useState,useEffect } from "react";
import "./Password.css";
import {
  numbers,
  upperCaseLetters,
  lowerCaseLetters,
  specialCharacters,
} from "./Character";
export default function Password() {
  const [password, setPassword] = useState("");
  const [passwordLength, setPasswordLength] = useState(20);
  const [IncludeUppercase,setIncludeUppercase] = useState(false);
  const [IncludeLowercase, setIncludeLowercase] = useState(false);
  const [IncludeSymbols, setIncludeSymbols] = useState(false);
  const [IncludeNumbers, setIncludeNumbers] = useState(false);

  let handleGeneratePassword = (event) => {
    event.preventDefault();
    let characterList = "";

    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

    if (setIncludeLowercase) {
      str += "abcdefghijklmnopqrstuvwxyz";
    }
    if (setIncludeNumbers) {
      str += "0123456789";
    }
    if (setIncludeSymbols) {
      str += "*|*^+X8/()-?_#$%§{[]};:>";
    }

    for (let i=1; i<=passwordLength; i++) {
      let char = Math.floor(Math.random() * str.length) + 1;

      characterList += str.charAt(char);
      console.log(characterList)

    }
    setPassword(characterList);
    // console.log(characterList);
  };

  return (
    <div className="container">
     <input type="text" value={password} style={{width:"70vw"}}/>
     <button>Submit</button>
<br />

<label htmlFor="range">Password Length {passwordLength}</label>
     <input type="range" name="range" id="range" min={4} max={20} value={passwordLength} onChange={(event)=>setPasswordLength(event.target.value)}  />


     <label htmlFor="includeuppercase">Include Uppercase</label>
     <input type="checkbox" name="includeuppercase" id="includeuppercase" onChange={()=>{
     setIncludeUppercase((prev)=>!prev)}}/>

     
     <label htmlFor="includelowercase">Include Lowercase</label>
     <input type="checkbox" name="includelowercase" id="includelowercase" onChange={()=>{
     setIncludeLowercase((prev)=>!prev)}}/>


     <label htmlFor="includesymbols">Include Symbols</label>
     <input type="checkbox" name="includesymbols" id="includesymbols" onChange={()=>{
     setIncludeSymbols((prev)=>!prev)}} />


     <label htmlFor="includenumbers">Include Numbers</label>
     <input type="checkbox" name="includenumbers" id="includenumbers" onChange={()=>{
     setIncludeNumbers((prev)=>!prev)}}/>


    <button onClick={handleGeneratePassword}>Generate Password</button>
    </div>
  );
}
