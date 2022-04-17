import {faStar} from '@fortawesome/free-regular-svg-icons';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';

export default function ProductCardBottomRating() {
  return (
    <div className="flex mb-[6px]">
      <FontAwesomeIcon className="w-4" icon={faStar} />
      <FontAwesomeIcon className="w-4" icon={faStar} />
      <FontAwesomeIcon className="w-4" icon={faStar} />
      <FontAwesomeIcon className="w-4" icon={faStar} />
      <FontAwesomeIcon className="w-4" icon={faStar} />
    </div>
  );
}
