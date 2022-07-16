import React from 'react';
import BankContact from '../components/BankContact';
import './ShipmentPage.css';

const ShipmentPage = () => {
  return (
    <div className='shipment_page' >
        <div className="app_container">
        <div className="text-center">
            <h1>خيارات الشحن</h1>
            <div className="mt-1"></div>
           
    <div className="mt-1"></div>
            <table>
                <thead>
                    <tr>
                    <th>خيارات الشحن</th>
                    <th>المدن التي يتم تغطيتها </th>
                    <th>تكلفة الشحن </th>
                    <th> الدفع عند الاستلام </th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                    <td>لا يحتاج توصيل</td>
                    <td> الرياض , الخبر , مدن اخرى </td>
                    <td>    SAR 00.00 </td>
                    <td>    لا يوجد </td>
                    </tr>
                   
                </tbody>
            </table>
            <div className="mt-1"></div>
       
        <div className="mt-3"></div>
        <h1>خيارات الدفع</h1>
            <div className="mt-1"></div>
           
       
            <div className="shipping_methods">
                <div>
                <img src="/images/bankTransfer.png" alt="" />
      
                            
                </div>
                <div>
                <img src="/images/mastercard-circle.png" alt="" />
                </div>

                <div>
                <img src="/images/visa-circle.png" alt="" />
                </div>

                <div>
                <img src="/images/apple_pay.svg" alt="" />
                </div>

                <div>
                <img  style={{ height: '20px' }} src="/images/mada-circle.png" alt="" />
                </div>
            </div>
            <div className="mt-5"></div>
        <h1> الحسابات البنكية </h1>

       

        </div>

        <div className="banks_info text-right mt-3">

        <BankContact bank_name={'مصرف الراجحي'}  />
        <BankContact bank_name={'مصرف الانماء'} />


        </div>
        </div>
        
    </div>
  )
}

export default ShipmentPage