import React , {useState} from 'react'
import {ArrowDropDownOutlined } from '@material-ui/icons';
import './BankContact.css';


const BankContact = ( {bank_name} ) => {
    const [infoShow , setInfoShow] = useState(false);
  return (
    <div className="panel_bank">

    <h3> {bank_name} <ArrowDropDownOutlined onClick={() => setInfoShow(!infoShow) }  />  </h3>
    {infoShow && (


<div className="panel_info">
<table>
<tr>
<td><p className='para_table' >مركز الدورة الدهبية للغات</p> </td>
<th> <p className='para_table' >اسم المحول له</p> </th>

</tr>

<tr>
<td>  <p className="para_table">663608010095899</p>   </td>
<th> <p className="para_table">رقم الحساب</p>	 </th>

</tr>
<tr>
<td> 	<p className="para_table">SA1780000663608010095899</p>  </td>
<th>  <p className="para_table">رقم الآيبان</p>	</th>

</tr>
</table>
</div>


    )}

    </div>
  )
}

export default BankContact