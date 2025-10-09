import React from 'react'

const Sales = ({data}) => {
  console.log(data);
  return (
    <div>
      <h2>Sales</h2>
      <ul className="menu menu-vertical lg:menu-horizontal bg-base-200 rounded-box">
        <li><a>Item 1</a></li>
        <li><a>Item 2</a></li>
        <li><a>Item 3</a></li>
      </ul>
    </div>
  )
}

export default Sales