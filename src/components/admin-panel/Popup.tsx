import React, { Dispatch, SetStateAction } from 'react'

interface PropsType{
    setOpenPopup: Dispatch<SetStateAction<boolean>>;
    setUpdateTable: Dispatch<SetStateAction<boolean>>;
}

function Popup({setOpenPopup, setUpdateTable}: PropsType) {

    

  return (
    <div>Popup</div>
  )
}

export default Popup