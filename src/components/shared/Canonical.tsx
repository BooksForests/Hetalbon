import { Helmet } from "react-helmet-async";
import { useLocation } from "react-router-dom";

/**
 * Emits a self-referencing <link rel="canonical"> for the current route.
 *
 * The site is a single-page app: every URL is served the same index.html, so
 * /index.php, /index.html and the non-www host all returned identical pages.
 * With no canonical tag, Google treated those as separate candidates and picked
 * /index.php for the search result. This names one canonical URL per route.
 *
 * Rendered once inside the Router rather than hardcoded in index.html — a
 * static canonical there would point every route at the homepage.
 */
const SITE_ORIGIN = "https://www.hetalbon.com";

export const Canonical = () => {
  const { pathname } = useLocation();

  // Collapse a trailing slash so /about/ and /about don't self-report differently.
  const path = pathname !== "/" ? pathname.replace(/\/+$/, "") : "";

  return (
    <Helmet>
      <link rel="canonical" href={`${SITE_ORIGIN}${path}`} />
    </Helmet>
  );
};

export default Canonical;
