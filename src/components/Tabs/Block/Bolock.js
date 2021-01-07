import React from 'react';
import './block.css';
const Block=()=>{
    return (
        <React.Fragment>
           <div id="closecard">
            <img src="assets/closeleft.svg"  alt='search'/>
        </div>
        <p id="header">Blocks</p>
        <div id="search">
            <img src="assets/search.svg"  alt='search'/>
            <input type="text" placeholder="Search blocks" />
        </div>       
     </React.Fragment>
    )


}
export default Block;