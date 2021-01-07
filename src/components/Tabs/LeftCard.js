/** 
 * @author:Sandeep Kumar Jena
 * */  

import React from 'react';
//import Block from '../Block/Bolock';
import './Home1.css';
import ListItem from './Listitem/listItem';
import Subnav from './subnav/subnav';
import Tab from './Tab/Tab';
import {triggerData,actionData,loggersData} from '../Data/data';
import Block from './Block/Bolock';

class LeftCard extends React.Component{
    
    constructor(props){
        super(props)
        this.state={
            selected:'triggers'
        }
    }
    setSelected=(tab)=>{
       this.setState({selected:tab})
    }

     renderTriggersListElement=triggerData.map((element,index)=>{
        return(
           <ListItem  key={index}
           itemName={element.itemName}
           itemImgUrl={element.itemImgUrl}
           itemDescription={element.itemDescription}/>         
        )
    });

    renderActionListElement=actionData.map((element,index)=>{
        return(
           <ListItem  key={index}
           itemName={element.itemName}
           itemImgUrl={element.itemImgUrl}
           itemDescription={element.itemDescription}/>         
        )
    });
    renderLoggersListElement=loggersData.map((element,index)=>{
        return(
           <ListItem  key={index}
           itemName={element.itemName}
           itemImgUrl={element.itemImgUrl}
           itemDescription={element.itemDescription}/>         
        )
    });

    render(){
     return(
       <React.Fragment>
           <div className='leftcard'>
               <Block />
            <Subnav tab={['triggers','actions','loggers']}
                    selected={this.state.selected} 
                    setSelected={this.setSelected}  >
          
          <Tab isSelected={this.state.selected==='triggers'}>
             {this.renderTriggersListElement}
            
          </Tab>
          <Tab isSelected={this.state.selected==='actions'}>
               {this.renderActionListElement}
            
          </Tab>
          <Tab isSelected={this.state.selected==='loggers'}>
                {this.renderLoggersListElement}
            
          </Tab>
          </Subnav>
           </div>
       </React.Fragment>
     )   
    }
}
export default LeftCard;
