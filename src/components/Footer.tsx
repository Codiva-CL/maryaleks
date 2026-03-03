export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-inner">
          <p className="footer-copy">&copy; {year} Marina Alekseeva</p>
          <p className="footer-note">Designed &amp; built with intention</p>
        </div>
      </div>
    </footer>
  );
}
