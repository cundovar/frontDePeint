import React from 'react';
import { Link, useLocation } from 'react-router-dom';

interface BreadcrumbProps {
  categoryName?: string;
  Name?: string;
 id?: number;
}

const Breadcrumb: React.FC<BreadcrumbProps> = ({ categoryName,id,Name }) => {
  const location = useLocation();
  const paths = location.pathname.split('/').filter(x => x);
  const isActive = location.pathname.includes("oeuvre") && !/\d/.test(location.pathname);
  const handleFocus = (e: React.FocusEvent<HTMLLIElement>) => {
    e.target.style.color = 'pink';
  };
  return (
    <nav className="breadcrumb fixed max-xl:top-28    max-xl:left-[2rem] z-[999] top-30 left-96">
      <ul className='flex xl:border-b p-3 '>
        <li className={`hover:text-cyan-300 focus:outline-none focus:ring-2 onFocus={handleFocus}`}
        onFocus={handleFocus}>
          <Link to="/">Accueil</Link>
        </li>
        {paths.map((path, index) => {
          const to = `/${paths.slice(0, index + 1).join('/')}`;

          // Check if the path is "oeuvre"
          if (path === "oeuvre") {
            return (
             <li key={to} onFocus={handleFocus}  >
             
                <Link to={`/${categoryName}`}>/<span className={`  hover:text-cyan-300`}> {categoryName} </span> </Link>
              </li>
            );
          }
          if (path ===`${id}`) {
            return (
              <li key={to} onFocus={handleFocus}>
               / <span className='breadcumb-item'>{Name}</span>
              </li>
            );
          }

          return (
            <li key={to} onFocus={handleFocus}  >
              <Link to={to}>/<span className="  hover:text-cyan-300"  > {path} </span> </Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
};

export default Breadcrumb;
