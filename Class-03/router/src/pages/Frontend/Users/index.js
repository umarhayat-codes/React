import { Button, Image } from 'antd'
import Paragraph from 'antd/es/typography/Paragraph'
import React, { useCallback, useEffect, useState } from 'react'


export default function Users() {
  const [users,setUsers] = useState([])
  const [limit,setLimit] = useState(5)

  const fetchProduct = useCallback(() => {
    console.log('limit :>> ', limit);
    fetch(`https://fakestoreapi.com/products?limits=${limit}`)
    .then(res => res.json())
    .then(data => setUsers(data))
    .catch(error => console.error(error))
    .finally(()=> {

    })
  },[limit])
  useEffect(() => {fetchProduct()}, [fetchProduct])
  return (
    <>
     <div className="container">
      <div className="row">
        <div className="col">
          <h2 className='text-center'>Table</h2>
          <br />

    <table class="table middle-align">
      <thead>
        <tr>
          <th>#</th>
          <th>Image</th>
          <th>Price</th>
          <th>Title</th>
          <th>Description</th>
          <th>Category</th>
        </tr>
      </thead>
      <tbody>
          {users.map((user,i) => {
            let {id,image,title,price,category,description} = user
              return <tr key={i}> 
              <th >{id} </th>
              {/* <th ><img src={image} alt={title} style={{width : 48, height : 48}} /> </th> */}
              <td ><Image src={image} alt={title} style={{width : 48, height : 48}} /> </td>
              <td>{price}</td>
              <td>{title}</td>
              <td> {<Paragraph ellipsis={{expandable : true, symbol : "Read more", rows : 2}} >{description} </Paragraph>} </td>
              <td>{category}</td>
            </tr>
          })}

        
        
      </tbody>
    </table>
        <div className="text-center mt-3">

              <Button type='primary' onClick={() => {setLimit(limit => limit + 5)}}>Add User</Button>
        </div> 
        </div>
      </div>
     </div> 
    </>
  )
}
