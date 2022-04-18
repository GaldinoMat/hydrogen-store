import {Link} from '@shopify/hydrogen/client';

/**
 * A client component that defines the navigation for a web storefront
 */
export default function Navigation({menuItems}) {
  return (
    <nav className="hidden md:block text-center md:px-[15px]">
      <ul className="md:flex items-center justify-center">
        {menuItems.map((item) => (
          <li key={item.id}>
            <Link
              to={`${item.url}`}
              className="block mr-[10px] xl:mr-11 hover:opacity-80 md:text-[15px] xl:text-lg font-semibold"
            >
              {item.title}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}
