import './AppFooter.css';

export function AppFooter() {
  return (
    <footer>
      <h3 id="contacts">My contact info</h3>
      <div className="links">
        <div className="facebook">
          My{' '}
          <a href="https://www.facebook.com/andrii.lundiak" target="_blank">
            Facebook
          </a>
        </div>
        <div className="blog">
          My blog{' '}
          <a href="https://lundiak.wordpress.com/" target="_blank">
            LUND-IA-K
          </a>
        </div>
        <div className="github">
          My{' '}
          <a href="https://github.com/alundiak" target="_blank">
            GitHub
          </a>
        </div>
      </div>
    </footer>
  );
}
