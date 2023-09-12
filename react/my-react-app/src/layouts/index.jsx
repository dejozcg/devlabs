import { Link, NavLink, Outlet } from "react-router-dom"

export const AppLayout = () => {
    const handleLinkClassName = ({isActive}) =>isActive?"active":""
    return <>
        <nav>
            <NavLink to="/" className={handleLinkClassName}>Home</NavLink> | <NavLink  exact="true" to="/about">About</NavLink> | <NavLink className={handleLinkClassName} to="/about/team">Team</NavLink> | <NavLink className={handleLinkClassName} to="/users" >Users</NavLink>
        </nav>
        <Outlet />
    </>
}