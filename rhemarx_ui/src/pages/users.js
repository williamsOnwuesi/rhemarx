import {Link} from "react-router-dom";

const Users = ()=>{

    const userMenuStyle = {
        listStyle : "none"
    };

    return (
        <>
            <ul className = "userMenu"  style = {userMenuStyle}>


                <li>
                    <Link to = "/createProfile">
                        <button>Create Profile</button> 
                    </Link>
                </li>
                
                <li>
                    <Link to = "/viewProfileForm">
                        <button>View Profile</button> 
                    </Link>
                </li>

                <li>
                    <Link to = "/">
                        <button>Edit Profile</button> 
                    </Link>
                </li>

                <li>
                    <Link to = "/">
                        <button>Delete Profile</button> 
                    </Link>
                </li>


            </ul>
        </>
    );
}

export default Users;