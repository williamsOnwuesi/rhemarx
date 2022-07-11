import {useState} from "react";
//import {Link} from "react-router-dom";
import axios from "axios";

const ViewProfileForm = (props)=>{

    const [accessId, setAccessId] = useState("");
    const [accessKey, setAccessKey] = useState("");

    const [result, setResult] = useState("");
    const [sqlMessage, setSqlMessage] = useState("");

    const view = ()=>{
        axios.post("http://localhost:3001/viewProfile", {
            userAccessId : accessId,
            userAccessKey : accessKey
        }).then((response)=>{
            if(response.data.message){
                console.log(response.data.message);
                setSqlMessage(response.data.message);
            }else{
                console.log(response);
                setResult(response.data[0]);
                props.action(response.data[0]);
            }
        });
    }

    return (
        <center>
            <section style = {{width : "25%", margin : "8% 0%", display : "grid", gridTemplateColumns : "1fr", background : "black", padding : "3%", borderRadius : "10px"}}>

                <div className = "profileInput">
                    <input onChange = {(e)=>{setAccessId(e.target.value)}} placeholder = "Enter Unique Access Id"/>
                </div>

                <div className = "profileInput">
                    <input onChange = {(e)=>{setAccessKey(e.target.value)}} placeholder = "Enter Secure Password"/>    
                </div>    
                
                <div className = "profileInput">
                    <button onClick = {()=>{view()}}>View Profile</button>
                </div>
                   
            </section>

            <h1>{sqlMessage}</h1>
            <h1>{result.name}</h1>
        </center>
    );
}

export default ViewProfileForm;