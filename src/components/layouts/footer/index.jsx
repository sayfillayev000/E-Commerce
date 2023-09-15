import { memo } from "react";

const index = memo(() => {
  return (
    <>
      <div className="footer__container">
        <div className="container">
          <div className="row">
            <div className="col-6 col-md-2">
              <h5 className="footer_title">Hujjatlar</h5>
              <ul className="nav flex-column">
                <li className="nav-item mb-2"><a href="#" className="nav-link p-0 footer_link">Umumiy Shartlar</a></li>
                <li className="nav-item mb-2"><a href="#" className="nav-link p-0 footer_link">Offerta arxivi</a></li>
                <li className="nav-item mb-2"><a href="#" className="nav-link p-0 footer_link">Nizom</a></li>
                <li className="nav-item mb-2"><a href="#" className="nav-link p-0 footer_link">Guvohnoma</a></li>
              </ul>
            </div>
            <div className="col-6 col-md-2">
              <h5 className="footer_title">Servis</h5>
              <ul className="nav flex-column">
                <li className="nav-item mb-2"><a href="#" className="nav-link p-0 footer_link">Do'konlar</a></li>
                <li className="nav-item mb-2"><a href="#" className="nav-link p-0 footer_link">Biz haqimizda</a></li>
                <li className="nav-item mb-2"><a href="#" className="nav-link p-0 footer_link">Hamkorlik uchun </a></li>
                <li className="nav-item mb-2"><a href="#" className="nav-link p-0 footer_link">Qaytarish</a></li>
                <li className="nav-item mb-2"><a href="#" className="nav-link p-0 footer_link">Promokodlar</a></li>
              </ul>
            </div>

            <div className="col-6 col-md-2">
              <h5 className="footer_title">Section</h5>
              <ul className="nav flex-column">
                <li className="nav-item mb-2"><a href="#" className="nav-link p-0 footer_link">Katalog 1</a></li>    
                <li className="nav-item mb-2"><a href="#" className="nav-link p-0 footer_link">Katalog 1</a></li>
                <li className="nav-item mb-2"><a href="#" className="nav-link p-0 footer_link">Katalog 2</a></li>
                <li className="nav-item mb-2"><a href="#" className="nav-link p-0 footer_link">Katalog 2</a></li>
                <li className="nav-item mb-2"><a href="#" className="nav-link p-0 footer_link">Katalog 3</a></li>
                <li className="nav-item mb-2"><a href="#" className="nav-link p-0 footer_link">Katalog 3</a></li>
                
              </ul>
            </div>
            <div className="col-md-5 float-end offset-md-1">
              <h5 className="footer_title">Axborot Xizmati</h5>
              <ul className="nav flex-column">
                <li className="nav-item mb-2"><a href="#" className="nav-link p-0 footer_link">contact@nextstore.uz</a></li>    
                <li className="nav-item mb-2">
                  <a href="#" className="nav-link p-0 footer_link">+998 99 999 99 99</a>
                  <a href="#" className="nav-link p-0 footer_link">+998 99 999 99 99</a>  
                  </li>
                <li className="nav-item mb-2"><a href="#" className="nav-link p-0 footer_link">
                Sag’bon 186, Olmazor tumani, Toshkent, O'zbekiston
                  </a></li>
                
              </ul>
            </div>
            <p></p>
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
