import React, { useState } from 'react'
import { createActivityByAdmim } from '../services/Api';
import { useDispatch, useSelector } from 'react-redux';
export default function AdminPannel() {
    const dispatch = useDispatch();
    const data = useSelector(state => state.user.value)
    console.log(data, "data");
    
    const [Title, setTitle] = useState('');
    const handleChanges = (e) => {
        setTitle(e.target.value)
    }
    const AddActivity = async () => {
        try {
            const activity = await createActivityByAdmim({Title , role:"admin",})
            console.log(activity);
            
            alert(activity.msg)
        } catch (error) {
            console.log("admin pannel create activity---------------------------------------------" ,error )
            
        }
    }
    return (
        <div className='main w-[100%] h-[500px] bg-[#528ce2] flex flex-col justify-center items-center  gap-[20px]'>
            <input type="text" className='bg-[white] w-[250px]' value={Title} onChange={handleChanges} placeholder='Enter Title Here'  />
            <button className='bg-[red] w-[200px] rounded-full text-[white] px-[39px] py-[13px]' onClick={AddActivity}>Add Activities</button>
        </div>
    )
}
