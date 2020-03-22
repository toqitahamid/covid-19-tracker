import React, {useEffect, useRef} from 'react';
import {Line} from '@antv/g2plot';

function LineChart({data}) {
    //const data = oata;
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


    const container = useRef(null);

    useEffect(() => {
        if (!container.current) {
            return;
        }

        const linePlot = new Line(container.current, {
            title: {
                visible: true,
                text: 'Global State of CVOID-19',
            },
            description: {
                visible: false,
                text: '将数据按照某一字段进行分组，用于比对不同类型数据的趋势。',
            },
            //padding: [20, 100, 30, 80],
            padding: 'auto',
            forceFit: true,
            data,
            xField: 'Date',
            yField: 'value',
            xAxis: {
                type: 'dateTime',
                autoRotateLabel: false,
                label: {
                    visible: true,
                    autoHide: true,
                    autoRotate: false,
                },

            },

            seriesField: 'type',
            responsive: true,

            legend: {
                visible: true,
                position:'top',
            },
            label: {
                visible: false,
                type: 'line',
            },

            animation: {
                type: 'clipingWithData',
            },
            smooth: true,

            color: ['#389e0d', '#D62A0D'],

        });

        linePlot.render();

    }, []);


    return (
        <div>
            <div ref={container}/>
        </div>
    );


}


export default LineChart;