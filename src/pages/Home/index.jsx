import React, { memo } from "react";
import { _Card } from "../../components/UI"
import { Brands, Magazines } from "../../assets/images/png"
const index = memo(() => {
  return (
    <>
      <section className="brands">
        <div className="brands__container">
          <div className="title">Brandlar bo'yicha</div>
          <div className="brands__main">
            <div className="row">
              {
                Brands.map((list, index) => (
                  <_Card key={index} image={list.image} name={list.name} />
                ))
              }
            </div>
          </div>
        </div>
      </section>
      <section className="slider text-center">
        {/* Slide uchun  */}
        <div className="slide">
          Slider
        </div>
      </section>
      <section className="magazines">
        <div className="magazines__container">
          <div className="title">Do'konlarimiz</div>
          <div className="magazines__main">
            <div className="row">
              {
                Magazines.map((list, index) => (
                  <_Card key={index} image={list.image} name={list.name} />
                ))
              }
            </div>
          </div>
        </div>
      </section>
    </>
  );
});

export default index;
