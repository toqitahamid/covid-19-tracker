import React from "react";
import useStats from "../../utils/useStats";
import {Card, Col, Divider, Empty, Row, Statistic, Typography} from 'antd';
import CardAreaChart from "./graphs/CardAreaChart";


const { Text } = Typography;

const responsiveGutter = [{xs: 8, sm: 16, md: 24, lg: 32}, {xs: 8, sm: 16, md: 24, lg: 32}];

function BangladeshComponent() {
    const {stats, loading, error} = useStats('https://covid19.mathdro.id/api/countries/BD');
    const {stats: todayStats, todayLoading, todayError} = useStats('https://corona.lmao.ninja/countries/bangladesh?strict=true');

    const {stats: historicalStats, historicalLoading, historicalError} = useStats('https://corona.lmao.ninja/historical/bangladesh');



    //https://corona.lmao.ninja/historical/Bangladesh
    //https://covid19.mathdro.id/api
    //
    if (loading || todayLoading || historicalLoading) return <Card active='true' loading='true'/>;
    if (!stats || !todayStats || !historicalStats) return <Card active='true' loading='true'/>;
    if (error || todayError || historicalError) return <Empty/>;



    const historicalConfirmed = historicalStats.timeline.cases;
    const historicalConfirmedArray = Object.entries(historicalConfirmed).map(([value, id]) => ({Date: value, type: 'Confirmed', value: historicalConfirmed[value]}));

    const historicalRecovered = historicalStats.timeline.recovered;
    const historicalRecoveredArray = Object.entries(historicalRecovered).map(([value, id]) => ({Date: value, type: 'Confirmed', value: historicalRecovered[value]}));


    const historicalDeaths = historicalStats.timeline.deaths;
    const historicalDeathsArray = Object.entries(historicalDeaths).map(([value, id]) => ({Date: value, type: 'Confirmed', value: historicalDeaths[value]}));

    //const historicalActive = historicalConfirmedArray - historicalRecoveredArray - historicalDeathsArray;

    const historicalActiveArray = Object.entries(historicalConfirmed).map(([value, id  ]) => ({Date: value, type: 'Active', value: historicalConfirmed[value]-historicalDeaths[value]-historicalRecovered[value]}));

    console.log(historicalActiveArray);


    const timelineConfirmed = historicalConfirmedArray.filter(function (data, index) {

        let itemTime = new Date(data.Date).getTime();
        let filterTime = new Date('3/7/20').getTime();
        return itemTime >= filterTime ;
    });

    const timelineRecovered = historicalRecoveredArray.filter(function (data, index) {

        let itemTime = new Date(data.Date).getTime();
        let filterTime = new Date('3/7/20').getTime();
        return itemTime >= filterTime ;
    });


    const timelineDeaths = historicalDeathsArray.filter(function (data, index) {

        let itemTime = new Date(data.Date).getTime();
        let filterTime = new Date('3/7/20').getTime();
        return itemTime >= filterTime ;
    });


    const timelineActive = historicalActiveArray.filter(function (data, index) {

        let itemTime = new Date(data.Date).getTime();
        let filterTime = new Date('3/7/20').getTime();
        return itemTime >= filterTime ;
    });


    console.log(timelineActive);

    const todayCases = todayStats.todayCases;
    const todayDeaths = todayStats.todayDeaths;
    const active = stats.confirmed.value - stats.deaths.value - stats.recovered.value;


    return (
        <div>


            <Row type='flex' gutter={responsiveGutter}>

                <Col xs={24} sm={24} md={6} lg={6} xl={6} xxl={6}>
                    <Card >
                        <Row>
                            <Col>
                                    <Statistic
                                        title="Infected"
                                        value={stats.confirmed.value}
                                        valueStyle={{ color: 'orange', fontSize: 28 }}
                                    />
                            </Col>
                        </Row>

                        <Row>
                            <Col span={24}>
                                <CardAreaChart data={timelineConfirmed} color={'orange'}/>
                            </Col>

                        </Row>


                        <Divider ></Divider>

                        <Row>
                            <Col flex={4}>
                                <Text strong style={{fontSize: 14}}>Today Infected</Text>
                            </Col>
                            <Col flex={1}>
                                <Text strong style={{fontSize: 14}}>{todayCases}</Text>
                            </Col>
                        </Row>

                    </Card>
                </Col>

                <Col xs={24} sm={24} md={6} lg={6} xl={6}>
                    <Card>

                        <Row>
                            <Col>
                                <div>
                                    <Statistic
                                        title="Active"
                                        value={active}
                                        valueStyle={{ color: 'grey', fontSize: 28 }}
                                    />
                                </div>
                            </Col>
                        </Row>

                        <Row>
                            <Col span={24}>
                                <CardAreaChart data={timelineActive} color={'grey'}/>
                            </Col>

                        </Row>


                        <Divider></Divider>

                        <Row>
                            <Col flex={4}>
                                <Text strong style={{fontSize: 14}}>Today Cases</Text>
                            </Col>
                            <Col flex={1}>
                                <Text strong style={{fontSize: 14}}>{todayCases}</Text>
                            </Col>
                        </Row>




                    </Card>
                </Col>

                <Col xs={24} sm={24} md={6} lg={6} xl={6} xxl={6}>
                    <Card>

                        <Row>
                            <Col>
                                <div>
                                    <Statistic
                                        title="Recovered"
                                        value={stats.recovered.value}
                                        valueStyle={{ color: 'green', fontSize: 28 }}
                                    />
                                </div>
                            </Col>
                        </Row>

                        <Row>
                            <Col span={24}>
                                <CardAreaChart data={timelineRecovered} color={'green'}/>
                            </Col>

                        </Row>

                        <Divider></Divider>

                        <Row>
                            <Col flex={4}>
                                <Text strong style={{fontSize: 14}}>Recovery Rate</Text>
                            </Col>
                            <Col flex={1}>
                                <Text strong style={{
                                    fontSize: 13,
                                    color: 'green'
                                }}>{`${((stats.recovered.value / stats.confirmed.value) * 100).toFixed(2)} %`}</Text>
                            </Col>
                        </Row>

                    </Card>
                </Col>


                <Col xs={24} sm={24} md={6} lg={6} xl={6} xxl={6}>
                    <Card>

                        <Row>
                            <Col>
                                <div>
                                    <Statistic
                                        title="Deaths"
                                        value={stats.deaths.value}
                                        valueStyle={{ color: 'red', fontSize: 28 }}
                                    />
                                </div>
                            </Col>
                        </Row>

                        <Row>
                            <Col span={24}>
                                <CardAreaChart data={timelineDeaths} color={'red'}/>
                            </Col>

                        </Row>

                        <Divider></Divider>

                        <Row>
                            <Col flex={4}>
                                <Text strong style={{fontSize: 14}}>Death Rate</Text>
                            </Col>
                            <Col flex={1}>
                                <Text strong style={{
                                    fontSize: 14,
                                    color: 'red'
                                }}>{`${((stats.deaths.value / stats.confirmed.value) * 100).toFixed(2)} %`}</Text>
                            </Col>
                        </Row>

                    </Card>
                </Col>


            </Row>
        </div>
    );
}


export default BangladeshComponent;