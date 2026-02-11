import { Helmet } from "react-helmet-async";
import Layout from "../layout/Layout";
import Navbar from "../shared/navbar/Navbar";
import NewsSlider from "./newsSlider/NewsSlider";
import Testimonials from "./testimonials/Testimonials";

const MediaPage = () => {
  return (
    <Layout>
      <Helmet>
        <title>Our Award & Achievements | Hetalbon</title>
        <meta
          name="description"
          content="Discover media features, interviews, and coverage of Hetal Bon’s journey in wellness."
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

      <div className="pt-20">
        {/* <ImageSlider/> */}
        <NewsSlider />
        {/* <SPsecialGuest/> */}
        <Testimonials />
      </div>
    </Layout>
  );
};

export default MediaPage;
