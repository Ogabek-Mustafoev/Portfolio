import './card.css';

export default function Card({ Icon, title, text, href }) {
  return (
    <div className="card shadow-dark">
      <div className="lines"></div>
      <div className="icon-box">
        <Icon className="icon" />
      </div>
      <div className="content">
        <div className="details">
          <h2>{title}</h2>
          <p>{text}</p>
          <a target="_blank" rel="noopener noreferrer" href={href}>Read More</a>
        </div>
      </div>
    </div>
  )
}
