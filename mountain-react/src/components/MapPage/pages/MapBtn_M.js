import { Link } from 'react-router-dom'; //a標籤要變成link

export const map_btn = (
  <>
    <div className="mountain_map_btn">
      <Link to="/map" className="mountain_low_button btn btn-primary btn-lg">
        初階
      </Link>
      <Link
        to="/map/levelM"
        className="mountain_middle_button btn btn-primary btn-lg active"
      >
        中階
      </Link>
      <Link
        to="/map/levelH"
        className="mountain_high_button btn btn-primary btn-lg"
      >
        高階
      </Link>
    </div>
  </>
);
