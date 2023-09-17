import { memo } from "react";

const index = memo(() => {
  return (
    <>
      <div className="footer__container">
        <div className="container">
          <div className="row">
            {/* <div className="col-6 col-md-2">
              <h5 className="footer_title">Section</h5>
              <ul className="nav flex-column">
                <li className="nav-item mb-2"><a href="#" className="nav-link p-0 footer_link">Home</a></li>
                <li className="nav-item mb-2"><a href="#" className="nav-link p-0 footer_link">Features</a></li>
                <li className="nav-item mb-2"><a href="#" className="nav-link p-0 footer_link">Pricing</a></li>
                <li className="nav-item mb-2"><a href="#" className="nav-link p-0 footer_link">FAQs</a></li>
                <li className="nav-item mb-2"><a href="#" className="nav-link p-0 footer_link">About</a></li>
              </ul>
            </div>

            <div className="col-6 col-md-2">
              <h5 className="footer_title">Section</h5>
              <ul className="nav flex-column">
                <li className="nav-item mb-2"><a href="#" className="nav-link p-0 footer_link">Home</a></li>
                <li className="nav-item mb-2"><a href="#" className="nav-link p-0 footer_link">Features</a></li>
                <li className="nav-item mb-2"><a href="#" className="nav-link p-0 footer_link">Pricing</a></li>
                <li className="nav-item mb-2"><a href="#" className="nav-link p-0 footer_link">FAQs</a></li>
                <li className="nav-item mb-2"><a href="#" className="nav-link p-0 footer_link">About</a></li>
              </ul>
            </div>

            <div className="col-6 col-md-2">
              <h5 className="footer_title">Section</h5>
              <ul className="nav flex-column">
                <li className="nav-item mb-2"><a href="#" className="nav-link p-0 footer_link">Home</a></li>
                <li className="nav-item mb-2"><a href="#" className="nav-link p-0 footer_link">Features</a></li>
                <li className="nav-item mb-2"><a href="#" className="nav-link p-0 footer_link">Pricing</a></li>
                <li className="nav-item mb-2"><a href="#" className="nav-link p-0 footer_link">FAQs</a></li>
                <li className="nav-item mb-2"><a href="#" className="nav-link p-0 footer_link">About</a></li>
              </ul>
            </div>
            <div className="col-md-5 float-end offset-md-1">
                <h5 className="footer_title">Axborot Xizmati</h5>
            </div> */}
            <div className="footer__menu">
              <ul className="footer__menu_list">
                <h5 className="footer_title">Hujjatlar</h5>
                <li className="_menu_item">
                  <a className="_menu_link" href="#">Umumiy Shartlar</a>
                </li>
                <li className="_menu_item"> 
                  <a className="_menu_link" href="#">Ofertalar arxivi</a>
                </li>
                <li className="_menu_item">
                  <a className="_menu_link" href="#">Nizom</a>
                </li>
                <li className="_menu_item">
                  <a className="_menu_link" href="#">Guvohnoma</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
});

export default index;
