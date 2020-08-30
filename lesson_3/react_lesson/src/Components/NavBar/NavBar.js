import React from 'react';
import styled from  'styled-components';
import logoImg from '../../image/logo.svg';
import userIcon from '../../image/sign.svg'

const NavbarStyled = styled.header`
    position: fixed;
    top: 0;
    left: 0;
    z-index: 999;
    height: 80px;
    width: 100%;
    display: flex;
    justify-content: space-between;
    padding: 15px;
    background-color: #299B01;
    color: white;
`;
const Logo = styled.div `
    display: flex;
    align-items: center;
    width: 100%;
    justify-content: space-between;
`;
const H1 = styled.h1`
    font-size: 24px;
    margin-left: 15px;
`;
const ImgLogo = styled.img`
    width: 50px;
`;
const LogoWrapper = styled.div`
    display: flex;
    align-items: center;
`;
const UserWrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    cursor: pointer;
`;
const Btn = styled.button`
    background-color: transparent;
    outline: none;
    border: none;
    color: white;
    font: 18px Roboto, san-serif;
    margin-top: 5px;
    cursor: pointer;
`;
const UserIcon = styled.img`
    height: 30px;
`;

export const NavBar = () => (
    <NavbarStyled>
        <Logo>
            <LogoWrapper>
                <ImgLogo src={logoImg} alt="logo"/>
                <H1>MrDonald</H1>
            </LogoWrapper>
            <UserWrapper>
                <UserIcon src={userIcon} alt="user"/>
                <Btn>Войти</Btn>
            </UserWrapper>
        </Logo>
    </NavbarStyled>
)