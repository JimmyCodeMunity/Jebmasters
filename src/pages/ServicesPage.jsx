import React from "react";
import AppLayout from "../layout/AppLayout";
import Services from "../components/Services";

const ServicesPage = () => {
  return (
    <div>
      <AppLayout bgtransparent={false}>
        <Services />
      </AppLayout>
    </div>
  );
};

export default ServicesPage;
