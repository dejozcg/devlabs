import { useContext } from 'react';
import { NavLink, Outlet } from 'react-router-dom';

export const AppLayout = () => {

  const handleLinkClassName = ({ isActive }) =>
    isActive ? 'text-green-500' : '';

  return (
    <>
            <div className="ml-10 mt-10 relative h-32 w-32 ...">
          <div className="absolute inset-x-0 top-0 h-16 ">
      <nav className=''>
        <NavLink to="/" className={handleLinkClassName}>
          Home
        </NavLink>


        <NavLink to="/novi" className={handleLinkClassName + ' ml-2'} end>
          Add new
        </NavLink>
        {/* |
        <NavLink to="/about/team" className={handleLinkClassName}>
          Team
        </NavLink>
        |
        <NavLink to="/users" className={handleLinkClassName}>
          Users
        </NavLink>
        | */}
       
      </nav>
      </div>
        </div>
      <Outlet />
    </>
  );
};
