import React from 'react';
import { Box, styled, Button, Menu, MenuItem } from '@mui/material';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';


const Btn = styled(Button)`
      font-size: 16px;
      font-weight: 500;
      text-transform: capitalize;
      margin-left: 22px;
      color: #fff;
     
`;

const MenuBtn = styled(MenuItem)`
      text-transform: uppercase;
      color: #000;
      background: #fff;

      &:hover{
          background: #5C5C5C;
          color: #fff;
      }
`;

const Category = () => {
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
            >
                Category
            </Btn>

            <Menu
                id="basic-menu"
                anchorEl={anchorEl}
                open={open}
                onClose={handleClose}
                MenuListProps={{
                    'aria-labelledby': 'basic-button',
                    style: { background: '#00182c', color: '#fff' }
                }}
            >
                <MenuBtn onClick={handleClose}>Property / Real Estate</MenuBtn>
                <MenuBtn onClick={handleClose}>Matrimonial</MenuBtn>
                <MenuBtn onClick={handleClose}>Education</MenuBtn>
                <MenuBtn onClick={handleClose}>Recruitment / Vacancy</MenuBtn>
                <MenuBtn onClick={handleClose}>Personal</MenuBtn>
                <MenuBtn onClick={handleClose}>Business</MenuBtn>
                <MenuBtn onClick={handleClose}>Shopping</MenuBtn>
                <MenuBtn onClick={handleClose}>Vehicles</MenuBtn>
                <MenuBtn onClick={handleClose}>Service</MenuBtn>
                <MenuBtn onClick={handleClose}>Travel</MenuBtn>
            </Menu>

        </Box>
    )
};

export default Category;