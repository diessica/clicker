import React from "react"
import { shallow } from "enzyme"
import { VolumeControl } from "./index"
import { RangeSlider } from "./RangeSlider"

describe("<VolumeControl />", () => {
    it("sets volume", () => {
        const wrapper = shallow(<VolumeControl />)
        const changeVolume = jest.spyOn(wrapper.instance(), "changeVolume")
        wrapper.setState({
            volume: 0,
        })
        wrapper.find(RangeSlider).simulate("change", { target: { value: 42 } })
        expect(changeVolume).toBeCalled()
        expect(wrapper.state("volume")).toEqual(42)
    })
})
