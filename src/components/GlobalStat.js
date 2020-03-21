import React from "react";
import {Col, Divider} from "antd";
import Row from "antd/es/descriptions/Row";

function GlobalStat(){
    //const active = stats.confirmed.value - stats.deaths.value - stats.recovered.value;
    //const confirmed = stats.confirmed.value;
    //const recovered = stats.recovered.value;
    //const death = stats.deaths.value;

    return(
        <div>
            <Row type='flex' gutter={[{xs: 8, sm: 16, md: 24, lg: 32}, {xs: 8, sm: 16, md: 24, lg: 32}]}>
                <Col xs={12} sm={12} md={6} lg={6} xl={6}>A</Col>
                <Divider type="vertical" />
                <Col xs={12} sm={12} md={6} lg={6} xl={6}>B</Col>
                <Divider type="vertical" />
                <Col xs={12} sm={12} md={6} lg={6} xl={6}>C</Col>
                <Divider type="vertical" />
                <Col xs={12} sm={12} md={6} lg={6} xl={6}>D</Col>
            </Row>

        </div>

    );


}


export default GlobalStat;