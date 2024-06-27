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

  return (
    <nav className="breadcrumb fixed max-md:top-28  max-md:left-1/3 z-[999] top-30 left-96">
      <ul className='flex'>
        <li>
          <Link to="/">Accueil</Link>
        </li>
        {paths.map((path, index) => {
          const to = `/${paths.slice(0, index + 1).join('/')}`;

          // Check if the path is "oeuvre"
          if (path === "oeuvre") {
            return (
              <li key={to} className="breadcrumb-item">
                <Link to={`/${categoryName}`}>/{categoryName}</Link>
              </li>
            );
          }
          if (path ===`${id}`) {
            return (
              <li key={to} className="breadcrumb-item">
               /{Name}
              </li>
            );
          }

          return (
            <li key={to} className="breadcrumb-item">
              <Link to={to}>/{path}</Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
};

export default Breadcrumb;
