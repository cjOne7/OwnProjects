// import React from 'react';
// import './navbar.css';
//
// const NavigationBar = () => {
//     const navbarId = 'navbar';
//     const showResponsiveNavItems = () => {
//         const navbar = document.getElementById(navbarId);
//         console.log(navbar.className)
//         if (navbar.className === 'navbar-list-items') {
//             navbar.className += ' responsive';
//         } else {
//             navbar.className = 'navbar-list-items';
//         }
//     };
//     return (
//         <nav className={'navbar-container'} role={"navigation"}>
//             <ul className={'navbar-list-items'} id={navbarId}>
//                 <div>
//                     <a href="#home" className={'navbar-header'}>Home</a>
//                 </div>
//                 <div>
//                     <li className={'list-element'}>
//                         <a className={'navbar-link'} href="#mmorpg">MMORPG</a>
//                     </li>
//                 </div>
//                 <div>
//                     <li className={'list-element'}>
//                         <a className={'navbar-link'} href="#shooters">Shooters</a>
//                     </li>
//                 </div>
//                 <div>
//                     <li className={'list-element'}>
//                         <a className={'navbar-link'} href="#hackNslash">Hack&Slash</a>
//                     </li>
//                 </div>
//                 <div>
//                     <li className={'list-element'}>
//                         <a className={'navbar-link'} href="#contact">Contact us</a>
//                     </li>
//                 </div>
//                 <div className={'burger-menu-container'} onClick={() => showResponsiveNavItems()}>
//                     <div className={'burger-icon-container'}>
//                         <a className={'burger-icon'} href="javascript:void(0)">&#9776;</a>
//                     </div>
//                 </div>
//             </ul>
//         </nav>
//     );
// };
//
// export default NavigationBar;