import React from 'react'
import {
    SidebarContainer,
    Icon,
    CloseIcon,
    SidebarWrapper,
    SidebarLink,
    SidebarMenu

} from './SideStyles';

const SideDashboard = ({ toggle, isOpen }) => {
    return (
        <SidebarContainer isOpen={isOpen} onClick={toggle}>
            <Icon onClick={toggle}>
                <CloseIcon />
            </Icon>

            <SidebarWrapper>
                <SidebarMenu>
                    <SidebarLink  to='work' onClick={toggle}>
                        Dashboard
                    </SidebarLink>
                    <SidebarLink to='resume' onClick={toggle}>
                        Profile
                    </SidebarLink>
                    <SidebarLink to='about' onClick={toggle}>
                        Utilities
                    </SidebarLink>
                    <SidebarLink to='contact' onClick={toggle}>
                        Settings
                    </SidebarLink>
                    <SidebarLink to='contact' onClick={toggle}>
                        Messages
                    </SidebarLink>
                    <SidebarLink to='contact' onClick={toggle}>
                        Analytics
                    </SidebarLink>
                    <SidebarLink to='contact' onClick={toggle}>
                        Integration
                    </SidebarLink>

                </SidebarMenu>
             </SidebarWrapper>

        </SidebarContainer>
    )
}

export default SideDashboard;
