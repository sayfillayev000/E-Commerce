import { memo } from "react";
import { Icons } from "../../../assets/images/svg";
import { Link } from "react-router-dom";
const index = memo(() => {
  return (
    <>
      <footer>
        <div className="footer__container">
          <div className="container">
            <div className="row">
              <div className="d-flex col-sm-6 col-xl-2 col-md-4 flex-column documents">
                <h5 className="footer_title">Hujjatlar</h5>
                <ul className="flex-column px-0">
                  <li className="nav-item mb-2"><Link to="#" className="nav-link p-0 footer_link">Umumiy Shartlar</Link></li>
                  <li className="nav-item mb-2"><Link to="#" className="nav-link p-0 footer_link">Offerta arxivi</Link></li>
                  <li className="nav-item mb-2"><Link to="#" className="nav-link p-0 footer_link">Nizom</Link></li>
                  <li className="nav-item mb-2"><Link to="#" className="nav-link p-0 footer_link">Guvohnoma</Link></li>
                </ul>
              </div>
              <div className="d-flex col-sm-6 col-xl-2 col-md-4 flex-column service">
                <h5 className="footer_title">Servis</h5>
                <ul className="flex-column px-0">
                  <li className="nav-item mb-2"><Link to="#" className="nav-link p-0 footer_link">Do'konlar</Link></li>
                  <li className="nav-item mb-2"><Link to="#" className="nav-link p-0 footer_link">Biz haqimizda</Link></li>
                  <li className="nav-item mb-2"><Link to="#" className="nav-link p-0 footer_link">Hamkorlik uchun</Link></li>
                  <li className="nav-item mb-2"><Link to="#" className="nav-link p-0 footer_link">Qaytarish</Link></li>
                  <li className="nav-item mb-2"><Link to="#" className="nav-link p-0 footer_link">Promokodlar</Link></li>
                </ul>
              </div>
              <div className="d-flex col-xl-3 col-sm col-md-4 flex-column items-katalog">
                <h5 className="footer_title">Mahsulotlar kattaligi</h5>
                <ul className="flex-column px-0">
                  <li className="nav-item mb-2"><Link to="#" className="nav-link p-0 footer_link">Katalog 1</Link></li>
                  <li className="nav-item mb-2"><Link to="#" className="nav-link p-0 footer_link">Katalog 1</Link></li>
                  <li className="nav-item mb-2"><Link to="#" className="nav-link p-0 footer_link">Katalog 2</Link></li>
                  <li className="nav-item mb-2"><Link to="#" className="nav-link p-0 footer_link">Katalog 2</Link></li>
                  <li className="nav-item mb-2"><Link to="#" className="nav-link p-0 footer_link">Katalog 3</Link></li>
                  <li className="nav-item mb-2"><Link to="#" className="nav-link p-0 footer_link">Katalog 3</Link></li>
                </ul>
              </div>
              <div className="col-sm col offset-md-1 nav-information-service">
                <h5 className="footer_title">Axborot Xizmati</h5>
                <ul className="nav flex-column">
                  <li className="nav-item mb-2">
                    <Link to="#" className="nav-link p-0 footer_link">contact@nextstore.uz</Link>
                    </li>
                  <li className="nav-item mb-2">
                    <Link to="#" className="nav-link p-0 footer_link">+998 99 999 99 99</Link>
                    <Link to="#" className="nav-link p-0 footer_link">+998 99 999 99 99</Link>
                  </li>
                  <li className="nav-item mb-2">
                    <Link to="#" className="nav-link p-0 footer_link">
                    Sag’bon 186, Olmazor tumani, Toshkent, O'zbekiston</Link>
                  </li>
                </ul>
                <ul className="nav flex-row information__service_icons">
                  {
                    Icons.map((icons, index) => (
                      <li className="nav-item" key={index}>
                        <Link to={icons.link ? icons.link : "#"} className="nav-link p-0">
                          <img width={35} src={icons.icon} alt="" />
                        </Link>
                      </li>
                    ))
                  }
                </ul>
              </div>
            </div>
            <div className="row">
              <div className="footer__bottom">
                <span className="float-start">© 2022 Nextstore.com</span>
                <span className="float-end">Powered by </span>
              </div>
            </div>
          </div>
        </div>
      </footer>

    </>
  );
});

export default index;
