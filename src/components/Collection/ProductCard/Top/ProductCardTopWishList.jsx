import {faHeart} from '@fortawesome/free-regular-svg-icons';
import {
  faMagnifyingGlass,
  faArrowsLeftRight,
} from '@fortawesome/free-solid-svg-icons';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';

export default function ProductCardTopWishList() {
  return (
    <ul className="absolute top-5 -right-[200px] group-hover:right-3 transition-all duration-700">
      <li className="mb-[10px] p-[10px] bg-white">
        <FontAwesomeIcon className="w-4" icon={faHeart} />
      </li>
      <li className="mb-[10px] p-[10px] bg-white">
        <FontAwesomeIcon className="w-4" icon={faArrowsLeftRight} />
      </li>
      <li className="mb-[10px] p-[10px] bg-white">
        <FontAwesomeIcon className="w-4" icon={faMagnifyingGlass} />
      </li>
    </ul>
  );
}
