import React from 'react';
import './listItem.css';
const ListItem=({itemName,itemImgUrl,itemDescription})=>{
    return(
        <div className="blockelem create-flowy noselect">
        <input type="hidden" name='blockelemtype' className="blockelemtype" value="4" />
        <div className="grabme">
            <img src="assets/grabme.svg" alt='' />
        </div>
        <div className="blockin">
            <div className="blockico">
                <span></span>
                <img src={itemImgUrl}  alt=''/>
            </div>
            <div className="blocktext">
                <p className="blocktitle"> {itemName}</p>
                <p className="blockdesc">{itemDescription}</p>
            </div>
        </div>
    </div>

    )
}
export default ListItem