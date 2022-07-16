import React from 'react';
import { Twitter , Instagram , Facebook  } from '@material-ui/icons';
import './WhoWeAre.css';


const WhoWeAre = () => {
  return (
    <div className="mt-2 who_we_are" >
        
        <div>

        <h1>من نحن</h1>
        <p>معهد قولدن كورس .. المقر الرئيسي في مدينة بريدة ويقدم برامجه ودوراته المعتمدة عن بعد اونلاين وحضوري في مقر المعهد وتحت اشراف وزارة التعليم و المؤسسة العامة للتدريب التقني والمهني</p>
    <div className="mt-1 text-center social_links">
        <Twitter />
        <Instagram />
        <Facebook />
    </div>

        </div>
       

    </div>
  )
}

export default WhoWeAre