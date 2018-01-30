import React from "react"
import { shallow, render, mount } from "enzyme"
import { PlayControl } from "./index"
import { Button } from "./Button"

describe("<PlayControl />", () => {
    it("plays", () => {
        const wrapper = mount(<PlayControl />)
        const play = jest.spyOn(wrapper.instance(), "play")
        wrapper.setState({
            isPlaying: false,
        })
        wrapper.find(Button).simulate("click")
        expect(wrapper.state("isPlaying")).toEqual(true)
        expect(play).toBeCalled()
    })

    it("pauses", () => {
        const wrapper = mount(<PlayControl />)
        const pause = jest.spyOn(wrapper.instance(), "pause")
        wrapper.setState({
            isPlaying: true,
        })
        wrapper.find(Button).simulate("click")
        expect(wrapper.state("isPlaying")).toEqual(false)
        expect(pause).toBeCalled()
    })
})
