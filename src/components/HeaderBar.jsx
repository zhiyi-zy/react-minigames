import React from 'react'
import Logo from '../assets/logo.png'
import { useNavigate } from 'react-router-dom'
import styled from 'styled-components';

const Header = styled.header`
    background-color: #eeeeee;
    height: 80px;
    width: 100%;
    display: flex;
    justify-content: space-between;
`

const LogoImage =  styled.img`
    width: 50px;
    height: 50px;
    margin: 15px;
`

const RightHeader = styled.div`
    display: flex;
    justify-content:left;
`

const LeftHeader = styled.div`
    display: flex;
`

const HeaderItems = styled.div`
    display: block;
    margin: 10px 20px;

    &:hover {
        opacity: 0.7;
        cursor: pointer;
    }
`

const LongHeader = styled.span`
    display: block;

    @media (max-width: 800px) {
        display: none;
    }
`

const ShortHeader = styled.span`
    display: none;

    @media (max-width: 800px) {
        display: block;
    }
`

export default function HeaderBar () {
    const navigate = useNavigate()

    return (
        <Header>
            <LeftHeader>
                <LogoImage src={Logo} id="logo-img" alt="logo"></LogoImage>
            </LeftHeader>
            <RightHeader>
                <HeaderItems onClick={() => navigate('/')}>
                    <LongHeader>Home</LongHeader>
                    <ShortHeader>H</ShortHeader>
                </HeaderItems><hr />
                <HeaderItems onClick={() => navigate('/blanko')}>
                    <LongHeader>Blanko</LongHeader>
                    <ShortHeader>B</ShortHeader>
                </HeaderItems><hr />
                <HeaderItems onClick={() => navigate('/slido')}>
                    <LongHeader>Slido</LongHeader>
                    <ShortHeader>S</ShortHeader>
                </HeaderItems><hr />
                <HeaderItems onClick={() => navigate('/tetro')}>
                    <LongHeader>Tetro</LongHeader>
                    <ShortHeader>T</ShortHeader>
                </HeaderItems>
            </RightHeader>
        </Header>
    )
}