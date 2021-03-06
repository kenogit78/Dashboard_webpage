import styled from 'styled-components'
import {FaTimes} from "react-icons/fa";
import {Link as LinkS } from 'react-scroll'

export const SidebarContainer = styled.aside`
    position: fixed;
    z-index: 999;
    width:100%;
    height: 100%;
    background: #774DFF;
    color: #fff;
    display: grid;
    align-items: center;
    top: 0;
    left: 0;
    transition: 0.8s ease-in-out;
    opacity: ${({isOpen}) => (isOpen ? '100%' : '0')};
    left: ${({isOpen}) => (isOpen ? '0' : '-100%')};
`

 export const CloseIcon = styled(FaTimes)`
    color: #fff;

 `

 export const Icon = styled.div`
    position: absolute;
    top: 1.6em;
    right:1.4em;
    background: transparent;
    font-size: 2em;
    cursor: pointer;
    outline: none;
 `

 export const SidebarWrapper = styled.div`
    color: #fff;
 `

 export const SidebarMenu = styled.ul`
    display: grid;
    text-align: center;
    grid-template-columns : 1fr;
    grid-template-rows : repeat(7, 60px);
    text-align: center;

    @media screen and (max-width: 400px) {
        grid-template-rows : repeat(7, 50px);
    }
 `


 export const SidebarLink = styled(LinkS)`
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 1.2rem;
    text-decoration: none;
    list-style: none;
    transition: 0.2s ease-in-out;
    color: #fff;
    cursor: pointer;

    &:hover {
        color: #1597E5;
        transition: 0.2s ease-in-out;
    }
 `
