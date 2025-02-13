import React, { use, useState } from 'react'
import { assets } from '../assets/frontend/assets'

const MyProfile = () => {

  const [userData, setUserData] = useState({
    name: "Yaman Bin Bashar",
    image: assets.profile_pic,
    email: 'yamanabulaban@gmail.com',
    phone: '0 7 8693 2156',
    address: {
      line1: "123 Khalda",
      line2: "Abd Rabbo Abu Hudayb str."
    },
    gender: 'Male',
    dob: '2006-03-10',
  })

  const [isEdit, setIsEdit] = useState(false)

  return (
    <div>
      <img src={userData.image} alt="" />


      {
        isEdit
          ? <input type='text' value={userData.name} onChange={e => setUserData(prev => ({ ...prev, name: e.target.value }))} />
          : <p>{userData.name}</p>
      }

      <hr />
      <div>
        <p>CONTACT INFORMATION</p>
        <div>
          <p>Email: </p>
          <p>{userData.email}</p>
          <p>Phone: </p>
          {
            isEdit
              ? <input type='text' value={userData.phone} onChange={e => setUserData(prev => ({ ...prev, phone: e.target.value }))} />
              : <p>{userData.phone}</p>
          }
          <p>Address: </p>
          {
            isEdit
              ? <p>
                <input type="text" onChange={e => setUserData(prev => ({ ...prev, address: { ...prev.address, line1: e.target.value } }))} value={userData.address.line1} />
                <br />
                <input type="text" onChange={e => setUserData(prev => ({ ...prev, address: { ...prev.address, line2: e.target.value } }))} value={userData.address.line2} />
              </p>
              : <p>
                {userData.address.line1}
                <br />
                {userData.address.line2}
              </p>
          }
        </div>
      </div>
      <div>
        <p>BASIC INFORMATION</p>
        <div>
          <p>Gender</p>
          {
            isEdit
              ? <select onChange={(e) => setUserData(prev => ({ ...prev, gender: e.target.value }))} value={userData.gender}>
                <option value="Male">Male</option>
                <option value="Female"> Female</option>
              </select>
              : <p>{userData.gender}</p>
          }
          <p>Date of Birth</p>
          {
            isEdit 
            ? <input type='date' onChange={(e) => setUserData(prev => ({ ...prev, dob: e.target.value }))} value={userData.dob}/>
            : <p>{userData.dob}</p>
          }
        </div>
      </div>
      <div>
        {
          isEdit
          ? <button onClick={()=>setIsEdit(false)}>Apply</button>
          : <button onClick={()=>setIsEdit(true)}>Edit</button>
        }
      </div>
    </div>
  )
}

export default MyProfile