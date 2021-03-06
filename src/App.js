import React from 'react'
import { Switch, Route, Link } from 'react-router-dom';
import { Layout, Typography, Space } from 'antd';
import { Helmet } from 'react-helmet';

import { Navbar, Homepage, Exchanges, Coins, CoinDetails, News } from './components';
import './App.css';

const App = () => {
    return (
        <div className="app">
            <Helmet>
                <title>CoinX</title>
                <meta name='description' content='React Web app for gathering Global cryptocurrency statistics.' />
            </Helmet>

            <div className="navbar">
                <Navbar />
            </div>
            <div className="main">
                <Layout>
                    <div className="routes">
                        <Switch>
                            <Route exact path="/">
                                <Homepage />
                            </Route>
                            <Route exact path="/exchanges">
                                <Exchanges />
                            </Route>
                            <Route exact path="/coins">
                                <Coins />
                            </Route>
                            <Route exact path="/coins/:coinId">
                                <CoinDetails />
                            </Route>
                            <Route exact path="/news">
                                <News />
                            </Route>
                        </Switch>
                    </div>
                </Layout>
                <div className="footer">
               <Typography.Title  level={5} style={{color: 'white', textAlign: 'center'}}>
                   © 2021 CoinX.
               </Typography.Title>
               <Space>
                   <Link to="/">Home</Link>
                   <Link to="/exchanges">Exchanges</Link>
                   <Link to="/news">News</Link>

               </Space>
               
            </div>

            </div>

        </div>
    )
}

export default App
