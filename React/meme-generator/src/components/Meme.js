import React from "react";
import memesData from "../memesData";

export default function Meme() {
    function getMemeImage() {
        const memesArr = memesData.data.memes
        const randomN = Math.floor(Math.random() * memesArr.length)
        const url = memesArr[randomN].url
        console.log(url);
    }

    return (
        <main>
            <form className="form">
                <input 
                    type="text"
                    placeholder="Top text"
                    className="form-input"
                />

                <input 
                    type="text"
                    placeholder="Bottom text"
                    className="form-input"
                />

                <button 
                    className="form-button"
                    onClick={getMemeImage}
                    >
                    Get a new meme image
                </button>
            </form>
        </main>
    )
}