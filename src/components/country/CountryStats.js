import useStats from "../../utils/useStats";
//import styled from "styled-components";
import React from "react";
import {Card, Col, Empty, Row, Typography} from 'antd';
import formatDate from "../../utils/formatDate";
//import GlobalLineChart from "../global/GlobalLineChart";
//import CountrySummaryDonutChart from "./graphs/CountrySummaryDonutChart";
//import CountryChartContainer from "./CountryChartContainer";


const { Text} = Typography;

//const style = {background: '#fff', padding: '8px 0'};



function CountryStats({url, selectedCountry}) {

    const {stats, loading, error} = useStats(url);




    //console.log(error);
    //if (!stats) return <p>Loading...</p>
    if (loading ) return <Card active= 'true' loading='true'/>;
    if (!stats ) return <Card active= 'true' loading='true'/>;
    if (error ) return <Empty description='No Cases Found'/>;
    //console.log(selectedCountry);

    const active = stats.confirmed.value - stats.deaths.value - stats.recovered.value;
    const lastUpdate = stats.lastUpdate;
    const formatted_date = formatDate(lastUpdate);


    return (
        <div>


            <Row type='flex' gutter={[{xs: 8, sm: 16, md: 24, lg: 32}, {xs: 8, sm: 16, md: 24, lg: 32}]}>

                <Col xs={24} sm={24} md={6} lg={6} xl={6}>
                    <Card >
                        <Row>
                            <Col flex={4}>
                                <Text strong="true" style={{fontSize: 16}}>Confirmed</Text>
                            </Col>
                            <Col flex={1}>
                                <Text strong style={{fontSize: 16}}>{stats.confirmed.value}</Text>
                            </Col>
                        </Row>
                    </Card>
                </Col>

                <Col xs={24} sm={24} md={6} lg={6} xl={6}>
                    <Card>
                        <Row>
                            <Col flex={4}>
                                <Text strong style={{fontSize: 16}}>Active</Text>
                            </Col>
                            <Col flex={1}>
                                <Text strong style={{fontSize: 16}}>{active}</Text>
                            </Col>
                        </Row>


                    </Card>
                </Col>

                <Col xs={24} sm={24} md={6} lg={6} xl={6}>
                    <Card>
                        <Row>
                            <Col flex={4}>
                                <Text strong style={{fontSize: 16}}>Deaths</Text>
                            </Col>
                            <Col flex={1}>
                                <Text strong style={{fontSize: 16, color: '#d84b14'}}>{stats.deaths.value}</Text>
                            </Col>
                        </Row>

                        <Row>
                            <Col flex={4}>
                                <Text strong style={{fontSize: 13, color: '#a1bbcc'}}>Death Rate</Text>
                            </Col>
                            <Col flex={1}>
                                <Text style={{fontSize: 13, color: '#a1bbcc'}}>{`${((stats.deaths.value/stats.confirmed.value)*100).toFixed(2)}%`}</Text>
                            </Col>
                        </Row>



                    </Card>
                </Col>






                <Col xs={24} sm={24} md={6} lg={6} xl={6}>
                    <Card>
                        <Row>
                            <Col flex={4}>
                                <Text strong style={{fontSize: 16}}>Recovered</Text>
                            </Col>
                            <Col flex={1}>
                                <Text strong style={{fontSize: 16, color: '#0d8625'}}>{stats.recovered.value}</Text>
                            </Col>
                        </Row>


                        <Row>
                            <Col flex={4}>
                                <Text strong style={{fontSize: 13, color: '#a1bbcc'}}>Recovery Rate</Text>
                            </Col>
                            <Col flex={1}>
                                <Text style={{fontSize: 13, color: '#a1bbcc'}}>{`${((stats.recovered.value/stats.confirmed.value)*100).toFixed(2)}%`}</Text>
                            </Col>
                        </Row>

                    </Card>
                </Col>



            </Row>






            <Row type="flex" style={{alignItems: 'center'}}>
                <Col>

                        <Text  type="secondary">{`Last Updated: ${formatted_date}`}</Text>
                </Col>
            </Row>




        </div>
    );
}

export default CountryStats;