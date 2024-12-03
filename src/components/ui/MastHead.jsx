import React from 'react'

const MastHead = ({ imageUrl, myName }) => {
  return (
    <div
     style={{
        height: '30vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'start',
        flexDirection: 'column'
     }}
    >

        <img src={imageUrl} alt={imageUrl} style={{ width: '10rem' }}/>
        
        <div style={{ display: 'flex' }}>
            <i class="fa-solid fa-user-ninja" style={{ marginRight: '1rem' }}></i>
            <h4 style={{ fontWeight: '300' }}> {myName}</h4>
        </div>

    </div>
  )
}

export default MastHead