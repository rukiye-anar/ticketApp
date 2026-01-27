import "/src/App.css";
import { Link } from "react-router-dom";
function Footer() {
  return (
    <div>
      <footer className="footer-component">
        <div className="footer-link">
          <Link to={"/"}>Anasayfa</Link>
          <Link to="/Concert">Konser</Link>
          <Link to="/Activity">Etkinlik</Link>
          <Link to="/Theatre">Tiyatro</Link>
        </div>
        <p>&copy; 2026 Tüm Hakları saklıdır. | Rukiye Anar</p>
        <div className="footer-login">
          <Link to="/Login">
            <p>Giriş Yap/ Üye Ol</p>
          </Link>
        </div>
      </footer>
    </div>
  );
}
export default Footer;
