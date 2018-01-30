import {
    COLOR_BACKGROUND,
    COLOR_MAIN,
    COLOR_HIGHLIGHT,
    COLOR_HIGHLIGHT_SECONDARY,
} from "../colors"
import styled from "styled-components"

const input = `
    height: 3px;
    background: ${COLOR_MAIN};
    background-repeat: no-repeat;
    border-radius: 3px;
    border: 0;
    outline: none;
`

const thumb = `
    width: 25px;
    height: 25px;
    border-radius: 100%;
    background: ${COLOR_BACKGROUND};
    border: 3px solid ${COLOR_HIGHLIGHT_SECONDARY};
    cursor: pointer;
    box-sizing: border-box;
`

export const RangeSlider = styled.input.attrs({ type: "range" })`
    float: right;
    -webkit-appearance: none;
    width: calc(100% - 95px);
    background: transparent;
    height: 28px;
    border: 0;
    outline: none;

    &::-webkit-slider-runnable-track {
        ${input};
        height: 4px;
    }

    &::-webkit-slider-thumb {
        margin-top: -10px;
        -webkit-appearance: none;
        ${thumb};
    }

    &::-moz-range-track {
        ${input};
    }

    &::-moz-range-thumb {
        ${thumb};
    }

    &::-moz-range-progress {
        background: ${COLOR_HIGHLIGHT};
        border-color: ${COLOR_HIGHLIGHT};
        height: 3px;
    }

    &:focus,
    &:active,
    &::-moz-focus-inner,
    &:-moz-focusring {
        border: 0;
        outline: none;
    }
`
