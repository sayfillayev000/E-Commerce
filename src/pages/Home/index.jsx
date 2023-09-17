import React, { memo } from "react";
import { _Card } from "../../components/UI"
import { Brands } from "../../assets/images/png"
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
    </>
  );
});

export default index;
