import { useDispatch, useSelector } from "react-redux"
import { getuserProfile } from "../../features/getprofileActions"
import { useEffect } from "react"
import { useForm } from 'react-hook-form'
import { useState } from "react"
import Spinner from "../../components/Spinner"
import {modifyuserProfile} from '../../features/modifyprofileActions'

export default function UserHeader() {
    const dispatch = useDispatch()
    const {userToken,userProfile,loading} = useSelector((state) => state.auth)
    
    useEffect(() => {
        userToken && dispatch(getuserProfile(userToken))
    },[userToken,dispatch])

    const { register, handleSubmit } = useForm()
    const submitForm = (data) => {
        const formatedData = {
            'userToken' : userToken,
            'firstName': data.firstName,
            'lastName' :data.lastName
        }
        dispatch(modifyuserProfile(formatedData))
        setIsEditing(false)
    }
    const [isEditing,setIsEditing] = useState(false)


    return (

        isEditing ? 
        <div className="header">
            <form className='edit-form' onSubmit={handleSubmit(submitForm)}>
                <div className='input-wrapper'>
                    <input
                        type='firstName'
                        className='editing-input'
                        {...register('firstName')}
                        placeholder={userProfile.firstName}
                        required
                    />
                    <input
                        type='lastName'
                        className='editing-input'
                        {...register('lastName')}
                        placeholder={userProfile.lastName}
                        required
                    />
                </div>
                <button type='submit' className='editing-button' disabled={loading}>
                    {loading ? <Spinner /> : 'Save'}
                </button>
                <button type='cancel' className='editing-button' onClick={() => setIsEditing(false)}>
                    Cancel
                </button>
            </form>
        </div>
        :
        <div className="header">
            <h1>Welcome back<br />
                {userProfile.firstName} {userProfile.lastName}
            </h1>
            <button className="edit-button" onClick={() => setIsEditing(true)}>
                Edit Name
            </button>
        </div>
    
    )
}