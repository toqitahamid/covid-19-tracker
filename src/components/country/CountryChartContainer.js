import React from "react";
import {Card, Col, Empty, Row} from "antd";
import CountrySummaryDonutChart from "./graphs/CountrySummaryDonutChart";
//import GlobalLineChart from "../global/GlobalLineChart";
import useStats from "../../utils/useStats";
import formatDate from "../../utils/formatDate";


function CountryChartContainer({url}) {

    const {stats, loading, error} = useStats(url);


    //console.log(error);
    //if (!stats) return <p>Loading...</p>
    if (loading) return <Card active='true' loading='true'/>;
    if (!stats) return <Empty description='No Cases Found'/>;
    //if (error || !stats) return <Empty description='No Cases Found'/>;
    //console.log(selectedCountry);

    const active = stats.confirmed.value - stats.deaths.value - stats.recovered.value;
    const lastUpdate = stats.lastUpdate;
    const formatted_date = formatDate(lastUpdate);


    return (
        <div>


            <Row type='flex' gutter={[16, 16]}>
                <Col xs={24} sm={24} md={12} lg={12} xl={12}>
                    <Card>
                        <CountrySummaryDonutChart
                            confirmed={stats.confirmed.value}
                            death={stats.deaths.value}
                            recovered={stats.recovered.value}
                            lastUpdate={stats.lastUpdate}

                        />
                    </Card>

                </Col>



            </Row>
        </div>

    );
}

export default CountryChartContainer;
