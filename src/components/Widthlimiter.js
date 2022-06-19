import React from 'react'

const Widthlimiter = ({children}) => {
  return (
        <div className="grid grid-cols-2 py-10 gap-y-10 sm:grid-cols-2 gap-x-6 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
            {children}
        </div>
  )
}

export default Widthlimiter