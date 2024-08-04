import React from "react";
import { Navigate,Outlet } from "react-router-dom";

const privatecomponent=()=>{
    const auth=localStorage.getItem("User");
    return auth?<Outlet/>:<Navigate to ="/Signup"/>
}
export default privatecomponent;