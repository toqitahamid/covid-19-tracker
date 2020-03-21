import React, {useEffect, useRef} from 'react';
import {Donut} from '@antv/g2plot';
import formatDate from "../utils/formatDate";

function BarChart({confirmed, death, recovered, lastUpdate}) {

    const active = confirmed - death - recovered;
    let current_datetime = new Date(lastUpdate);

    const formattedDate = formatDate(current_datetime);



    const data = [
        {
            type: 'Active',
            value: active,
        },
        {
            type: 'Death',
            value: death,
        },
        {
            type: 'Recovered',
            value: recovered,
        },

    ];

    const container = useRef(null);

    useEffect(() => {
        if (!container.current) {
            return;
        }
        const ringPlot = new Donut(container.current, {
            forceFit: true,
            radius: 0.8,
            data,
            angleField: 'value',
            colorField: 'type',
            responsive: true,
            title: {
                visible: true,
                position: 'left',
                text: 'Global State',
                style: {
                    fontSize: 18,
                    fill: 'black',
                }
            },

            description: {
                visible: true,
                position: 'left',
                text: `Last Updated: ${formattedDate} `,
                style: {
                    fontSize: 12,
                    fill: 'black',
                }
            },

            legend: {
                visible: true,
                position: 'bottom',
                flipPage: true
            },
            tooltip: {
                visible: true,
                offset: 20,
            },

            label: {
                visible: true,
                type: 'outer-center',
            },
            statistic: {
                visible: true,
                totalLabel: 'Confirmed',
                triggerOn: 'mouseenter',
                triggerOff: 'mouseleave'
            }

        });

        ringPlot.render();
    }, []);

    return (
        <div>
            <div ref={container}/>
        </div>
    );
}

export default BarChart;