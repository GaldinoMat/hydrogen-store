import {faBagShopping} from '@fortawesome/free-solid-svg-icons';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';

/**
 * A shared component that specifies the icon to represent a cart
 */
export default function CartIcon() {
  return <FontAwesomeIcon className="w-4" icon={faBagShopping} />;
}
