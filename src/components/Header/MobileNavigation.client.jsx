import {Fragment, useState} from 'react';
import {Link} from '@shopify/hydrogen/client';
import {FocusTrap} from '@headlessui/react';
import MobileCountrySelector from '../MobileCountrySelector.client';
import {OpenIconInner, OpenIcon} from '../OpenIcon';
import {MobileHeaderIcons} from './HeaderIcons';

/**
 * A client component that defines the navigation for a mobile storefront
 */
export default function MobileNavigation({isOpen, setIsOpen, menuItems}) {
  const OpenFocusTrap = isOpen ? FocusTrap : Fragment;
  const [insideMenuOpen, setInsideMenuOpen] = useState(false);

  return (
    <div className="border-[1px] w-9 h-9 border-black md:hidden flex items-center justify-center">
      <OpenFocusTrap>
        <button
          type="button"
          className="flex justify-center items-center w-7 h-full"
          onClick={() => setIsOpen((previousIsOpen) => !previousIsOpen)}
        >
          <span className="sr-only">{isOpen ? 'Close' : 'Open'} Menu</span>
          {isOpen ? <CloseIcon /> : <OpenIcon />}
        </button>
        {isOpen ? (
          <div className="fixed w-[300px] -left-0 top-0 h-screen z-10 bg-gray-50 px-4 pt-[50px] pr-5 pb-[30px] pl-[30px]">
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
            <MobileHeaderIcons />
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
            <div>
              <p className="text-black text-[15px] font-normal text-left">
                Free shipping, 30-day return or refund guarantee.
              </p>
            </div>
          </div>
        ) : null}
      </OpenFocusTrap>
    </div>
  );
}

function CloseIcon() {
  return (
    <svg
      width="18"
      height="18"
      viewBox="0 0 18 18"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M1 17L17 1M1 1L17 17"
        stroke="black"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function ArrowRightIcon({className}) {
  return (
    <svg
      className={className}
      width="7"
      height="12"
      viewBox="0 0 7 12"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M0.999762 12C0.743762 12 0.487762 11.902 0.292762 11.707C-0.0982383 11.316 -0.0982383 10.684 0.292762 10.293L4.58576 6.00001L0.292762 1.70701C-0.0982383 1.31601 -0.0982383 0.684006 0.292762 0.293006C0.683762 -0.0979941 1.31576 -0.0979941 1.70676 0.293006L6.70676 5.29301C7.09776 5.68401 7.09776 6.31601 6.70676 6.70701L1.70676 11.707C1.51176 11.902 1.25576 12 0.999762 12Z"
        fill="black"
      />
    </svg>
  );
}
