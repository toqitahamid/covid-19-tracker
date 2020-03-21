import React from "react";
import useStats from "../utils/useStats";
import {Card, Col, Row, Typography} from 'antd';
import BarChart from "./BarChart";
import RecoveryRate from "./RecoveryRate";
import Empty from "antd/es/empty";

const { Text } = Typography;
const { Title } = Typography;

const style = {background: '#fff', padding: '8px'};


function Stats({url}) {

    const {stats, loading, error} = useStats(url);
    //console.log(error);
    //if (!stats) return <p>Loading...</p>
    if (loading) return <Card active='true' loading='true'/>;
    if (!stats) return <Card active='true' loading='true'/>;
    if (error) return <Empty/>;

    const active = stats.confirmed.value - stats.deaths.value - stats.recovered.value;

    return (
        <div>
            <Row type='flex' gutter={[{xs: 8, sm: 16, md: 24, lg: 32}, {xs: 8, sm: 16, md: 24, lg: 32}]}>
                <Col >
                    <Card type="inner" bodyStyle={{background: '#f0f2f5'}}>
                        <Title level={4}>Global Statistics</Title>
                    </Card>
                </Col>
            </Row>


            <Row type='flex' gutter={[{xs: 8, sm: 16, md: 24, lg: 32}, {xs: 8, sm: 16, md: 24, lg: 32}]}>

                <Col xs={24} sm={24} md={6} lg={6} xl={6}>
                    <Card >
                        <Row>
                            <Col flex={4}>
                                <Text strong="true">Confirmed</Text>
                            </Col>
                            <Col flex={1}>
                                <Text strong code>{stats.confirmed.value}</Text>
                            </Col>

                        </Row>


                    </Card>
                </Col>

                <Col xs={24} sm={24} md={6} lg={6} xl={6}>
                    <Card>
                        <Row>
                            <Col flex={4}>
                                <Text strong>Deaths</Text>
                            </Col>
                            <Col flex={1}>
                                <Text strong code>{stats.deaths.value}</Text>
                            </Col>
                        </Row>



                    </Card>
                </Col>



                <Col xs={24} sm={24} md={6} lg={6} xl={6}>
                    <Card>
                        <Row>
                            <Col flex={4}>
                                <Text strong>Active</Text>
                            </Col>
                            <Col flex={1}>
                                <Text strong code>{active}</Text>
                            </Col>
                        </Row>
                    </Card>
                </Col>


                <Col xs={24} sm={24} md={6} lg={6} xl={6}>
                    <Card>
                        <Row>
                            <Col flex={4}>
                                <Text strong>Recovered</Text>
                            </Col>
                            <Col flex={1}>
                                <Text strong code>{stats.recovered.value}</Text>
                            </Col>
                        </Row>
                    </Card>
                </Col>



            </Row>

            <Row type='flex' gutter={[16, 16]}>
                <Col xs={24} sm={24} md={12} lg={12} xl={12}>
                    <Card>
                        <BarChart
                            confirmed={stats.confirmed.value}
                            death={stats.deaths.value}
                            recovered={stats.recovered.value}
                            lastUpdate={stats.lastUpdate}

                        />
                    </Card>

                </Col>

                <Col xs={24} sm={24} md={12} lg={12} xl={12}>
                    <Card>
                        <RecoveryRate
                            confirmed={stats.confirmed.value}
                            death={stats.deaths.value}
                            recovered={stats.recovered.value}
                        />
                    </Card>
                </Col>


            </Row>


            <Card>
                <Row type='flex' gutter={[{xs: 8, sm: 16, md: 24, lg: 32}, {xs: 8, sm: 16, md: 24, lg: 32}]}>

                    <Col xs={12} sm={12} md={6} lg={6} xl={6}>
                        <Card headStyle={{background: '#f0f2f5'}} title="Confirmed:">
                            <span>{stats.confirmed.value}</span>
                        </Card>
                    </Col>

                    <Col xs={12} sm={12} md={6} lg={6} xl={6}>
                        <Card headStyle={{background: '#f0f2f5'}} title="Deaths:">
                            <span>{stats.deaths.value}</span>
                        </Card>
                    </Col>


                    <Col xs={12} sm={12} md={6} lg={6} xl={6}>
                        <Card headStyle={{background: '#f0f2f5'}} title="Active:">
                            <span>{active}</span>
                        </Card>
                    </Col>


                    <Col xs={12} sm={12} md={6} lg={6} xl={6}>
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