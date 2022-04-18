import {Link} from '@shopify/hydrogen/client';
import {faHeart} from '@fortawesome/free-regular-svg-icons';
import {faMagnifyingGlass} from '@fortawesome/free-solid-svg-icons';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import CartToggle from '../CartToggle.client';

export function MobileHeaderIcons({isMobileNavOpen, setIsMobileNavOpen}) {
  return (
    <ul className="flex md:hidden items-center justify-evenly text-xs sm:mb-6 md:mb-0">
      <li className="sm:w-[60px] md:w-fit text-base">
        <Link className="group py-5 text-black" to={`/`}>
          <FontAwesomeIcon className="w-4" icon={faMagnifyingGlass} />
        </Link>
      </li>
      <li className="sm:w-[60px] md:w-fit text-base">
        <Link className="group py-5 text-black" to={`/`}>
          <FontAwesomeIcon className="w-4" icon={faHeart} />
        </Link>
      </li>
      <li className="sm:w-[60px] md:w-fit text-base">
        <CartToggle
          handleClick={() => {
            if (isMobileNavOpen) setIsMobileNavOpen(false);
          }}
        />
      </li>
    </ul>
  );
}

export function HeaderIcons({isMobileNavOpen, setIsMobileNavOpen}) {
  return (
    <ul className="md:flex sm:hidden items-center justify-evenly text-xs sm:mb-6 md:mb-0">
      <li className="sm:w-[60px] md:w-fit text-base md:mr-[10px] xl:mr-[26px]">
        <Link className="group py-5 text-black" to={`/`}>
          <FontAwesomeIcon className="w-4" icon={faMagnifyingGlass} />
        </Link>
      </li>
      <li className="sm:w-[60px] md:w-fit text-base md:mr-[10px] xl:mr-[26px]">
        <Link className="group py-5 text-black" to={`/`}>
          <FontAwesomeIcon className="w-4" icon={faHeart} />
        </Link>
      </li>
      <li className="sm:w-[60px] md:w-fit text-base">
        <CartToggle
          handleClick={() => {
            if (isMobileNavOpen) setIsMobileNavOpen(false);
          }}
        />
      </li>
    </ul>
  );
}
