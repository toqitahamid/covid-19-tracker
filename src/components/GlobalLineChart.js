import useStats from "../utils/useStats";
//import styled from "styled-components";
import React from "react";
//import GetActiveStats from "./GetActiveStats";
import {Card, Typography} from 'antd';
import Empty from "antd/es/empty";
import LineChart from "./LineChart";


const { Text, Title } = Typography;

//const style = {background: '#fff', padding: '8px 0'};

function GlobalLineChart({url}) {

    const {stats, loading, error} = useStats(url);

    //if (!stats) return <p>Loading...</p>
    if (loading || !stats) return <Card active='true' loading='true'/>;

    if (error ) return <Empty description='No Data'/>;

    //const reportDateString = Object.entries(stats).map(([id]) => ({Date: stats[id].reportDateString, Confirmed: stats[id].totalConfirmed, Recovered: stats[id].totalRecovered}));

    const reportConfirmed = Object.entries(stats).map(([id]) => ({Date: stats[id].reportDateString, type: 'Confirmed', value: stats[id].totalConfirmed}));
    const reportRecovered = Object.entries(stats).map(([id]) => ({Date: stats[id].reportDateString, type: 'Recovered', value: stats[id].totalRecovered}));

    const reportData = [...reportRecovered, ...reportConfirmed];


    //const totalConfirmed = Object.entries(stats).map(([id]) => [stats[id].totalConfirmed]);

    //var person = {date: reportDateString}

    //console.log(reportData);

    // const data = [
    //     {year: '1991', value: 3},
    //     {year: '1992', value: 4},
    //     {year: '1993', value: 3.5},
    //     {year: '1994', value: 5},
    //     {year: '1995', value: 4.9},
    //     {year: '1996', value: 6},
    //     {year: '1997', value: 7},
    //     {year: '1998', value: 9},
    //     {year: '1999', value: 13},
    // ];
    //
    // console.log(data);

    return (
        //<div/>
        <LineChart data={reportData} />

    );
}

export default GlobalLineChart;
