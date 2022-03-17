import React from "react";
import memesData from "../memesData";

export default function Meme() {

    // const [memeImage, setMemeImage] = React.useState("")
    const [meme, setMeme] = React.useState({
        topText: "",
        bottomText: "",
        randomImage: "http://i.imgflip.com/1bij.jpg"
    })

    const [allMemeImages, setMemeImages] = React.useState(memesData)
    

    function getMemeImage() {
        const memesArr = allMemeImages.data.memes
        const randomN = Math.floor(Math.random() * memesArr.length)
        const url = memesArr[randomN].url
        setMeme(prevMeme => ({
            ...prevMeme,
            randomImage: url
        }))
        console.log(meme);
    }

    function handleChange(e) {
        const {name, value} = e.target
        setMeme(prevMeme => ({
            ...prevMeme,
            [name]: value
        }))
    }
    console.log(meme);


    return (
        <main>
            <div className="form">
                <input 
                    type="text"
                    placeholder="Top text"
                    className="form-input"
                    name="topText"
                    value={meme.topText}
                    onChange={handleChange}
                />

                <input 
                    type="text"
                    placeholder="Bottom text"
                    className="form-input"
                    name="bottomText"
                    value={meme.bottomText}
                    onChange={handleChange}
                />

                <button 
                    className="form-button"
                    onClick={getMemeImage}
                    >
                    Get a new meme image
                </button>
            </div>
            <div className="meme">
                <img src={meme.randomImage} alt="" srcset="" className="meme-image" />
                <h2 className="meme-text top">{meme.topText}</h2>
                <h2 className="meme-text bottom">{meme.bottomText}</h2>
            </div>
        </main>
    )
}