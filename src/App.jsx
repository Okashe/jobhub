import React from 'react'

const App = () => {
  const x =5;
  const y=10;
  const names =['Okash', 'Abdi', 'Ali', 'Ahmed']
  return (
    <div className='text-5xl'>
      <div>App</div>
      <p>the sum of {x} and {y} is {x+y}</p>
      <h2>Here is the list of names</h2>
      <ul>
        {names.map((name)=>(
          <li key={name}>{name}</li>
        ))}
      </ul>
    </div>
  )
}

export default App