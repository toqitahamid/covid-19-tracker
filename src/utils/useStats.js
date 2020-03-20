import {useEffect, useState} from "react";


function useStats(url) {
    const [stats, setStats] = useState();

    const [loading, setLoading] = useState(false);

    const [error, setError] = useState(false);

    useEffect(() => {


        async function fetchData() {

            setError(false);


            const data = await fetch(url).then(res => {
                if (res.status === 200) {
                    setLoading(false);
                    return res.json();
                } else {
                    setError(true);
                    setLoading(false);
                }

            });
            setStats(data);


        }

        setLoading(false);
        fetchData();
    }, [url]);
    return {
        stats,
        loading,
        error
    };
}

export default useStats;