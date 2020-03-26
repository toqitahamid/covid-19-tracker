import React, {Component} from 'react';
import './App.css';
//import Stats from "./components/Stats";
//import CountrySelector from "./components/country/CountrySelector";
import {Avatar, Layout, Menu, Typography} from 'antd';
import BangladeshComponent from "./components/bangladesh/BangladeshComponent";
import TodoList from "./components/bangladesh/TodoList";
import SeoHeader from "./components/SeoHeader";

const { Title } = Typography;

//const style = { background: '#fff', padding: '8px 0' };

const {Header, Footer, Content} = Layout;

class App extends Component {
    render() {
        return (

            <Layout>

                <Header className="header" style={{background: '#fff'}}>
                    <div className="logo">
                        <Avatar src={process.env.PUBLIC_URL + '/logo.png'} alt="Coronavirus"/>
                    </div>


                    <Menu
                        theme="dark"
                        mode="horizontal"
                        defaultSelectedKeys={['2']}
                        style={{lineHeight: '64px'}}
                    >
                    </Menu>
                    <SeoHeader/>
                </Header>
                <Content >

                    <Layout className="site-layout-background" style={{padding: '12px 0'}}>

                        <Content style={{padding: '0 12px', minHeight: 280}}>



                            <div className="site-layout-content">


                                <BangladeshComponent/>

                                <TodoList/>

                                {/*<Row gutter={[{xs: 8, sm: 16, md: 24, lg: 32}, 16]}>*/}
                                {/*    <Col >*/}
                                {/*        <Stats url="https://covid19.mathdro.id/api"></Stats>*/}
                                {/*    </Col>*/}
                                {/*</Row>*/}



                                {/*<Row gutter={[{xs: 8, sm: 16, md: 24, lg: 32}, 16]}>*/}
                                {/*    <Col>*/}
                                {/*        <CountrySelector/>*/}
                                {/*    </Col>*/}
                                {/*</Row>*/}



                            </div>

                        </Content>
                    </Layout>
                </Content>
                <Footer style={{textAlign: 'center'}}>Penguin.com.bd ©2020</Footer>
            </Layout>
        );
    }
}

export default App;


