import React from "react";
import useStats from "../../utils/useStats";


function TimeSeriesData({selectedCountry}){
    const url = `https://wuhan-coronavirus-api.laeyoung.endpoint.ainize.ai/jhu-edu/timeseries?iso3=${selectedCountry}&onlyCountries=true`;
    const {stats, loading, error} = useStats(url);



    console.log("1")
    console.log(stats);

    return(
        <div>

        </div>
    );

}


export default TimeSeriesData;