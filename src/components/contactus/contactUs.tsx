import { Helmet } from "react-helmet-async";
import Layout from "../layout/Layout";
import Navbar from "../shared/navbar/Navbar";
import ContactUsForm from "./contactForm/ContactForm";

const ContactUs = () => {
  return (
    <Layout>
      <Helmet>
        <title>Contact Hetalbon – Get in Touch for Inquiries or Bookings</title>
        <meta
          name="description"
          content="Design Your Own Trip Fill out the form and we'll get back to you shortly"
        />

        <script>
          {`
      (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
      new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
      j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
      'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
      })(window,document,'script','dataLayer','GTM-NJDPL9HD');
    `}
        </script>
      </Helmet>
      <Navbar scrollEffectEnabled={false} />

      <section>
        <ContactUsForm />
      </section>
    </Layout>
  );
};

export default ContactUs;
