import React from 'react'
import Switch from 'react-switch'

type Props = {
    value:boolean
    onSwitch:(state:boolean)=> void
}

const CustomSwitch = ({value,onSwitch}: Props) => {
  return (
    <Switch onChange={(state)=> onSwitch(state)} checked={value} />
  )
}

export default CustomSwitch