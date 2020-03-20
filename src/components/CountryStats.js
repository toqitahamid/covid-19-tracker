import useStats from "../utils/useStats";
//import styled from "styled-components";
import React from "react";
//import GetActiveStats from "./GetActiveStats";
import {Card, Col, Row} from 'antd';

//const style = {background: '#fff', padding: '8px 0'};

function CountryStats({url}) {

    const {stats, loading, error} = useStats(url);


    //console.log(error);
    //if (!stats) return <p>Loading...</p>
    if (loading) return <p>Loading...</p>;
    if (error || !stats) return <p>Error</p>;
    const active = stats.confirmed.value - stats.deaths.value - stats.recovered.value;

    return (
        <div>

            <Row type="flex" gutter={[{xs: 16, sm: 16, md: 24, lg: 32}, 16]}>

                <Col xs={12} sm={12} md={6} lg={6} xl={6}>
                    <Card headStyle={{background: '#f0f2f5'}} title="Confirmed">
                        {stats.confirmed.value}
                    </Card>
                </Col>

                <Col xs={12} sm={12} md={6} lg={6} xl={6}>
                    <Card headStyle={{background: '#f0f2f5'}} title="Deaths">
                        {stats.deaths.value}
                    </Card>
                </Col>


                <Col xs={12} sm={12} md={6} lg={6} xl={6}>
                    <Card headStyle={{background: '#f0f2f5'}} title="Active">

                            {/*<GetActiveStats url={`${url}/confirmed`}/>*/}
                            {active}

                    </Card>
                </Col>

                <Col xs={12} sm={12} md={6} lg={6} xl={6}>
                    <Card headStyle={{background: '#f0f2f5'}} title="Recovered">

                        {stats.recovered.value}
                    </Card>
                </Col>
            </Row>

        </div>
    );
}

export default CountryStats;