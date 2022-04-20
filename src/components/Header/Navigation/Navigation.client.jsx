import {Link} from '@shopify/hydrogen/client';
import {useEffect, useState} from 'react';

/**
 * A client component that defines the navigation for a web storefront
 */
export default function Navigation({menuItems}) {
  const [url, setUrl] = useState('');

  useEffect(() => {
    setUrl(window.location.href);
  }, []);

  return (
    <nav className="hidden md:block text-center md:px-[15px] flex-half max-w-1/2">
      <ul className="md:flex items-center justify-between">
        {menuItems.map((item) => (
          <li
            className={`py-1 after:block after:content-[''] after:border-b-2 after:border-black after:scale-x-0 after:transition-all after:duration-500 hover:after:scale-x-100 ${
              item.url === url && 'after:scale-x-100'
            }`}
            key={item.id}
          >
            <Link
              to={`${item.url}`}
              className="block hover:opacity-80 md:text-[15px] xl:text-lg font-semibold"
            >
              {item.title}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}
