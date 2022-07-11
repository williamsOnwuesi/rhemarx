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
                setSqlMessage("User Details Successfully fetched! Scroll Down.");
                console.log(response);
                setResult(response.data[0]);
                props.action(response.data[0]);
            }
        });
    }

    return (
        <center>
            <section style = {{width : "25%", margin : "8% 0%", marginBottom : "3.7%", display : "grid", gridTemplateColumns : "1fr", background : "black", padding : "3%", borderRadius : "10px"}}>

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

            <h1  style = {{color : "white"}}>{sqlMessage}</h1>

            <section className = "profileMotherSection" style={{background : "white"}}>
            <center>
                <div className = "profileMother">

                    <h1>User Profile</h1>

                    <div className = "profileGrid">

                        <div className = "detailGrid">
                            <label>Access ID</label>
                            <h4>{result.access_id}</h4>
                        </div>

                        <div className = "detailGrid">
                            <label>Access Key</label>
                            <h4>{result.access_key}</h4>
                        </div>

                        <div className = "detailGrid">
                            <label>Name</label>
                            <h4>{result.name}</h4>
                        </div>

                        <div className = "detailGrid">
                            <label>Sex</label>
                            <h4>{result.sex}</h4>
                        </div>
                        
                        <div className = "detailGrid">
                            <label>Age</label>
                            <h4>{result.age}</h4>
                        </div>

                        <div className = "detailGrid">
                            <label>Address</label>
                            <h4>{result.address}</h4>
                        </div>
                        
                        <div className = "detailGrid">
                            <label>Facial Marks</label>                            
                            <h4>{result.facial_marks}</h4>
                        </div>
                    
                        <div className = "detailGrid">
                            <label>Nationality</label>
                            <h4>{result.nationality}</h4>
                        </div>

                        <div className = "detailGrid">
                            <label>Skin Color</label>
                            <h4>{result.skin_color}</h4>
                        </div>

                        <div className = "detailGrid">
                            <label>Height</label>
                            <h4>{result.height}</h4>
                        </div>
                    </div>

                </div>
            </center>
        </section>

        </center>
    );
}

export default ViewProfileForm;