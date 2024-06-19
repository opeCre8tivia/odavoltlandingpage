import { render, fireEvent } from "@testing-library/react"
import "@testing-library/jest-dom"
import CustomTextInput from "."

describe("Custom text input", () => {
  it("renders properly", () => {
    let El = render(
      <CustomTextInput placeholder="test" value={1} onChange={() => {}} />
    )
    let textInputEl = El.getAllByRole("input")
    expect(textInputEl).toBeInTheDocument()
  })
  it("recieves value on change", () => {
    let El = render(
      <CustomTextInput placeholder="test" value={1} onChange={() => {}} />
    )
    let textInputEl = El.getAllByRole("input")[0]

    fireEvent.change(textInputEl, { target: { value: "test value" } })
    expect(textInputEl).toHaveValue("test value")
  })
})
