import React from "react";
import AppLayout from "../layout/AppLayout";
import Contact from "../components/Contact";

const ContactPage = () => {
  return (
    <div>
      <AppLayout bgtransparent={false}>
        <Contact />
      </AppLayout>
    </div>
  );
};

export default ContactPage;
