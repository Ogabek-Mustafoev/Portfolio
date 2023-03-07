import { useNavigate } from "react-router-dom";
import { FaHome, FaInfoCircle, FaCode } from 'react-icons/fa';
import { MdWork, MdContacts } from 'react-icons/md';
import './default.css';

export default function DefaultPage() {
  const navigate = useNavigate();

  // to show animation on mobile
  const linkTo = (path) => setTimeout(() => navigate(path), 500);

  return (
    <div className="default-wrapper">
      <ul data-aos="fade-up" data-aos-delay='400' className="navigate">
        <li><span onClick={() => linkTo('/home')} data-text="Home"><FaHome /></span></li>
        <li><span onClick={() => linkTo('/about')} data-text="About"><FaInfoCircle /></span></li>
        <li><span onClick={() => linkTo('/service')} data-text="Service"><FaCode /></span></li>
        <li><span onClick={() => linkTo('/works')} data-text="Works"><MdWork /></span></li>
        <li><span onClick={() => linkTo('/contact')} data-text="Contact"><MdContacts /></span></li>
      </ul>
    </div>
  )
}
