import React, {useEffect, useRef} from 'react';
import {Gauge} from '@antv/g2plot';

function RecoveryRate({confirmed, death, recovered}) {

    //const active = confirmed - death - recovered;

    const recovery = (recovered / confirmed) * 100;


    const container = useRef(null);

    useEffect(() => {
        if (!container.current) {
            return;
        }
        const gaugePlot = new Gauge(container.current, {

            value: recovery,
            min: 0,
            max: 100,
            range: [0, 10, 20, 30, 40, 50, 60, 70, 80, 90, 100],
            color: ['#39B8FF', '#52619B', '#43E089', '#C0EDF3'],

            height: 300,

            title: {
                visible: true,
                position: 'left',
                text: 'Recovery Rate',
                style: {
                    fontSize: 18,
                    fill: 'black',
                }
            }

        });
        gaugePlot.render();

    }, []);

    return (
        <div>
            <div ref={container}/>
        </div>
    );
}

export default RecoveryRate;