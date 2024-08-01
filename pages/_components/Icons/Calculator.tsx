import React from 'react'

function CalcIcon(props) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="36px" height="36px" viewBox="0 0 24 24" {...props}>
      <g fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M1 21V3a2 2 0 0 1 2-2h18a2 2 0 0 1 2 2v18a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2Z" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M15 7h4m-4 8.5h4m-4 3h4M5 7h2m2 0H7m0 0V5m0 2v2m-1.414 9.414L7 17m1.415-1.414L7 17m0 0l-1.414-1.414M7 17l1.415 1.414" />
      </g>
    </svg>
  )
}

export default CalcIcon