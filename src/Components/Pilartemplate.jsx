import React from 'react';
import "../Styles/Pilartemplate.css"
const Pilartemplate = ({Icon,Header,Text}) => {
  return (
    <div className='pilar-card'>
        <div className='icon-title'>
        {Icon}
        <h6 className='icon-hd'>{Header}</h6>
        </div>
     
      <span className='pillar-txt'>{Text}</span>
    </div>
  );
}

export default Pilartemplate;
