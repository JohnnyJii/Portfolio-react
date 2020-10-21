import React, { Component } from 'react';
import './App.css';
import {Layout, Header, Navigation, Drawer, Content} from 'react-mdl'
import Main from './components/main'
import { Link } from 'react-router-dom'

class App extends Component {
  render() {
    return (
      <div className="demo-big-content">
    <Layout>
        <Header className="header-color" title={<Link style={{textDecoration: 'none', color: 'white'}} to="/">My portfolio</Link> } scroll>
            <Navigation className="header-nav">
                <Link to="/about">About me</Link>
                <Link to="/projects">Projects</Link>
                <Link to="/resume">Resume</Link>
                <Link to="/contact">Contact me</Link>
            </Navigation>
        </Header>
        <Drawer className="drawer-color" title={<Link className="d" style={{textDecoration: 'none', color: 'black'}} to="/">My portfolio</Link> } scroll>
            <Navigation className="side-nav">
            <Link to="/about">About me</Link>
                <Link to="/projects">Projects</Link>
                <Link to="/resume">Resume</Link>
                <Link to="/contact">Contact me</Link>
            </Navigation>
        </Drawer>
        <Content>
            <div className="page-content" />
            <Main />
        </Content>
    </Layout>
</div>
    )
  };
}

export default App;