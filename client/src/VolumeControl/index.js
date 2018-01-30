import React, { Component } from "react"
import styled from "styled-components"
import { IconVolume } from "./IconVolume"
import { COLOR_MAIN } from "../colors"
import socket from "../socket"
import { RangeSlider } from "./RangeSlider"

const Level = styled.span`
    padding: 5px 0 0 10px;
    display: inline-block;
    color: ${COLOR_MAIN};
    font-weight: bold;
    vertical-align: top;
`

const Information = styled.div`
    float: left;
    margin-top: 2px;
`

export class VolumeControl extends Component {
    state = {
        volume: 0,
    }

    componentDidMount() {
        socket.on("connect", this.updateVolume)
    }

    updateVolume = () => {
        socket.emit("volume_get")
        socket.on("volume_get_done", volume => this.setState({ volume }))
    }

    changeVolume = ({ target: { value: volume } }) => {
        this.setState({ volume })
        socket.emit("volume_set", volume)
    }

    render = () => (
        <div>
            <Information>
                <IconVolume fill={COLOR_MAIN} width="35" />
                <Level>{this.state.volume}</Level>
            </Information>

            <RangeSlider
                min="0"
                max="100"
                value={this.state.volume}
                onChange={this.changeVolume}
            />
        </div>
    )
}
