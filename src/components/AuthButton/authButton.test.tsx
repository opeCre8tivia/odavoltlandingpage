import "@testing-library/jest-dom"
import { render, screen, fireEvent } from "@testing-library/react"
import AuthButton from "."

describe("Auth button is rendered properly", () => {
  it("Button rendered", () => {
    const getBtn = render(
      <AuthButton onClick={() => {}} title="Teet" loading={false} />
    )
    const btnEl = getBtn.getByTestId("auth_btn")

    expect(btnEl).toBeInTheDocument()
  })

  it("Button is clickable", () => {
    let mockClickfn = jest.fn()

    let btnEl = render(
      <AuthButton onClick={mockClickfn} title="Teet" loading={false} />
    )
    expect(mockClickfn).toHaveBeenCalledTimes(0)

    //when we click
    fireEvent.click(btnEl.getByTestId("auth_btn"))
    expect(mockClickfn).toHaveBeenCalledTimes(1)
  })
})
