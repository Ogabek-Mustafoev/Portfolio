import { Link } from 'react-router-dom';
import './drop.css';

export default function Drop({ num, title, slug }) {
  const setZero = (num) => {
    if (num < 10) {
      return `0${num}`;
    } else {
      return num;
    }
  }

  return (
    <div className="drop" >
      <div className="drop-content">
        <h2>{setZero(num)}</h2>
        <p>{title}</p>
        <Link to={`/works/${slug}`} >read more</Link>
      </div>
    </div>
  )
}
