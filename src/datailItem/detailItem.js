import React from 'react'

const DetailedItem = ({detailItemData}) =>{
    const streetAddress =detailItemData&&detailItemData.address? detailItemData.address.streetAddress : null;
   const addressCity =detailItemData&&detailItemData.address? detailItemData.address.city : null;
   const state =detailItemData&&detailItemData.address? detailItemData.address.state : null;
   const zip =detailItemData&&detailItemData.address? detailItemData.address.zip : null;




    return(
        <div className="detail">
           <div>id: <b> {detailItemData.id}</b>   </div>  
            <div>firstName:<b>{detailItemData.firstName}</b> </div>
            <div>lastName:<b>{detailItemData.lastName}</b> </div>
            <div>email:<b>{detailItemData.email}</b> </div>
            <div>phone:<b>{detailItemData.phone}</b> </div>
            <div>streetAddress:<b>{streetAddress}</b> </div>
            <div>city:<b>{addressCity}</b> </div>
            <div>state:<b>{state}</b> </div>
            <div>zip:<b>{zip}</b> </div>
            <div>description:<b>{detailItemData.description}</b> </div>
            {/* lastName: 'corson',
            email: '',
            phone: '',
            address: {
            streetAddress: '7903 Vestibulum Ln', 
            city: 'Cuyahoga Falls',
            state: 'WA',
            zip: '75892'} */}
        </div>
    )
}

export default DetailedItem