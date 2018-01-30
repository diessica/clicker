import React, { Component } from "react"
import socket from "../socket"
import { Button } from "./Button"

export class PlayControl extends Component {
    state = {
        isPlaying: null,
    }

    componentDidMount() {
        socket.on("connect", this.updatePlayback)
    }

    play = () => {
        this.setState({ isPlaying: true })
        socket.emit("play")
    }

    pause = () => {
        this.setState({ isPlaying: false })
        socket.emit("pause")
    }

    updatePlayback = () => {
        socket.emit("playback_get")
        socket.on("playback_get_done", playback =>
            this.setState({ isPlaying: playback === "playing" })
        )
    }

    render = () => (
        <Button
            playing={this.state.isPlaying}
            onClick={this.state.isPlaying ? this.pause : this.play}
        />
    )
}
