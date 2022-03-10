import React, {useState} from 'react'
import ArrowUp from '../svg/ArrowUp'
import ArrowDown from '../svg/ArrowDown'

const Table = ({sortData, contactData, directionSort, detailRow ,firstBlockRow}) => {
  
  const [fieldData, setFieldData] = useState('');

  const Arrow = () => {
    return (
      directionSort? <ArrowDown/> : <ArrowUp/>
    )
  }

 const fieldSortData = (field) => {
   sortData(field)
   setFieldData(field)
    
 }

    return (

        <div className="table">
        <thead>
          <tr>
            <th >id</th>
            <th onClick={()=>{fieldSortData('firstName')}}>
              {fieldData==='firstName'?<Arrow/>:null}
              FirstName</th>
            <th onClick={()=>{fieldSortData('lastName')}}> 
            {fieldData==='lastName'?<Arrow/>:null}
            LastName </th>
            <th onClick={()=>{fieldSortData('email')}}>
            {fieldData==='email'?<Arrow/>:null}
              email</th>
            <th onClick={()=>{fieldSortData('phone')}}>
            {fieldData==='phone'?<Arrow/>:null}
              phone</th>
          </tr>
        </thead>
        <tbody>
           
               {contactData.map(
              
                 item=>(
                <tr key={item.id + item.email} onClick={()=>detailRow(item)}>
                   <td>{ 1+ firstBlockRow++ }</td>
                   <td>{item.firstName}</td>
                   <td>{item.lastName}</td>
                   <td>{item.email}</td>
                   <td>{item.phone}</td>
                </tr>
                
               ))}
           
        </tbody>
      </div>
    )
}

export default Table