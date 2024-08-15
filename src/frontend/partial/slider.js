
import banner from '../assets/images/hinhbanner.jpg';
function Slider() {
    return (
        <div className="row">
        <div className="col-md-12 banner">
        <img src={banner}className="img-fluid  w-100" alt="Banner"  />
        </div>
    </div>
    );
  }
  
  export default Slider;