const Profile = (props)=>{

    return (
        <section className = "profileMotherSection">
            <center>
                <div className = "profileMother">

                    <h1>User Profile</h1>

                    <div className = "profileGrid">

                        <div>
                            <h4>{props.data.accessID}</h4>
                        </div>
                        <div>
                            <h4>{props.data.accessKey}</h4>
                        </div>
                        <div>
                            <h4>{props.data.userName}</h4>
                        </div>
                        <div>
                            <h4>{props.data.sex}</h4>
                        </div>
                        <div>
                            <h4>{props.data.age}</h4>
                        </div>
                        <div>
                            <h4>{props.data.address}</h4>
                        </div>
                        
                        <div>
                            <h4>{props.data.facialMarks}</h4>
                        </div>
                    
                        <div>
                            <h4>{props.data.nationality}</h4>
                        </div>
                        <div>
                            <h4>{props.data.skinColor}</h4>
                        </div>
                        <div>
                            <h4>{props.data.height}</h4>
                        </div>
                    </div>

                </div>
            </center>
        </section>
    );
}

export default Profile;