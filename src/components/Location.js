import React, { useState } from 'react';

import { Box, styled, Button, Menu, TextField } from '@mui/material';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import Looping from './data/Looping.js';

import { LocationPlace } from './data/dataContainer';


const Btn = styled(Button)`
      font-size: 16px;
      font-weight: 500;
      text-transform: capitalize;
      margin-left: 22px;
      color: #fff;
`;


const Text = styled(TextField)`
      margin: 0px 5px;
`;



const Location = () => {
    const [location, setLocation] = useState('');

    const searchItem = LocationPlace.filter((item) => {
        if (item.place.toLowerCase().includes(location)) {
            return item;
        }

        else if (location === '') {
            return item;
        }
    });


    const [anchorEl, setAnchorEl] = React.useState(null);
    const open = Boolean(anchorEl);
    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };

    return (
        <Box>

            <Btn
                id="basic-button"
                aria-controls={open ? 'basic-menu' : undefined}
                aria-haspopup="true"
                aria-expanded={open ? 'true' : undefined}
                onClick={handleClick}
                endIcon={<KeyboardArrowDownIcon />}
                variant='text'
            >
                Location
            </Btn>

            <Menu
                id="basic-menu"
                anchorEl={anchorEl}
                open={open}
                onClose={handleClose}
                MenuListProps={{
                    'aria-labelledby': 'basic-button',
                    style: { background: '#fff', color: '#000', overflow: 'scroll', height: '50vh', width: '200px'  }
                }}
            >

                <Text id="outlined-search" label="Search field" type="search" size='small' onChange={(e) => setLocation(e.target.value)} />

                <Looping searchItem={searchItem} />

            </Menu>

        </Box>
    )
};

export default Location;