import { memo } from "react";
import NOIMAGE from "../../../assets/images/png/src/NOIMAGE.png";
// import scss
import '../../../assets/styles/components/_card.scss';
const index = memo(({image,name}) => {
  return (
    <>  
      <div className="card col-lg-3">
        <img src={image ? image : NOIMAGE} alt={name} />
      </div>
    </>
  );
});

export default index;