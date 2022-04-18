import {OpenIconInner} from '../../OpenIcon';
import {Link} from '@shopify/hydrogen/client';

export default function MobileNavigationSubMenu({
  setInsideMenuOpen,
  insideMenuOpen,
  menuItems,
}) {
  return (
    <div className="w-full bg-gray-700 p-[5px] flex items-end flex-col transition-all">
      <button
        onClick={() => setInsideMenuOpen(!insideMenuOpen)}
        className="bg-gray-900 text-white p-2 rounded flex items-center mx-[5px] my-[6px]"
      >
        <p className="mr-1">MENU</p>
        <OpenIconInner />
      </button>
      <ul
        className={
          insideMenuOpen
            ? 'w-full items-start flex-col pl-5 transition-all h-full flex'
            : 'w-full pl-5 h-0 hidden'
        }
      >
        {menuItems.map((item) => (
          <li
            className="text-white px-[10px] py-[5px] my-[2px] mx-[5px]"
            key={item.id}
          >
            <Link to={item.url}>{item.title}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
