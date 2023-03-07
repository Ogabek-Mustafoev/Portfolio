import { MdOutlineClose } from "react-icons/md";
import { useNavigate } from "react-router-dom";
import './go-back.css';

export default function GoBack() {
  const navigate = useNavigate();

  return (
    <div className="go-back">
      <span data-aos='zoom-in' className='back' onClick={() => navigate(-1)}><MdOutlineClose /></span>
    </div>
  )
}
