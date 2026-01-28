import "/src/App.css";
import { Link } from "react-router-dom";
import { FaFacebook, FaTwitter, FaInstagram, FaYoutube } from 'react-icons/fa';
function Footer() {
  return (
    <div>
     <footer className="main-footer">
      <div className="footer-content">
        <div className="footer-section about">
          <h2 className="footer-logo">Biletx</h2>
          <p>En sevdiğin konser, tiyatro ve etkinlikler için en güvenilir biletleme platformu.</p>
          <div className="social-icons">
            <a href="#"><FaFacebook /></a>
            <a href="#"><FaTwitter /></a>
            <a href="#"><FaInstagram /></a>
            <a href="#"><FaYoutube /></a>
          </div>
        </div>

        <div className="footer-section links">
          <h3>Keşfet</h3>
          <ul>
            <li><a href="#">Konser</a></li>
            <li><a href="#">Tiyatro</a></li>
            <li><a href="#">Festival</a></li>
            <li><a href="#">Spor</a></li>
          </ul>
        </div>
        <div className="footer-section links">
          <h3>Kurumsal</h3>
          <ul>
            <li><a href="#">Hakkımızda</a></li>
            <li><a href="#">Kullanım Koşulları</a></li>
            <li><a href="#">KVKK</a></li>
            <li><a href="#">İletişim</a></li>
          </ul>
        </div>

        {/* Bölüm 4: Bülten Aboneliği */}
        <div className="footer-section newsletter">
          <h3>Haberdar Ol</h3>
          <p>Yeni etkinliklerden ilk sen haberdar ol!</p>
          <form className="subscribe-form">
            <input type="email" placeholder="E-posta adresin" />
            <button type="submit">Abone Ol</button>
          </form>
        </div>
      </div>

      <div className="footer-bottom">
        <p>&copy; 2026 Biletx. Tüm Hakları Saklıdır.</p>
        <div className="footer-bottom-links">
          <a href="#">Güvenli Ödeme</a>
          <span>|</span>
          <a href="#">Yardım Merkezi</a>
        </div>
      </div>
    </footer>
    </div>
  );
}
export default Footer;
