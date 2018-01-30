import React, { Fragment } from "react"
import styled, { injectGlobal } from "styled-components"
import { PlayControl } from "./../PlayControl/index"
import { VolumeControl } from "./../VolumeControl/index"
import { COLOR_BACKGROUND } from "../colors"

injectGlobal`
    body {
        width: 85%;
        max-width: 480px;
        transform: translateY(-50%) translateX(-50%);
        position: absolute;
        top: 50%;
        left: 50%;
        background-color: ${COLOR_BACKGROUND};
        color: #fff;
        font-family: 'Arimo', sans-serif;
        text-rendering: optimizeLegibility;
        font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        -webkit-font-smoothing: antialiased;
        text-align: center;
    }
`

const Title = styled.h1`
    text-transform: uppercase;
    letter-spacing: 10px;
    font-size: 25px;
    margin-bottom: 20px;
    color: #fff;
    padding: 10px 20px;
`

export const App = () => (
    <Fragment>
        <Title>Clicker</Title>
        <PlayControl />
        <VolumeControl />
    </Fragment>
)
