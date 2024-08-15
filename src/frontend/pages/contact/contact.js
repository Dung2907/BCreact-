import { FaPhoneAlt } from "react-icons/fa";
import { RiMailLine } from "react-icons/ri";
import { FaRegAddressCard } from "react-icons/fa";
function ContactPage() {
  return (
    <div>
      {/* <!-- Page Header Start --> */}
      <div className="container-fluid bg-dark bg-img p-5 mb-5">
        <div className="row">
          <div className="col-12 text-center">
            <h1 className="display-4 text-uppercase text-white">Contact Us</h1>
          </div>
        </div>
      </div>
      {/* <!-- Page Header End --> */}

      {/* <!-- Contact Start --> */}
      <div
        className="container-fluid contact position-relative px-5"
        style={{ marginTop: "90px;" }}
      >
        <div className="container">
          <div className="row g-5 mb-5">
            <div className="col-lg-4 col-md-6">
              <div className="bg-primary border-inner text-center text-white p-5">
                <i className="bi bi-geo-alt fs-1 text-white"></i>
                <h6 className="text-uppercase my-2"><FaRegAddressCard />Địa chỉ</h6>
                <span>20 Tăng Nhơn Phú , Phước Long B , TP Thủ Đức ,HCM</span>
              </div>
            </div>
            <div className="col-lg-4 col-md-6">
              <div className="bg-primary border-inner text-center text-white p-5">
                <i className="bi bi-phone-vibrate fs-1 text-white"></i>
                <h6 className="text-uppercase my-2">Điện thoại</h6>
                <span> <FaPhoneAlt /> 0979136447</span>
              </div>
            </div>
            <div className="col-lg-4 col-md-6">
              <div className="bg-primary border-inner text-center text-white p-5">
                <i className="bi bi-envelope-open fs-1 text-white"></i>
                <h6 className="text-uppercase my-2"><RiMailLine />Email </h6>
                <span> Liên hệ qua Email:anhdungtran2015@gmail.com</span>
              </div>
            </div>
            
          </div>
          <div className="row justify-content-center">
            <div className="col-lg-6">
              <form>
                <div className="row g-3">
                  <div className="col-sm-6">
                    <input
                      type="text"
                      className="form-control bg-light border-0 px-4"
                      placeholder="Your Name"
                      style={{ height: "55px;" }}
                    />
                  </div>
                  <div className="col-sm-6">
                    <input
                      type="email"
                      className="form-control bg-light border-0 px-4"
                      placeholder="Your Email"
                      style={{ height: "55px;" }}
                    />
                  </div>
                  <div className="col-sm-12">
                    <input
                      type="text"
                      className="form-control bg-light border-0 px-4"
                      placeholder="Subject"
                      style={{ height: "55px;" }}
                    />
                  </div>
                  <div className="col-sm-12">
                    <textarea
                      className="form-control bg-light border-0 px-4 py-3"
                      rows="4"
                      placeholder="Message"
                    ></textarea>
                  </div>
                  <div className="col-sm-12">
                    <button
                      className="btn btn-primary border-inner w-100 py-3"
                      type="submit"
                    >
                      Send Message
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
      {/* <!-- Contact End --> */}
    </div>
  );
}
export default ContactPage;
