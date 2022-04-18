import {Link} from '@shopify/hydrogen/client';
import {faHeart} from '@fortawesome/free-regular-svg-icons';
import {faMagnifyingGlass} from '@fortawesome/free-solid-svg-icons';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import CartToggle from './CartToggle.client';
import {CartEstimatedCost} from '@shopify/hydrogen/client';

export function MobileHeaderIcons({isMobileNavOpen, setIsMobileNavOpen}) {
  return (
    <ul className="flex md:hidden items-center justify-center text-xs sm:mb-6">
      <li className="w-fit text-base mr-[26px]">
        <Link className="group py-5 text-black" to={`/`}>
          <FontAwesomeIcon className="w-4" icon={faMagnifyingGlass} />
        </Link>
      </li>
      <li className="w-fit text-base mr-[26px]">
        <Link className="group py-5 text-black" to={`/`}>
          <FontAwesomeIcon className="w-4" icon={faHeart} />
        </Link>
      </li>
      <li className="w-fit text-base flex items-center">
        <CartToggle
          handleClick={() => {
            if (isMobileNavOpen) setIsMobileNavOpen(false);
          }}
        />
        <CartEstimatedCost
          amountType="subtotal"
          role="cell"
          className="text-right font-bold text-[15px] -mr-5"
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
      <li className="sm:w-[60px] md:w-fit text-base flex">
        <CartToggle
          handleClick={() => {
            if (isMobileNavOpen) setIsMobileNavOpen(false);
          }}
        />
        <CartEstimatedCost
          amountType="subtotal"
          role="cell"
          className="text-right font-bold text-[15px] sm:-ml-1 xl:-ml-6"
        />
      </li>
    </ul>
  );
}
