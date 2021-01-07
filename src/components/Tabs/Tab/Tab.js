import React from 'react';

const Tab=(props)=>{
        if(props.isSelected){
        return(
          <div className='blocklist'>
              {props.children}
          </div>
        )
    }
    return null;
    }

export default Tab;