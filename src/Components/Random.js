import React from "react";
import Spinner from "./Spinner";
import useGif from "../Hooks/useGif";


const Random = ({tag}) => {

    const{gif, loading, fetchData} = useGif(tag);

    function clickHandler() {
        fetchData();

    }
    return(
        <div className="w-1/2  bg-green-500 mx-auto rounded-lg border border-black flex flex-col items-center gap-y-5 mt-[15px]">
            <h1 className=" ,t-[15px] text-2xl uppercase underline font-bold"> A Random Gif</h1>
            {
                loading ? (<Spinner />) : (<img src={gif} alt="Random Gif" width="450" className="w-10/12 rounded-lg" />)
            }
            <button 
                onClick={clickHandler}
                className="w-10/12 bg-yellow-500 text-lg py-2 rounded-lg mb-[20px] hover:bg-yellow-600 hover:text-white"
            >
                Generate
            </button>


        </div>

    );
}

export default Random;