// import sidebar from './sidebar.module.css'
// import { useRouter } from 'next/router';
// import Link from 'next/link'

// import {
//     faHouse,
//     faCog,
//     faSignOut,
//     faToiletPaper,
//     faFaceDizzy,
//     faThumbsUp
// } from "@fortawesome/free-solid-svg-icons";
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

// const middleRoutes = [
//     {
//         name: "Home",
//         path: "/home",
//         iconName: faHouse
//     },
// ];

// const RouteWithIcon = ({ iconName, path, name, fullWidth = true }) => {
//     const router = useRouter();
//     const isActive = router.pathname === path;
//     return (
//         <div className={sidebar.route}>
//             <Link href={path}>
//                 <a className={sidebar.route__link}>
//                     <FontAwesomeIcon 
//                     icon={iconName}
//                     style={{ fontSize: 40, color: "ffff", opacity: isActive ? "1" : "0.4" }} />
//                     {fullWidth ? <p className={sidebar.route__linkName}>{name}</p> : "" }
//                 </a> 
              
//             </Link>
//         </div>
//     )
// }

// export const Sidebar = ({ fullWidth, className = "", style = "" }) => {
//     return (
//         <div className={`${sidebar.container} ${className}`} style={{...style, width: fullWidth ? "300px" : "150px"}}>
//             <div className={sidebar.container__top}>
//                 <h1 className={sidebar.logo}>R.</h1>
//             </div>
//             <div 
//             className={sidebar.container__middle}>
//                 {
//                     middleRoutes.map(
//                         (route) => <RouteWithIcon
//                         path={route.path}
//                         iconName={route.iconName}
//                         name={route.name}
//                         fullWidth={fullWidth}
//                         />
//                         )
//                 }
//             </div>
//             <div className={sidebar.container__bottom}>
//                 <RouteWithIcon
//                     path="/logout"
//                     iconName={faSignOut}
//                     name="Logout"
//                 />

//             </div>
//         </div>
//     )
// }

// -----------------------------------

// import { Sidebar } from '../Sidebar';
// import mainStyles from '../../utils/layout.module.css';

// import { useClickedInside } from '../../hooks/useClickedInside';

// const Layout = ({ children }) => {

//   const { ref, isComponentVisible } = useClickedInside();


//   return (
//     <div className={mainStyles.main__container}>
//       <div ref={ref}>
//         <Sidebar className="animation_trigger" fullWidth={isComponentVisible}/>
//       </div>
//     <div className={mainStyles.main__content} style={{width: isComponentVisible ? 'calc(100vw - 350px)' : 'calc(100vw - 200px)'}}>
//         { children }
//     </div>
//     </div>
//   )
// }


// export default Layout;


// ------------------------------------

// import { useState, useEffect, useRef } from 'react';

// export const useClickedInside = () => {

//   const [isComponentVisible, setIsComponentVisible] = useState(false);
//   const ref = useRef(null);

//   const handleClickOutside = (event) => {
//     ref.current.classList.add(`animation_trigger`);
//     if (ref.current && !ref.current.contains(event.target)) {
//       setIsComponentVisible(false);
//     }
//     else 
//     {
//       setIsComponentVisible(true)
//     }
//   };

//   useEffect(() => {
//     document.addEventListener('click', handleClickOutside, true);
//     return () => {
//       document.removeEventListener('click', handleClickOutside, true);
//     };
//   }, []);

//   return { ref, isComponentVisible, setIsComponentVisible };
// }