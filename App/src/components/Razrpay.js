import { getByDisplayValue } from '@testing-library/react';
import React from 'react';
import Swal from "sweetalert2";  
function loadscript(src)
{
    return new Promise((resolve=>{
   const script =document.createElement('script')
   script.src=src;
   script.onload=()=>{
       resolve(true)
   }
   script.onerror=()=>{
   resolve(false)
   }
   document.body.appendChild(script);
}))
}

function Razrpay() { 
   async function displayrazorpay(){
     const res =await loadscript('https://checkout.razorpay.com/v1/checkout.js')
     if(!res)
     {
         alert("Sorry razorpay is not responding are you online?")
         return 
     }
    // const data= await fetch('http://localhost:3000/razorpay', {method:'POST'}).then((t)=>t.json());
    // console.log(data);  
     const options = {
            key: "rzp_test_APOswlZCQxJr3W", // Enter the Key ID generated from the Dashboard
            amount: '500000', // Amount is in currency subunits. Default currency is INR. Hence, 50000 refers to 50000 paise
            currency:'INR',
            name: "Star Foods",
            description: "Test Transaction",
            image: "https://example.com/your_logo",
            //order_id: data.id,
            handler: function (response){
                Swal.fire({  
                    title: 'Success',  
                    type: 'success',  
                    icon:'success',
                    text: 'Your Payament is successful',  
                  });  
                alert(response.razorpay_payment_id);
                alert(response.razorpay_order_id);
                alert(response.razorpay_signature)
                alert("payment is successful");
            },
          
            prefill: {
                name: "Gaurav Kumar",
                email: "gaurav.kumar@example.com",
                contact: "9999999999"
            },
          };
         const  paymentObject = new window.Razorpay(options);
       paymentObject.open();

    }
    return (
        <div>
            <button onClick={displayrazorpay}>make payment</button>
        </div>
    );
}
export default Razrpay;
