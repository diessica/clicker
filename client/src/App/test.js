import React from "react"
import { shallow } from "enzyme"
import { App } from "./index"

describe("<App />", () => {
    it("renders without exploding my computer", () => {
        shallow(<App />)
    })
})
