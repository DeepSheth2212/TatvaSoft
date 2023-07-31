import { useNavigate } from "react-router-dom"; //used for navigation

export const Apple = () =>{
    const navigate = useNavigate(); //hook
    const submitHandler = () =>{
        setTimeout(()=>{
            console.log("Form Submitted!");
            navigate("/"); //this will navigate to homePage we just need to pass url in it
        },3000);
    }
    return (
    <div>
        <div className="page">Apple🍏</div>
        <input type="text" name="userName"/>
        <button onClick={submitHandler}>Submit</button>
    </div>);
} 