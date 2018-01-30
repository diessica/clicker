import styled from "styled-components"
import { COLOR_MAIN } from "../colors"

export const Button = styled.button`
    cursor: pointer;
    border: 3px solid ${COLOR_MAIN};
    border-radius: 50%;
    width: 140px;
    height: 140px;
    padding: 20px;
    background: none;
    margin: 40px 0;

    &::before,
    &::after {
        content: "";
        display: inline-block;
        vertical-align: middle;
        transition: all 0.2s;
    }

    &::before {
        height: 20px;
        border: 10px solid ${COLOR_MAIN};
        border-right: none;
        border-top: 10px solid transparent;
        border-bottom: 10px solid transparent;
        margin-left: 5px;

        ${props =>
            props.playing &&
            `
            margin-left: 0;
            border-top-width: 0;
            border-bottom-width: 0;
            height: 40px;
        `};
    }

    &::after {
        margin: 2.5px 0;
        height: 0;
        border: 10px solid ${COLOR_MAIN};
        border-right: none;
        border-top: 10px solid transparent;
        border-bottom: 10px solid transparent;

        ${props =>
            props.playing &&
            `
            height: 40px;
            border-top-width: 0;
            border-bottom-width: 0;
            border-left-width: 10px;
            margin-left: 10px;
        `};
    }
`
