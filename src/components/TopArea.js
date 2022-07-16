import React , {useState} from 'react';
import './TopArea.css';
import {CloseOutlined} from '@material-ui/icons';

const TopArea = () => {
  const [showTop , setShowTop] = useState(true);
  var navbarElm = document.querySelector('.navbar--flex-sp');
  const handleShowen = () => {
    setShowTop(!showTop);
    document.querySelector('.navbar--flex-sp').classList.add('active')
    navbarElm.classList.add('showen');
    
    
  }

  return (
    <div>
  {showTop && (
     <>
      <div className="top_area" >
      <h5>اهلا بك في معهد قولدن كورس للغات والحاسب الالي والتدريب</h5>
      <div className="closing_div">
      <CloseOutlined onClick={ handleShowen} />
      </div>
    
  </div>
     </>
    )}
    </div>
  
    
  )
}

export default TopArea