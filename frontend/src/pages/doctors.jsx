import React, { useContext, useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import {AppContext} from '../context/AppContext'
const Doctors = () => {

  const {speciality} = useParams()
  const [filterDoc,setFilterDoc] = useState([])
  const navigate = useNavigate()

  const {doctors} = useContext(AppContext)
  const applyFilter = () =>
  {
    if(speciality)
    {
      setFilterDoc(doctors.filter(doc => doc.speciality === speciality))
    }else{
      setFilterDoc(doctors)
    }
  }

  useEffect(()=>{
    applyFilter()
  },[doctors, speciality])
  
  return (
    <div>
        <p className='text-gray-600'>Browse through the specialists doctors</p>
        <div className='flex flex-col sm:flex-row items-start gap-5 mt-5'>
          <div className='flex flex-col gap-4 text-sm text-gray-600'>
            <p onClick={()=> speciality === '' ? navigate('/') : navigate('/doctors/')} className={`w-[94vw] sm:w-auto pl-3 py-1.5 pr-16 border border-gray-300 rounded transition-all cursor-pointer ${speciality === "" ? "bg-indigo-100 text-black" : ""}`}>All Doctors</p>
            <p onClick={()=> speciality === 'Orthodontist' ? navigate('/doctors/Orthodontist') : navigate('/doctors/Orthodontist')} className={`w-[94vw] sm:w-auto pl-3 py-1.5 pr-16 border border-gray-300 rounded transition-all cursor-pointer ${speciality === "Orthodontist" ? "bg-indigo-100 text-black" : ""}`}>Orthodontist</p>
            <p onClick={()=> speciality === 'Endodontist' ? navigate('/doctors/Endodontist') : navigate('/doctors/Endodontist')} className={`w-[94vw] sm:w-auto pl-3 py-1.5 pr-16 border border-gray-300 rounded transition-all cursor-pointer ${speciality === "Endodontist" ? "bg-indigo-100 text-black" : ""}`}>Endodontist</p>
            <p onClick={()=> speciality === 'Periodontist' ? navigate('/doctors/Periodontist') : navigate('/doctors/Periodontist')} className={`w-[94vw] sm:w-auto pl-3 py-1.5 pr-16 border border-gray-300 rounded transition-all cursor-pointer ${speciality === "Periodontist" ? "bg-indigo-100 text-black" : ""}`}>Periodontist</p>
            <p onClick={()=> speciality === 'Maxillofacial' ? navigate('/doctors/Maxillofacial') : navigate('/doctors/Maxillofacial')} className={`w-[94vw] sm:w-auto pl-3 py-1.5 pr-16 border border-gray-300 rounded transition-all cursor-pointer ${speciality === "Maxillofacial" ? "bg-indigo-100 text-black" : ""}`}>Maxillofacial</p>
            <p onClick={()=> speciality === 'Conservative' ? navigate('/doctors/Conservative') : navigate('/doctors/Conservative')} className={`w-[94vw] sm:w-auto pl-3 py-1.5 pr-16 border border-gray-300 rounded transition-all cursor-pointer ${speciality === "Conservative" ? "bg-indigo-100 text-black" : ""}`}>Conservative</p>
            <p onClick={()=> speciality === 'Prosthodontist' ? navigate('/doctors/Prosthodontist') : navigate('/doctors/Prosthodontist')} className={`w-[94vw] sm:w-auto pl-3 py-1.5 pr-16 border border-gray-300 rounded transition-all cursor-pointer ${speciality === "Prosthodontist" ? "bg-indigo-100 text-black" : ""}`}>Prosthodontist</p>
          </div>
          <div className='w-full grid grid-cols-auto gap-4 gapy-6'>
            {
              filterDoc.map((item, index)=>(
                <div onClick={()=>navigate(`/appointment/${item._id}`)} className='border border-green-200 rounded-xl overflow-hidden cursor-pointer hover:translate-y-[-10px] transition-all duration-50' key={index}>
                    <img className='bg-green-50' src={item.image} alt="" />
                    <div className='p-4'>
                        <div className='flex items-center gap-2 text-sm text-center text-green-500'>
                            <p className='w-2 h-2 bg-green-500 rounded-full'></p><p>Available</p>
                        </div>
                        <p className='text-gray-900 text-lg font-medium'>{item.name}</p>
                        <p className='text-gray-600 text-sm'>{item.speciality}</p>
                    </div>
                </div>
            ))
            }
          </div>
        </div>
    </div>
  )
}

export default Doctors