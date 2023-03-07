import { useEffect, useState } from "react";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";
import { useParams } from "react-router-dom";
import { GoBack } from "../";
import { works } from "../../constants";
import './work-detail.css';

export default function WorkDetail() {
  const [detail, setDetail] = useState([]);
  const { slug } = useParams();

  useEffect(() => {
    const items = works.filter(item => item.slug === slug);
    setDetail(items);
  }, [slug]);

  return (
    <div className="container">
      <GoBack />
      <div data-aos='fade-down' className="block container folio-header">
        <h2>{detail[0]?.title}</h2>
      </div>
      <div className="work-wrapper">
        <div className="work-card">
          <div className="work-card-img">
            <img data-aos='zoom-in' data-aos-duration='1000' data-aos-delay='1000' src={detail[0]?.imgSrc} alt={detail[0]?.title} />
          </div>
          <div className="work-card-content">
            <h1 data-aos='fade-up' data-aos-delay='400'>{detail[0]?.title}</h1>
            <h3 data-aos='fade-up' data-aos-delay='550'>{detail[0]?.subtitle}</h3>
            <p data-aos='fade-up' data-aos-delay='700'> {detail[0]?.describtion}</p>
            <div className="btns">
              <a data-aos='fade-up' data-aos-delay='850' target="_blank" rel="noopener noreferrer" className="btn" href={detail[0]?.github}><FaGithub /></a>
              <a data-aos='fade-up' data-aos-delay='1000' target="_blank" rel="noopener noreferrer" className="btn" href={detail[0]?.demo}><FaExternalLinkAlt /></a>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
