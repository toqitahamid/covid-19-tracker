import React, {useEffect, useRef} from 'react';
import {Line} from '@antv/g2plot';

function LineChart() {


    const data = [
        {year: '1991', value: 3},
        {year: '1992', value: 4},
        {year: '1993', value: 3.5},
        {year: '1994', value: 5},
        {year: '1995', value: 4.9},
        {year: '1996', value: 6},
        {year: '1997', value: 7},
        {year: '1998', value: 9},
        {year: '1999', value: 13},
    ];

    const container = useRef(null);

    useEffect(() => {
        if (!container.current) {
            return;
        }

        const linePlot = new Line(container.current, {
            title: {
                visible: true,
                text: 'Title',
            },
            description: {
                visible: true,
                text: 'Description',
            },
            data,
            xField: 'year',
            yField: 'value',
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