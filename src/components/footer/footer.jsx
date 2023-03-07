import { FaGithub } from 'react-icons/fa';
import './footer.css';

export default function Footer() {
  return (
    <div className='footer'>
      <div data-aos="fade-right" className="github-icon">
        <a href="https://github.com/Ogabek-Mustafoev" target="_blank" rel="noopener noreferrer">
          <FaGithub />
        </a>
      </div>
    </div>
  )
}
