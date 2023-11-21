import { Link, useMatch, useResolvedPath } from "react-router-dom"

export default  function Navbar(){
    return <nav  className = "nav">

        <ul>

            <CustomLink  to ="/home"> Home  </CustomLink>
            <CustomLink  to ="/create_task"> Создать задачу </CustomLink>
            <CustomLink  to ="/show_desk"> Доска задач </CustomLink>
            <CustomLink  to ="/show_all_tasks"> Список задач </CustomLink>

        </ul>
    </nav>
}

function CustomLink({to, children, ...props}){
    const  resolvedPath = useResolvedPath(to);
    const isActive = useMatch({path: resolvedPath.pathname, end: true})

    const  path = window.location.pathname;

    return(
        <li className={path === to ? "active" : ""} >
            <Link to={to} {...props}>
                {children}
            </Link>
        </li>
    )
}