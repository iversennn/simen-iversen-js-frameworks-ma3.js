import React from "react";

function ErrorMessage({ children }) {
    return (
        <div className="error text-danger ml-2 mt-1" >{ children }</div>
    );
}

export default ErrorMessage;