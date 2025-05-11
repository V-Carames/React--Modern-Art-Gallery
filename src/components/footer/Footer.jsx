import FooterLogo from "./FooterLogo";
import FooterSocials from "./FooterSocials";
import FooterText from "./FooterText";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer__container">
        <FooterLogo />
        <FooterText />
        <FooterSocials />
      </div>
    </footer>
  );
}

export default Footer;
