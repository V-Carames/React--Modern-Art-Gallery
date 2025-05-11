import { Link } from "react-router-dom";

function FooterLogo() {
  return (
    <Link to="/" class="footer__logo" aria-label="Home - Modern Art Gallery">
      <img src="src/assets/logos/logo-light.svg" alt="" />
    </Link>
  );
}

export default FooterLogo;
