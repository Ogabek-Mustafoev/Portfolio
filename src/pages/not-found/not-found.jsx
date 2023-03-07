import './not-found.css';

export default function NotFound() {
  return (
    <div data-aos="zoom-out-up" className="page_404">
      <h1 className="h1">404</h1>
      <div className="cloak__wrapper">
        <div className="cloak__container">
          <div className="cloak"></div>
        </div>
      </div>
      <div className="info">
        <h2 data-aos="fade-up" data-aos-delay="400" className="h2">We can't find that page</h2>
        <p data-aos="fade-up" data-aos-delay="600" className="p">
          We're fairly sure that page used to be here, but seems to have gone
          missing. We do apologise on it's behalf.
        </p>
        <a data-aos="fade-up" data-aos-delay="800" className="a" href="/">
          Go to Home
        </a>
      </div>
    </div>
  )
}
