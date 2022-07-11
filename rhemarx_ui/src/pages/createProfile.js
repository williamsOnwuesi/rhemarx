import { useState } from "react";
import axios from "axios";
const RegistrationForm = ()=>{

    const [accessId, setAccessId] = useState("");
    const [accessKey, setAccessKey] = useState("");
    const [userName, setUserName] = useState("");
    const [sex, setSex] = useState("");
    const [age, setAge] = useState("");
    const [address, setAddress] = useState("");
    const [facialMarks, setFacialMarks] = useState("");
    const [nationality, setNationality] = useState("");
    const [skinColor, setSkinColor] = useState("");
    const [height, setHeight] = useState("");

    const [registrationStatus, setRegistrationStatus] = useState("");

    const register = ()=>{
        axios.post("http://localhost:3001/createProfile", {

            userId : accessId,
            userKey : accessKey,
            name : userName,
            sex : sex,
            age : age,
            address : address,
            facialMarks : facialMarks,
            nationality : nationality,
            skinColor : skinColor,
            height : height

        }).then((response)=>{
            console.log(response);
            setRegistrationStatus(response.data)
            console.log("data successfully inserted");
        });
    }

    return (
        <>
            <section className = "profileData" style = {{display: "grid", gridTemplateColumns : "1fr 1fr", gridGap : "5%", margin : "5% 0%"}}>

                <div>
                    <input placeholder = "Unique Access ID" onChange={(e)=>{
                        setAccessId(e.target.value);
                    }}/>
                </div>

                <div>
                    <input placeholder = "Secure Access Key" onChange={(e)=>{
                        setAccessKey(e.target.value);
                    }}/>
                </div>

                <div>
                    <input placeholder = "Username" onChange={(e)=>{
                        setUserName(e.target.value);
                    }}/>
                </div>

                <div>
                    <input placeholder = "Sex"  onChange={(e)=>{
                        setSex(e.target.value);
                    }}/>
                </div>

                <div>
                    <input placeholder = "Age" onChange={(e)=>{
                        setAge(e.target.value);
                    }}/>
                </div>

                <div>
                    <input placeholder = "Input Valid Address" onChange={(e)=>{
                        setAddress(e.target.value);
                    }}/>
                </div>

                <div>
                    <input placeholder = "Facial Marks?" onChange={(e)=>{
                        setFacialMarks(e.target.value);
                    }}/>
                </div>

                <div>
                    <input placeholder = "Nationality" onChange={(e)=>{
                        setNationality(e.target.value);
                    }}/>
                </div>

                <div>
                    <input placeholder = "Skin Color" onChange={(e)=>{
                        setSkinColor(e.target.value);
                    }}/>
                </div>

                <div>
                    <input placeholder = "Height" onChange={(e)=>{
                        setHeight(e.target.value);
                    }}/>
                </div>

            </section>
            <div>
                <button onClick={()=>{register()}} style = {{padding : "1% 2%", background : "rgb(1, 143, 238)", color : "white", border : "none", outline : "none", borderRadius : "4px"}}>Submit</button>
            </div>
            <center>
                <h1>{registrationStatus.message}</h1>
            </center>
        </>
    );
}

export default RegistrationForm;