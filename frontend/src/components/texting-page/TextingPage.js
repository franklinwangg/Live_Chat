import React from "react";

function TextingPage() {

    const submitText = () => {
        console.log("hello");
    };
    return (
        <div>
            <div id = "text-box-div">
                <input id = "text-box" placeholder="text here"></input>
                <button id = "submit-text-button" onClick={submitText}>Submit</button>
            </div>
            

        </div>
    );
}

export default TextingPage;