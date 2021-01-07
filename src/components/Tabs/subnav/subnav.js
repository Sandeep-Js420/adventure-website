import React from 'react';
import './subnav.css'

const Subnav=(props)=>{
   
        return (
            <React.Fragment>
                <div className='subnav'>
                {
                    props.tab.map((tab)=>{
                        const active=(tab === props.selected ? 'navactive':'navdisabled');
                       
                      return (
                          <div id={tab} className={active+' '+'side' }onClick={()=>{props.setSelected(tab)}}>{tab}</div>
                      )  
                   
                    })
                }
                </div>
                {props.children}
            </React.Fragment>
            
        )
    }

export default Subnav;