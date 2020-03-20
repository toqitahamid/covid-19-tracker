import React from "react";
import useStats from "../utils/useStats";

import {Card, Col, Row} from 'antd';
import BarChart from "./BarChart";
import RecoveryRate from "./RecoveryRate";

const style = {background: '#fff', padding: '8px'};


function Stats({url}) {

    const {stats, loading, error} = useStats(url);
    //console.log(error);
    //if (!stats) return <p>Loading...</p>
    if (loading) return <p>Loading...</p>;
    if (error || !stats) return <p>Error</p>;

    return (


        <div>
            <Card>
                <Row gutter={{xs: 8, sm: 16, md: 24, lg: 32}}>
                    <Col span={12}>

                        <BarChart
                            confirmed={stats.confirmed.value}
                            death={stats.deaths.value}
                            recovered={stats.recovered.value}
                        />


                    </Col>

                    <Col span={12}>
                        <RecoveryRate
                            confirmed={stats.confirmed.value}
                            death={stats.deaths.value}
                            recovered={stats.recovered.value}
                        />
                    </Col>
                </Row>

                <Row gutter={{xs: 8, sm: 16, md: 24, lg: 32}}>

                    <Col span={8}>
                        <Card headStyle={{background: '#f0f2f5'}} title="Confirmed:">
                            <span>{stats.confirmed.value}</span>
                        </Card>
                    </Col>

                    <Col span={8}>
                        <Card headStyle={{background: '#f0f2f5'}} title="Deaths:">
                            <span>{stats.deaths.value}</span>
                        </Card>
                    </Col>


                    <Col span={8}>
                        <Card headStyle={{background: '#f0f2f5'}} title="Recovered:">
                            <span>{stats.recovered.value}</span>
                        </Card>
                    </Col>

                </Row>
            </Card>

        </div>
    );
}

export default Stats;