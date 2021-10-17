import React from 'react'
import { 
    SidebarContainer, 
    CloseIcon, 
    SidebarWrapper, 
    SidebarLink, 
    SidebarMenu,
    SideBtnWrap,
    SidebarRoute } from './SidebarElements';
import { Icon } from './SidebarElements';

<<<<<<< HEAD
const Sidebar = ({isOpen, toggle}) => {
    return (
        <SidebarContainer isOpen={isOpen} onClick={toggle}>
            <Icon onClick={toggle}>
=======
const Sidebar = () => {
    return (
        <SidebarContainer>
            <Icon>
>>>>>>> 9a91ed2b618279e3082bbdf62d35b69e9fd62a29
                <CloseIcon />
            </Icon>
            <SidebarWrapper>
                <SidebarMenu>
<<<<<<< HEAD
                    <SidebarLink to ="about" onClick={toggle}>
                        About
                    </SidebarLink>
                    <SidebarLink to ="discover" onClick={toggle}>
                        Discover
                    </SidebarLink>
                    <SidebarLink to ="services" onClick={toggle}>
                        Services
                    </SidebarLink>
                    <SidebarLink to ="signup" onClick={toggle}>
=======
                    <SidebarLink to ="about">
                        About
                    </SidebarLink>
                    <SidebarLink to ="discover">
                        Discover
                    </SidebarLink>
                    <SidebarLink to ="services">
                        Services
                    </SidebarLink>
                    <SidebarLink to ="signup">
>>>>>>> 9a91ed2b618279e3082bbdf62d35b69e9fd62a29
                        Sign Up
                    </SidebarLink>
                </SidebarMenu>
                <SideBtnWrap>
                    <SidebarRoute to="/signin">
                        Sign In
                    </SidebarRoute>
                </SideBtnWrap>
            </SidebarWrapper>
        </SidebarContainer>
    )
}

export default Sidebar
