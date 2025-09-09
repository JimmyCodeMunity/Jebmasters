import React from "react";
import AppLayout from "../layout/AppLayout";
import About from "../components/About";

const AboutPage = () => {
  return (
    <div>
      <AppLayout bgtransparent={false}>
        <About />
      </AppLayout>
    </div>
  );
};

export default AboutPage;
