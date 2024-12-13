import React from 'react';
import Button from '../../../components/Button';
export default function Home() {
  return (
      <main>
        <div className="container py-4">
            <div className="row">
                <div className="col">
                    <h2 style={{textAlign : "center"}}>Home</h2>
                <div className="d-flex justify-content-between mt-3">
                  <Button type = "primary" text = "Primary" size = "sm" />
                  <Button type = "secondary" text = "secondary" size = "lg" />
                  <Button type = "success" text = "success" />
                  <Button type = "danger" />
                  <Button text = "Primary"/>
                  <Button type = "warning" text = "Primary" />
                  {/* <button className="btn btn-primary">This is a button</button>
                  <button className="btn btn-seconary">This is a button</button>
                  <button className="btn btn-success">This is a button</button>
                  <button className="btn btn-danger">This is a button</button>
                  <button className="btn btn-info">This is a button</button>
                  <button className="btn btn-warning">This is a button</button> */}
                </div>
                </div>
            </div>
        </div>
      </main>
  )
}
