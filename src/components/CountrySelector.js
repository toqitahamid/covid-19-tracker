import React, {useState} from "react";
//import styled from "styled-components";
import useStats from "../utils/useStats";
import CountryStats from "./CountryStats";
//import ReactFlagsSelect from 'react-flags-select';
import {Card, Col, Row, Select} from 'antd';
//import css module
import 'react-flags-select/css/react-flags-select.css';


const style = {background: '#fff', padding: '8px 0'};


const {Option} = Select;

/*
function getKeyByValue(object, value) {
    return Object.keys(object).find(key => object[key] === value);
}*/


function CountrySelector() {
    const {stats: countries, loading, error} = useStats('https://covid19.mathdro.id/api/countries');
    const [selectedCountry, setSelectedCountry] = useState('BGD');
    //const [counter, setCounter] = useState(1);


    if (loading) return <p>Loading...</p>;
    if (loading) return <p>Loading...</p>;
    if (error || !countries) return <p>Error</p>;


    //if (!countries) return <p>Loading...</p>;

    return (
        <div>

            <Row gutter={{xs: 8, sm: 16, md: 24, lg: 32}}>

                <Col span={24}>

                    <Card>
                        <div>
                            <Row gutter={{xs: 8, sm: 16, md: 24, lg: 32}}>
                                <Col span={6}>
                                    <Select
                                        style={{width: 200}}
                                        showSearch={true}
                                        defaultValue={selectedCountry}
                                        onChange={
                                            value => {
                                                setSelectedCountry(value);
                                            }}
                                    >
                                        {Object.entries(countries.countries).map(([country, code]) => (
                                            <Option key={countries.iso3[code] + Math.random()}
                                                    value={countries.iso3[code]}>
                                                {country}
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

                            <Row gutter={{xs: 8, sm: 16, md: 24, lg: 32}}>
                                <Col span={24}>
                                    <CountryStats
                                        url={`https://covid19.mathdro.id/api/countries/${selectedCountry}`}></CountryStats>
                                    {/*<span>{console.log(getKeyByValue(countries.countries, selectedCountry))}</span>*/}

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