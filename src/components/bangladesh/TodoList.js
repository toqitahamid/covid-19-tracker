import React from 'react';
import {Card, Col, Row, Typography} from "antd";


const { Title } = Typography;
const { Meta } = Card;
const responsiveGutter = [{xs: 8, sm: 16, md: 24, lg: 32}, {xs: 8, sm: 16, md: 24, lg: 32}];
const testStyle = {
    textAlign: 'center',
};

function TodoList() {

    return(

        <div>

            <Row type='flex' gutter={responsiveGutter}>
                <Col xs={24} sm={24} md={8} lg={8} xl={8} xxl={8}>
                    <Card>

                                <Row >
                                    <Col>
                                        <div>
                                            <Title level={4}>How to prevent Coronavirus?</Title>
                                        </div>

                                    </Col>
                                </Row>

                                <Row type='flex'>
                                    <Col xs={12} sm={12} md={8} lg={8} xl={8} xxl={8}>
                                        <div>
                                            <Card
                                                hoverable={false}
                                                bordered={false}
                                                cover={<img alt="example" src={process.env.PUBLIC_URL + '/01.png'} />}
                                            >
                                                <Meta style={testStyle} description="Wash your hands throughly" />
                                            </Card>

                                        </div>
                                    </Col>

                                    <Col xs={12} sm={12} md={8} lg={8} xl={8} xxl={8}>
                                        <div>
                                            <Card
                                                hoverable={false}
                                                bordered={false}
                                                cover={<img alt="example" src={process.env.PUBLIC_URL + '/02.png'} />}
                                            >
                                                <Meta style={testStyle} description="Use a facial facemask" />
                                            </Card>

                                        </div>

                                    </Col>

                                    <Col xs={12} sm={12} md={8} lg={8} xl={8} xxl={8}>
                                        <div>
                                            <Card
                                                hoverable={false}
                                                bordered={false}
                                                cover={<img alt="example" src={process.env.PUBLIC_URL + '/03.png'} />}
                                            >
                                                <Meta style={testStyle} description="Use an alcohol-based gel" />
                                            </Card>

                                        </div>

                                    </Col>


                                    <Col xs={12} sm={12} md={8} lg={8} xl={8} xxl={8}>
                                        <div>
                                            <Card
                                                hoverable={false}
                                                bordered={false}
                                                cover={<img alt="example" src={process.env.PUBLIC_URL + '/04.png'} />}
                                            >
                                                <Meta style={testStyle} description="14 day self-quarantine" />
                                            </Card>

                                        </div>

                                    </Col>

                                    <Col xs={12} sm={12} md={8} lg={8} xl={8} xxl={8}>
                                        <div>
                                            <Card
                                                hoverable={false}
                                                bordered={false}
                                                cover={<img alt="example" src={process.env.PUBLIC_URL + '/05.png'} />}
                                            >
                                                <Meta style={testStyle} description="Avoid physical contact" />
                                            </Card>

                                        </div>

                                    </Col>

                                    <Col xs={12} sm={12} md={8} lg={8} xl={8} xxl={8}>
                                        <div>
                                            <Card
                                                hoverable={false}
                                                bordered={false}
                                                cover={<img alt="example" src={process.env.PUBLIC_URL + '/06.png'} />}
                                            >
                                                <Meta style={testStyle} description="Coronavirus COVID-19" />
                                            </Card>

                                        </div>

                                    </Col>

                                </Row>

                    </Card>
                </Col>
            </Row>

        </div>


    );

}

export default TodoList;