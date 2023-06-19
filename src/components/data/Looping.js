
import React from "react";
import LocationOnIcon from '@mui/icons-material/LocationOn';


const Looping = ({ searchItem }) => {
    return (
        <div>
            {
                searchItem.map((ele) => {
                    return (
                        <div style={{ marginLeft: 10}}>
                            <span style={{marginRight: 20}}><LocationOnIcon /></span>
                            <span>{ele.place}</span>
                        </div>
                    )
                })
            }
        </div>
    )
};

export default Looping;