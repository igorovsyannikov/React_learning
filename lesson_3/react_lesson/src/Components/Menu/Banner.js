import React from 'react';
import styled from  'styled-components';
import BannerImg from '../../image/banner.png';

const BannerWrapper = styled.div`
    width: 100%;
    height: 200px;
    background: url(${BannerImg});
    background-size: cover;
    background-position: center;
`;

export const Banner = () => (
    <BannerWrapper/>
);