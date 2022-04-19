import React from "react";
import { Link } from "react-router-dom";

export default function Menu() {

    const menuUrls=[
        
        {
            name:"Home",
            href:"/"
        },
        {
            name:"login",
            href:"/login"
        }
    ]

  return (
    <div className="space-x-6">
        {
              menuUrls.map((el,index)=>(
                <Link key={index} to={el.href} >{el.name}</Link>
              ))
        }
      
     
    </div>
  );
}
