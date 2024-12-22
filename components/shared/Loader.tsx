
import React, { CSSProperties } from 'react'
import ScaleLoader from "react-spinners/ScaleLoader";

function Loader() {
  return (
    <div className='flex-center h-[100vh] w-full'>
       <ScaleLoader
        color={"#fff"}
        loading={true}
        aria-label="Loading Spinner"
        data-testid="loader"
      />
    </div>
  )
}

export default Loader