import React, { useState } from "react";
import { createPerson } from "../services/PersonService";
import {useNavigate} from 'react-router-dom';


function Form(){
    const [name,setName]=useState("")
    const [email,setEmail]=useState("")
    const [feedback,setFeedback]=useState("")

    

    function handleName(e){
        setName(e.target.value);
    }

    function handleEmail(e){
        setEmail(e.target.value);
    }

    function handleFeedback(e){
        setFeedback(e.target.value);
    }

    function savePerson(e){
        e.preventDefault();

        const person={name, email, feedback}
        console.log(person)

        createPerson(person).then((response)=>{
            console.log(response.data);

        })
    }

    return(
        <>
        <h1>Feedback Form</h1>
        <label>Name: </label>
        <input type="text" id="name" placeholder="Enter your name" value={name} onChange={handleName}></input><br></br><br></br>
        <label>Email: </label>
        <input type="text" id="email" placeholder="Enter your email" value={email} onChange={handleEmail}></input><br></br><br></br>
        <label>Feedback: </label>
        <input type="textarea" id="feedback" placeholder="Give feedback" value={feedback} onChange={handleFeedback}></input><br></br><br></br>
        <button type="submit" onClick={savePerson}>Submit</button>
        
        </>
    )
}
export default Form;