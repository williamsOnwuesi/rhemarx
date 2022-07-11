
const Admin = ()=>{
    return (
        <center>
            <section style = {{background: "rgba(100, 0, 0, 0.7)", width : "60%", margin : "4% 0%", borderRadius : "5px", boxShadow : "5px 5px 7px black"}}>

                <form className = "adminLogin" style = {{display: "flex", flexDirection : "column", justifyContent : "space-around", padding : "4% 0%"}}>

                    <div style = {{display : "grid", gridTemplateColumns : "1fr 1fr"}}>

                        <div style = {{paddingLeft: "10%"}}>
                            <div><p>Access ID</p><input style = {{padding : "3%"}}/></div>
                            <div><p>Access Key</p><input style = {{padding : "3%"}}/></div>
                        </div>

                        <div style = {{margin : "5% 0%", padding : "10%, 0%"}}>
                            <div><button style = {{padding : "3%"}}>Create Profile</button></div>
                            <div><button style = {{padding : "3%"}}>View Profile</button></div>
                            <div><button style = {{padding : "3%"}}>Edit Profile</button></div>
                            <div><button style = {{padding : "3%"}}>Delete Profile</button></div>
                        </div>

                    </div>

                </form>

            </section>
        </center>
    );
}

export default Admin;