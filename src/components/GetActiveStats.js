import useStats from "../utils/useStats";
import React from "react";

function GetActiveStats({url}) {

    const {stats, loading, error} = useStats(url);
    //console.log(error);
    //if (!stats) return <p>Loading...</p>
    if (loading) return <p>Loading...</p>;
    if (error || !stats) return <p>Error</p>;

    try {
        var activePatient = stats[0].active;
        return (
            activePatient
        );
    } catch (e) {
        return ("0");
    }

}

export default GetActiveStats;