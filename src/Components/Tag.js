import React from "react";
import Spinner from "./Spinner";
import useGif from "../Hooks/useGif";
import { useState } from "react"; 


const Tag = () => {
    const [tag, setTag] = useState("");
    const {gif, loading, fetchData} = useGif(tag);

    function clickHandler() {
        fetchData();

    }

    function changeHandler(e) {
        setTag(e.target.value);
    }
    return(
        <div className="w-1/2  bg-blue-500 mx-auto rounded-lg border border-black flex flex-col items-center gap-y-5 mt-[15px]">
            <h1 className=" ,t-[15px] text-2xl uppercase underline font-bold"> Random {tag} Gif</h1>
            {
                loading ? (<Spinner />) : (<img src={gif} width="450" alt="Random Gif" className="w-10/12 rounded-lg" />)
            }

            <input 
                className="w-10/12 bg-white text-lg py-2 rounded-lg mb-[3px] text-center"
                onChange={changeHandler}
                value={tag}

            />

            <button 
                onClick={clickHandler}
                className="w-10/12 bg-yellow-500 text-lg py-2 rounded-lg mb-[20px] hover:bg-yellow-600 hover:text-white"
            >
                Show
            </button>


        </div>

    );
}

export default Tag;