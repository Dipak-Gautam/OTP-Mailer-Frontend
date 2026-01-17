import React from "react";
import ProductTemplate from "./Component/ProductTemplate";
import WelcomeUserGuide from "../WelcomeMail/Component/WelcomeUserGuide";
import ProductConfiguration from "./Component/ProductConfiguration";
import ProductVariables from "./Component/ProductVariables";

const ProductMail = () => {
  return (
    <div>
      <div>
        <ProductTemplate />
        <WelcomeUserGuide />
      </div>
      <div>
        <ProductConfiguration />
        <ProductVariables />
      </div>
    </div>
  );
};

export default ProductMail;
