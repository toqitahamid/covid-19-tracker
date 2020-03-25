import React from "react";
import {Card, Carousel, Col, Empty, Row, Statistic, Typography} from 'antd';
import useStats from "../../utils/useStats";


const {Text} = Typography;

const responsiveGutter = [{xs: 8, sm: 16, md: 24, lg: 32}, {xs: 8, sm: 16, md: 24, lg: 32}];


function CardCarousel() {

    const {stats, loading, error} = useStats('https://covid19.mathdro.id/api/countries/BD');
    // const {stats: todayStats, todayLoading, todayError} = useStats('https://corona.lmao.ninja/countries/bangladesh?strict=true');

    const {stats: historicalStats, historicalLoading, historicalError} = useStats('https://corona.lmao.ninja/historical/bangladesh');

//https://corona.lmao.ninja/historical/Bangladesh
//https://covid19.mathdro.id/api

    if (loading || historicalLoading) return <Card active='true' loading='true'/>;
    if (!stats || !historicalStats) return <Card active='true' loading='true'/>;
    if (error || historicalError) return <Empty/>;

    const historicalConfirmed = historicalStats.timeline.cases;
    const historicalConfirmedArray = Object.entries(historicalConfirmed).map(([value, id]) => ({
        Date: value,
        type: 'Confirmed',
        value: historicalConfirmed[value]
    }));

    const historicalRecovered = historicalStats.timeline.recovered;
    const historicalRecoveredArray = Object.entries(historicalRecovered).map(([value, id]) => ({
        Date: value,
        type: 'Confirmed',
        value: historicalRecovered[value]
    }));


    const historicalDeaths = historicalStats.timeline.deaths;
    const historicalDeathsArray = Object.entries(historicalDeaths).map(([value, id]) => ({
        Date: value,
        type: 'Confirmed',
        value: historicalDeaths[value]
    }));

//const historicalActive = historicalConfirmedArray - historicalRecoveredArray - historicalDeathsArray;

    const historicalActiveArray = Object.entries(historicalConfirmed).map(([value, id]) => ({
        Date: value,
        type: 'Active',
        value: historicalConfirmed[value] - historicalDeaths[value] - historicalRecovered[value]
    }));

//console.log(historicalActiveArray);

    // const todayCases = todayStats.todayCases;
    // const todayDeaths = todayStats.todayDeaths;
    // const active = stats.confirmed.value - stats.deaths.value - stats.recovered.value;


    return (
        <div>
            <Row type='flex' gutter={responsiveGutter}>
                <Col xs={24} sm={24} md={6} lg={6} xl={6} xxl={6}>
                    <Carousel dotPosition="bottom"
                              centerMode={true}
                              draggable={true}
                              swipeToSlide={true}>

                        <div>
                            <Card style={{margin: '8px'}}>
                                <Row gutter={responsiveGutter}>
                                    <Col>
                                        <Statistic
                                            title="Infected"
                                            value={stats.confirmed.value}
                                            valueStyle={{color: 'orange', fontSize: 28}}
                                        />
                                    </Col>
                                </Row>

                            </Card>
                        </div>



                        <div>
                            <Card style={{margin: '8px'}}>
                                <Row gutter={responsiveGutter}>
                                    <Col>
                                        <Statistic
                                            title="Infected"
                                            value={stats.confirmed.value}
                                            valueStyle={{color: 'orange', fontSize: 28}}
                                        />
                                    </Col>
                                </Row>

                            </Card>
                        </div>

                    </Carousel>
                </Col>
            </Row>

        </div>
    );
}


export default CardCarousel;