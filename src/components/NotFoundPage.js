import React from "react";
import { NavLink } from "react-router-dom";

export default function NotFoundPage(){
    return (
        <div>
            404 not found Go to <NavLink href="/">Home page</NavLink>
        </div>

    );
}