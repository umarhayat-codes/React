import React from 'react'

export default function About() {
    const handleConsole = () => {
        console.log('This is console :>> ', 'This is console');
    }
    const handleSum2Num = (x,y) => {
        console.log('x + y :>> ', x + y);
    }
    const handleSumFromUser = () => {
        let x = +prompt("Enter number 1: ")
        let y = +prompt("Enter number 2: ")
        console.log('x + y :>> ', x + y);
    }
  return (
    <div className='py-5'>
      <div className="container">
        <div className="row">
            <div className="col">
                <h2 className="text-center">About</h2>
                <button className='btn btn-primary' onClick={handleConsole}>Click Me</button>
                <button className='btn btn-primary' onClick={() => {handleSum2Num(4,7)}}>Sum two number</button>
                <button className='btn btn-primary' onClick={handleSumFromUser}>handle Sum From User</button>

            </div>
        </div>
      </div>
    </div>
  )
}
