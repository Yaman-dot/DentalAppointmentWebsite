import React, { useContext, useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { AppContext } from '../context/AppContext'
import { assets } from '../assets/frontend/assets'

const Appointment = () => {

  const {docId} = useParams()
  const {doctors, currencySymbol} = useContext(AppContext)

  const [docInfo, setDocInfo] = useState(null)
  const [docSlots, setDocSlots] = useState([])
  const [slotIndex, setSlotIndex] = useState(0)
  const [slotTime, setSlotTime] = useState('')


  const fetchDocInfo = async () => {
    const docInfo = doctors.find(doc => doc._id == docId)
    setDocInfo(docInfo)

  }

  const getAvailableSlots = async () => {
    setDocSlots([])
    // we are going to get the current date here
    let today = new Date()

    for(let i = 0; i < 7; i++)
    {
      // we are going to get the date with index
      let currentDate = new Date(today)
      currentDate.setDate(today.getDay() + i)
      // we are going to set the end time of the date with the index
      let endTime = new Date()
      endTime.setDate(today.getDate()+1)
      endTime.setHours(21,0,0,0)

      //We are going to set the hours here
      if(today.getDate === currentDate.getDate())
      {
        currentDate.setHours(currentDate.getHours()>10 ? currentDate.getHours() + 1  : 10)
        currentDate.setMinutes(currentDate.getMinutes() > 30 ? 30: 0)
      }
      else
      {
        currentDate.setHours(10)
        currentDate.setMinutes(0)
      }

      let timeSlots = []
      while(currentDate < endTime)
      {
        let formattedTime = currentDate.toLocaleTimeString([], {hour: '2-digit', minute:'2-digit'})

        //We are going to add the slots to the timeslots array above
        timeSlots.push({
          datetime: new Date(currentDate),
          time: formattedTime
        })

        //Increase time by 30 minutes.
        currentDate.setMinutes(currentDate.getMinutes()  +30)
      }

      setDocSlots(prev => ([...prev,timeSlots]))
    }

  }

  useEffect(() => {
    fetchDocInfo()
  },[doctors, docId])

  useEffect(()=>{
    getAvailableSlots()
  },[docInfo])
  return docInfo && (
    <div>
      {/* ---------- Doctor Details ----------------*/}
      <div className='flex flex-col sm:flex-row gap-4'>
        <div>
          <img className = 'bg-primary w-full sm:max-w-72 rounded-lg'src={docInfo.image} alt="" />
        </div>
        <div className='flex-1 border border-gray-400 rounded-lg p-8 py-7 bg-white mx-2 sm:mx-0 mt-[-80px] sm:mt-0'>
          {/* -----------Doctor info----------------*/}
          <p className='flex items-center gap-2 text-2xl font-medium text-gray-900'>
            {docInfo.name} 
            <img className='w-5' src={assets.verified_icon} alt="" />
          </p>
          <div className='flex items-center gap-2 text-sm mt-1 text-gray-600'>
            <p>
              {docInfo.degree} - {docInfo.speciality}</p>
              <button className='py-0.5 px-2 border text-xs rounded-md'>{docInfo.experience}</button>
          </div>
          {/*------Doctor About ---------- */}
          <div>
            <p className='flex items-center gap-1 text-sm font-medium text-gray-900 mt-3'>About <img src={assets.info_icon} alt="" />
            </p>
            <p className='text-sm text-gray-500 max-w-[700px] mt-1'>{docInfo.about}</p>
          </div>
          <p className='text-gray-500 font-medium mt-4'>
            Appointment fee: <span className='text-gray-600'>{currencySymbol}{docInfo.fees}</span>
          </p>
        </div>
      </div>
    </div>
  )
}

export default Appointment