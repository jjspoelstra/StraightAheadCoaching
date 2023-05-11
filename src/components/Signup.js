import {useState} from 'react'
import Button from "./SignupComponents.js/Button"
import Input from "./SignupComponents.js/Input"

import { useContext } from 'react';
import { CourseContext } from '../CourseContext';


export default function Signup() {
    const [submitted, setSubmitted] = useState(false)
    const [formData, setFormData] = useState({})
    const { course, setCourse } = useContext(CourseContext)
    
    const handleInputChange = (event) => {
        const {name, value} = event.target
        setFormData((prevState) => ({
            ...prevState,
            [name]: value,
        }))
        
    }

    const handleSubmit = async (event) => {
        event.preventDefault(); // prevent form submission
        setSubmitted(true);
        console.log(formData)
        const response = await fetch('http://localhost:2121/api/send-email', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(formData)
        })
        const data = await response.json()
        console.log(data)
    }

    const handleCourseClick = (event) => {
        event.preventDefault();
        setCourse('paid');
        setSubmitted(false);
        console.log('Course set to:', course);
      };

    
      if (course === 'free'){
        if (submitted === false){
            return(
                <div className="flex min-h-full flex-col justify-center px-6 py-12 lg:px-8">
                    <form className="container" onSubmit={handleSubmit}>
                        <div className="sm:mx-auto sm:w-full sm:max-w-sm">
                            <h2 className="mt-5 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">Register for your Free Online Course!</h2>
                        </div>
                            
                            <div className="">
                                
                                <Input placeholder={'First Name'} name= 'firstName' onChange={handleInputChange}/>
                                <Input placeholder={'Last Name'} name='lastName' onChange={handleInputChange}/>
                                <Input placeholder={'Email@email.com'} name='email' onChange={handleInputChange}/>
                            </div>
                            <Button backgroundColor={'Blue'} text={'Sign Up'} type='submit'/>
                    </form>
                </div>
            )
        } else {
            return(
                <div className="flex min-h-full flex-col justify-center px-6 py-12 lg:px-8">
                    <div className="container" >
                        <div className="sm:mx-auto sm:w-full sm:max-w-sm">
                            <h2 className="mt-5 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">Thanks for signing up! A message was sent to your inbox</h2>
                        </div>
                            
                        
                            <div className='my-5'>
                                <h2 className='rounded-md appearance-none relative block w-full px-3 py-2  placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-purple-500 focus:border-purple-500 focus:z-10 sm:text-sm'>Video: <a href="https://www.youtube.com/watch?v=D_gWJ5siyTU">D.A.R.E. to De-Stress</a></h2>
                            </div> 
                                
                            <div className='my-5'>
                                <h2 className='rounded-md appearance-none relative block w-full px-3 py-2   placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-purple-500 focus:border-purple-500 focus:z-10 sm:text-sm'>Handout: <a href=""></a></h2>
                            </div> 
    
                            <div className='my-5'>
                                <h2 className='rounded-md appearance-none relative block w-full px-3 py-2   placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-purple-500 focus:border-purple-500 focus:z-10 sm:text-sm'>Other: <a href=""></a></h2>
                            </div> 
    
                       
                            <div onClick={handleCourseClick}>
                                <Button backgroundColor={'Blue'} text={'See our other offerings!'} />
                            </div>
                            
                    </div>
                </div>
                
            ) 
        } 
        
      } else {
        return(
            <div className="flex min-h-full flex-col justify-center px-6 py-12 lg:px-8">
                <form className="container" onSubmit={handleSubmit}>
                    <div className="sm:mx-auto sm:w-full sm:max-w-sm">
                        <h2 className="mt-5 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">Register for the paid course</h2>
                    </div>
                        
                        <div className="">
                            <Input placeholder={'First Name'} name= 'firstName' onChange={handleInputChange}/>
                            <Input placeholder={'Last Name'} name='lastName' onChange={handleInputChange}/>
                            <Input placeholder={'Email@email.com'} name='email' onChange={handleInputChange}/>
                        </div>
                        <Button backgroundColor={'Blue'} text={'Sign Up'} type='submit'/>
                </form>
            </div>
        )
      }

    
        
    } 







