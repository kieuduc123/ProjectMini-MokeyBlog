import React from 'react';
import  styled from 'styled-components';
import Header from '../components/layout/Header';
import { Button } from '../components/button';
import { NavLink } from 'react-router-dom';
import HomeBanner from '../components/module/home/HomeBanner';
import LayOut from '../components/layout/LayOut';
import HomeFeature from '../components/module/home/HomeFeture';
import HomeNewest from '../components/module/home/HomeNewest';
// import HomeNewest from '../components/module/home/HomeNewest';




const HompageStyles = styled.header``;
const Homepage = () => {
    
    return (
        <HompageStyles>
            <LayOut>
                <HomeBanner></HomeBanner>
                <HomeFeature></HomeFeature>
                <HomeNewest></HomeNewest>
            </LayOut>
            
        </HompageStyles>
    );
};

export default Homepage;