import axios from "axios";
import { useEffect, useState, useCallback } from "react";

const API_KEY = "zDZ1d10B7AkXHzHfGYBDVlkEpUju98ru";
const url = `https://api.giphy.com/v1/gifs/random?api_key=${API_KEY}`;

const useGif = (tag) => {
    const [gif, setGif] = useState("");
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    const fetchData = useCallback(async (retryCount = 0) => {
        setLoading(true);
        try {
            const { data } = await axios.get(tag ? `${url}&tag=${tag}` : url);
            const imageSource = data.data.images.downsized_large.url;
            setGif(imageSource);
            setError(null);
        } catch (err) {
            if (err.response && err.response.status === 429 && retryCount < 5) {
                // Wait for a bit and retry
                setTimeout(() => fetchData(retryCount + 1), 2000 * (retryCount + 1));
            } else {
                console.error("Error fetching the GIF:", err);
                setError("Failed to fetch GIF. Please try again later.");
            }
        }
        setLoading(false);
    }, [tag]);

    useEffect(() => {
        fetchData();
    }, [fetchData]);

    return { gif, loading, error, fetchData };
};

export default useGif;
