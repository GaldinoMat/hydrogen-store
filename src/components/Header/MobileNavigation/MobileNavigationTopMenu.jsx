import MobileCountrySelector from '../../MobileCountrySelector.client';
import {Link} from '@shopify/hydrogen/client';

export default function MobileNavigationTopMenu({setIsOpen}) {
  return (
    <ul className="flex items-center justify-evenly text-xs mb-8">
      <li className="min-w-[60px] text-[13px]">
        <Link
          className="group py-5 text-black uppercase"
          to={`/`}
          onClick={() => setIsOpen(false)}
        >
          Sign In
        </Link>
      </li>
      <li className="min-w-[60px] text-[13px] uppercase">
        <Link
          className="group py-5 text-black"
          to={`/`}
          onClick={() => setIsOpen(false)}
        >
          FAQS
        </Link>
      </li>
      <li className="min-w-[60px] text-[13px] uppercase">
        <MobileCountrySelector />
      </li>
    </ul>
  );
}
