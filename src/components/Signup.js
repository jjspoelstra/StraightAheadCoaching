import {useState} from 'react'
import Button from "./SignupComponents.js/Button"
import Input from "./SignupComponents.js/Input"
import { PayPalButtons, PayPalScriptProvider} from '@paypal/react-paypal-js'

//import { useContext } from 'react';
//import { CourseContext } from '../CourseContext';


export default function Signup() {
    const [submitted, setSubmitted] = useState(false)
    const [formData, setFormData] = useState({})
    const [success, setSuccess] = useState(false)
    const [errorMessage, setErrorMessage] = useState('')
    const [orderID, setOrderId] = useState(false)

    //this is creating an order for paypal
    const createOrder = (data, actions) => {
        return actions.order.create({
            purchase_units: [
                {
                    description: 'course',
                    amount: {
                        currency_code: 'USD',
                        value: 20
                    },
                },
            ],
            application_context: {
                shipping_preference: 'NO_SHIPPING'
            }
        })
        .then((orderID) => {
            setOrderId(orderID)
            return orderID
        })
    }
    
    //once the payment is approved, we set the payment success to true
    const onApprove = (data, actions) => {
        return actions.order.capture().then(function (details) {
            const {payer} = details
            setSuccess(true)
            console.log('payment accepted, email logged')
            sendData()
        })
    }

    //this appears if the payment does not go through
    const onError = (data, actions) => {
        setErrorMessage('An error occured with your payment')
    }

  
    //this keeps track of the form inputs and updates the formData state. 
    const handleInputChange = (event) => {
        const {name, value} = event.target
        setFormData((prevState) => ({
            ...prevState,
            [name]: value,
        }))
    }

    //this registers when the form is submitted - in order to show the payment screen. It also console logs the information we want to keep track of if the payment goes through. 
    const handleFormSubmit = async (event) => {
        event.preventDefault(); // prevent form submission
        setSubmitted(true);
        console.log(formData)
    }

    //this will keep track of the email and store it in our database. Will only be triggered if the payment has gone through successfully. 
    const sendData = async () => {
        const response = await fetch('http://localhost:2121/api/send-email', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(formData)
        });
        const data = await response.json();
        console.log(data);
    }

    //this is the form that appears if they have not submitted their information yet. 
    if (submitted === false){
        return( //want to add functionality to prevent button from being clicked if they haven't added their information//
            <div className="flex min-h-full flex-col justify-center px-6 py-12 lg:px-8">
                <form className="container-login" onSubmit={handleFormSubmit}>
                    <div className="sm:mx-auto sm:w-full sm:max-w-sm">
                        <h2 className="mt-5 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">Register for the paid course</h2>
                    </div>
                        
                        <div className="">
                            <Input placeholder={'First Name'} name= 'firstName' onChange={handleInputChange}/>
                            <Input placeholder={'Last Name'} name='lastName' onChange={handleInputChange}/>
                            <Input placeholder={'email@email.com'} name='email' onChange={handleInputChange}/>
                        </div>
                         
                            <Button backgroundColor={'steelBlue'} text={'Continue to Payment'} type='submit'/>  
                </form>
            </div>
        )
    } else if (submitted ===true && success != true){
        return(
            <div className="flex min-h-full flex-col justify-center px-6 py-12 lg:px-8">
                <form className="container-login" >
                    <div className="sm:mx-auto sm:w-full sm:max-w-sm">
                        <h2 className="mt-5 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">Order Summary:</h2>
                        <span>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Impedit, necessitatibus, quos quas rerum repudiandae delectus porro fugit sequi in ratione, iusto doloribus nihil eius veritatis? Voluptas assumenda iusto rerum aut?</span>
                            <br />
                        description
                        <br />
                        description
                    </div>
                            <PayPalScriptProvider 
                                    options={{
                                        'client-id': 
                                        'AYXdY5aZ-wkXQG_elptAZ11X1JtONxs557b4Iy4Z7ja6IdUcUJo2QsfgrJaqFm_ECk9rpXxrOTHFFSje'
                                    }}
                                >
                        
                                 <PayPalButtons 
                                    style={{layout:'horizontal'}} 
                                    createOrder={createOrder}  
                                    onApprove={onApprove}
                                    onError={onError}
                                    //onClick={}
                                />
                                </PayPalScriptProvider> 
                        
                        
                </form>
            </div>
        )
    } else {
        return(
            <div className="flex min-h-full flex-col justify-center px-6 py-12 lg:px-8">
                <form className="container-login" >
                    <div className="sm:mx-auto sm:w-full sm:max-w-sm">
                        <h2 className="mt-5 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">Thanks for your purchase!</h2>
                        <span>A message containing your items has been sent to your inbox.</span>
                            <br />
                        more
                        <br />
                        more
                    </div>
                            
                </form>
            </div>
        )
    }
        
     
        // return (
        //     <div className="flex min-h-full flex-col justify-center px-6 py-12 lg:px-8">
        //              <div className="container" >
        //                  <div className="sm:mx-auto sm:w-full sm:max-w-sm">
        //                      <h2 className="mt-5 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">Thanks for registering your interest! A message was sent to your inbox</h2>
        //                  </div>
                            
                        
                             
    
                       
        //                      <div className="sm:mx-auto sm:w-full sm:max-w-sm">
        //                         <PayPalScriptProvider 
        //                             options={{
        //                                 'client-id': 
        //                                 'AYXdY5aZ-wkXQG_elptAZ11X1JtONxs557b4Iy4Z7ja6IdUcUJo2QsfgrJaqFm_ECk9rpXxrOTHFFSje'
        //                             }}
        //                         >
                        
        //                          <PayPalButtons 
        //                             style={{layout:'vertical'}} 
        //                             createOrder={createOrder}  
        //                             onApprove={onApprove}
        //                             onError={onError}
        //                             onClick={}
        //                         />
        //                         </PayPalScriptProvider> 
        //                      </div>
                            
        //             </div>
        //          </div>
        // )
    
        
}

    
        
    // const handleCourseClick = (event) => {
    //     event.preventDefault();
    //     setCourse('paid');
    //     setSubmitted(false);
    //     console.log('Course set to:', course);
    //   };

    // this is not currently used


    //   if (course === 'free'){
    //     if (submitted === false){
    //         return(
    //             <div className="flex min-h-full flex-col justify-center px-6 py-12 lg:px-8">
    //                 <form className="container" onSubmit={handleSubmit}>
    //                     <div className="sm:mx-auto sm:w-full sm:max-w-sm">
    //                         <h2 className="mt-5 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">Register for your Free Online Course!</h2>
    //                     </div>
                            
    //                         <div className="">
                                
    //                             <Input placeholder={'First Name'} name= 'firstName' onChange={handleInputChange}/>
    //                             <Input placeholder={'Last Name'} name='lastName' onChange={handleInputChange}/>
    //                             <Input placeholder={'Email@email.com'} name='email' onChange={handleInputChange}/>
    //                         </div>
    //                         <Button backgroundColor={'steelBlue'} text={'Sign Up'} type='submit'/>
    //                 </form>
    //             </div>
    //         )
    //     } else {
    //         return(
    //             <div className="flex min-h-full flex-col justify-center px-6 py-12 lg:px-8">
    //                 <div className="container" >
    //                     <div className="sm:mx-auto sm:w-full sm:max-w-sm">
    //                         <h2 className="mt-5 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">Thanks for signing up! A message was sent to your inbox</h2>
    //                     </div>
                            
                        
    //                         <div className='my-5'>
    //                             <h2 className='rounded-md appearance-none relative block w-full px-3 py-2  placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-purple-500 focus:border-purple-500 focus:z-10 sm:text-sm '>Video: <a class = 'link link-underline link-underline-black' href="https://www.youtube.com/watch?v=D_gWJ5siyTU">D.A.R.E. to De-Stress</a></h2>
    //                         </div> 
                                
    //                         <div className='my-5'>
    //                             <h2 className='rounded-md appearance-none relative block w-full px-3 py-2   placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-purple-500 focus:border-purple-500 focus:z-10 sm:text-sm'>Handout: <a class = 'link link-underline link-underline-black' href=""></a></h2>
    //                         </div> 
    
    //                         <div className='my-5'>
    //                             <h2 className='rounded-md appearance-none relative block w-full px-3 py-2   placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-purple-500 focus:border-purple-500 focus:z-10 sm:text-sm'>Other: <a class = 'link link-underline link-underline-black' href=""></a></h2>
    //                         </div> 
    
                       
    //                         <div onClick={handleCourseClick}>
    //                             <Button backgroundColor={'steelBlue'} text={'See our other offerings!'} />
    //                         </div>
                            
    //                 </div>
    //             </div>
                
    //         ) 
    //     } 
        
    //   } else {







