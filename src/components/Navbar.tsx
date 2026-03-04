export default function Navbar() {
  return (
    <div className="navbar_component up w-nav" role="banner">
      <div className="nabvar-header">
        <a href="/" className="logo_sokosumi w-nav-brand">
          <div className="logo-component">
            <img src="/images/sp-logo.png" loading="lazy" alt="" className="sp-logo" />
          </div>
        </a>
        <nav role="navigation" className="navbar-menu-content-wrap w-nav-menu">
          <div className="navigation-link-wrap">
            <a href="#" className="nav-menu w-nav-link">Agents</a>
            <a href="https://www.sokosumi.com/#how-it-works" className="nav-menu w-nav-link">Pricing</a>
            <a href="https://www.sokosumi.com/#community" className="nav-menu w-nav-link">Contact</a>
          </div>
          <div className="nav-cta-links">
            <div className="button-group nav-button">
              <a href="https://app.sokosumi.com/register" className="button w-inline-block">
                <div>Request a Demo</div>
                <div className="arrow-icon w-embed">
                  <svg width="45" height="45" viewBox="0 0 45 45" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <rect width="45" height="45" rx="22.5" fill="white" />
                    <path d="M17.0161 18.1188L18.0536 17.0813C18.3733 17.0914 18.5094 17.048 18.8047 17.0314C19.5267 16.9908 20.2406 16.9114 20.9611 16.8464L26.0857 16.4123L27.6002 16.286C27.7662 16.2728 28.0385 16.2248 28.1915 16.249C28.3582 16.4057 28.6132 16.6207 28.7365 16.8045C28.7458 16.8185 28.7547 16.8313 28.7597 16.8474C28.7846 16.9296 28.5661 19.1708 28.5422 19.4465L28.0473 25.0788C28.0146 25.4404 28.001 25.8053 27.9667 26.1663C27.9563 26.2755 27.9097 26.8805 27.8789 26.934C27.8625 26.9625 27.8463 26.9905 27.8272 27.0173C27.7388 27.1412 26.9701 27.9043 26.8704 27.9214L26.8542 27.9095C26.9352 27.3589 26.9526 26.7569 27.0122 26.199L27.4765 21.4242C27.4875 21.3002 27.4863 21.1763 27.4967 21.054C27.5797 19.9997 27.6873 18.9475 27.8194 17.8983C27.8246 17.8587 27.817 17.8153 27.7922 17.7832C27.7441 17.8122 27.3648 18.1956 27.3001 18.2601L26.0284 19.5295L20.7127 24.845L18.0323 27.5251L17.2723 28.285C17.1426 28.4149 16.9178 28.6277 16.815 28.7685C16.6139 28.581 16.426 28.3748 16.2312 28.1959C16.5431 27.9104 16.911 27.5218 17.2138 27.219L19.0694 25.3634L24.7142 19.7182L26.4694 17.9621L26.9237 17.504C27.0175 17.4092 27.1511 17.2614 27.2578 17.1923C27.0057 17.1792 26.7842 17.239 26.5372 17.2554C26.1008 17.2845 25.6629 17.3409 25.228 17.3762L19.1671 17.9296L17.9339 18.048C17.7746 18.0645 17.1569 18.1339 17.0161 18.1188Z" fill="black" />
                  </svg>
                </div>
              </a>
            </div>
          </div>
        </nav>
        <div className="menu-icon-wrap w-nav-button">
          <div id="menu-button" className="menu-icon">
            <div className="menu-line-top blk"></div>
            <div className="menu-line-middle blk"><div className="menu-inner-line"></div></div>
            <div className="menu-line-bottom blk"></div>
          </div>
        </div>
      </div>
    </div>
  );
}
