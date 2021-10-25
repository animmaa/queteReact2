import React from "react";

function DisplaySimpson({simpsons}) {
    return (
        simpsons && (
            <div className="DisplaySimpson">
                <img src={simpsons.image} alt="pas d'image" />
                <ul>
                <li>Character: {simpsons.character}</li>
                <li>
                    Quote: {simpsons.quote}
                </li>
          
                </ul>

            </div>
        )
    )
}

export default DisplaySimpson;

