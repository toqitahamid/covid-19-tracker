import React, {Component} from 'react';
import './App.css';
import Stats from "./components/Stats";
import CountrySelector from "./components/CountrySelector";
import {Layout, Menu} from 'antd';
//import { UserOutlined, LaptopOutlined, NotificationOutlined } from '@ant-design/icons';

//const style = { background: '#fff', padding: '8px 0' };


const {Header, Footer, Sider, Content} = Layout;

//const {SubMenu} = Menu;


class App extends Component {
    render() {
        return (

            <Layout>
                <Header className="header">
                    <div className="logo"/>
                    <Menu
                        theme="dark"
                        mode="horizontal"
                        defaultSelectedKeys={['2']}
                        style={{lineHeight: '64px'}}
                    >
                    </Menu>
                </Header>
                <Content style={{padding: '0 100px'}}>

                    <Layout className="site-layout-background" style={{padding: '24px 0'}}>

                        <Content style={{padding: '0 24px', minHeight: 280}}>

                            <div className="site-layout-content">

                                <Stats url="https://covid19.mathdro.id/api"></Stats>
                                <CountrySelector/>

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


