import React from "react";
import useStats from "../../utils/useStats";
import {Card, Empty} from 'antd';
import GlobalLineChartRender from "./GlobalLineChartRender";


//const style = {background: '#fff', padding: '8px 0'};

function GlobalLineChart({url, countryStats}) {


    const {stats, loading, error} = useStats(url);

    //if (!stats) return <p>Loading...</p>
    if (loading || !stats) return <Card active='true' loading='true'/>;

    if (error ) return <Empty description='No Data'/>;

    //const reportDateString = Object.entries(stats).map(([id]) => ({Date: stats[id].reportDateString, Confirmed: stats[id].totalConfirmed, Recovered: stats[id].totalRecovered}));

    const reportConfirmed = Object.entries(stats).map(([id]) => ({Date: stats[id].reportDate, type: 'Confirmed', value: stats[id].totalConfirmed}));
    const reportRecovered = Object.entries(stats).map(([id]) => ({Date: stats[id].reportDate, type: 'Recovered', value: stats[id].totalRecovered}));

    const reportData = [...reportRecovered, ...reportConfirmed];


    //const totalConfirmed = Object.entries(stats).map(([id]) => [stats[id].totalConfirmed]);

    //var person = {date: reportDateString}


    return (
        //<div/>
        <GlobalLineChartRender data={reportData} />

    );


}

export default GlobalLineChart;
