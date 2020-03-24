import React, {useState} from "react";
//import styled from "styled-components";
import useStats from "../../utils/useStats";
import CountryStats from "./CountryStats";
//import ReactFlagsSelect from 'react-flags-select';
import {Card, Col, Empty, Row, Select} from 'antd';
//import css module
import 'react-flags-select/css/react-flags-select.css';
//import CountrySummaryDonutChart from "./graphs/CountrySummaryDonutChart";
//import GlobalLineChart from "../global/GlobalLineChart";
import CountryChartContainer from "./CountryChartContainer";


const {Option} = Select;

/*
function getKeyByValue(object, value) {
    return Object.keys(object).find(key => object[key] === value);
}*/


function CountrySelector() {
    const {stats: countries, loading, error} = useStats('https://covid19.mathdro.id/api/countries');
    const [selectedCountry, setSelectedCountry] = useState('BGD');
    //const [counter, setCounter] = useState(1);


    if (loading ) return <Card active= 'true' loading='true'/>;
    if (!countries) return <Card active= 'true' loading='true'/>;
    if (error) return <Empty/>;


    //if (!countries) return <p>Loading...</p>;

    return (
        <div>

            <Row gutter={{xs: 8, sm: 16, md: 24, lg: 32}}>

                <Col>

                    <Card>
                        <div>
                            <Row gutter={[{xs: 8, sm: 16, md: 24, lg: 32}, 16]}>
                                <Col span={{xs: 2, sm: 6, md: 8, lg: 12}}>
                                    <Select
                                        style={{width: 200}}
                                        showSearch={true}
                                        defaultValue={selectedCountry}
                                        onChange={
                                            e =>
                                                setSelectedCountry(e)
                                            }
                                    >
                                        {Object.entries(countries.countries).map(([key, value]) => (
                                            <Option key={value.iso3 + Math.random()}
                                                    value={value.iso3}>
                                                {value.name}
                                            </Option>
                                        ))}
                                    </Select>
                                </Col>

                            </Row>

                            {/*console.log(selectedCountry)*/}
                            {/*<select
                    onChange={e => {
                        setSelectedCountry(e.target.value);
                    }
                    }
                >
                    {Object.entries(countries.countries).map(([country, code]) => (
                        <option selected={selectedCountry === countries.iso3[code]} key={countries.iso3[code]} value={countries.iso3[code]}>
                            {country}
                        </option>
                    ))}
                </select>*/}

                            {/*<ReactFlagsSelect searchable={true}
                                  searchPlaceholder="Search for a country"
                                  defaultCountry={selectedCountry}
                                  onSelect={code => setSelectedCountry(countries.iso3[code])} />*/}
                            {/*<h2>Currently Showing {getKeyByValue(countries.countries, getKeyByValue(countries.iso3, selectedCountry))}</h2>*/}

                            <Row >
                                <Col>
                                    <CountryStats
                                        url={`https://covid19.mathdro.id/api/countries/${selectedCountry}`}
                                        selectedCountry={selectedCountry}>
                                    </CountryStats>

                                    {/*<span>{console.log(getKeyByValue(countries.countries, selectedCountry))}</span>*/}

                                </Col>

                            </Row>


                            <Row>
                                <Col>
                                    <CountryChartContainer url={`https://covid19.mathdro.id/api/countries/${selectedCountry}`}/>
                                </Col>
                            </Row>


                        </div>
                    </Card>
                </Col>
            </Row>


        </div>
    );
}

export default CountrySelector;