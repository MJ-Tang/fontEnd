import React from "react";
import memesData from "../memesData";

export default function Meme() {

    const [memeImage, setMemeImage] = React.useState("")
    

    function getMemeImage() {
        const memesArr = memesData.data.memes
        const randomN = Math.floor(Math.random() * memesArr.length)
        setMemeImage(memesArr[randomN].url)
        console.log(memeImage);
    }

    return (
        <main>
            <div className="form">
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
            </div>
            <img src={memeImage} alt="" srcset="" className="meme-image" />
        </main>
    )
}