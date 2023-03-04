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
    setDetail(items)
  }, [slug]);

  return (
    <div className="container">
      <GoBack />
      <div className="block container folio-header">
        <h2>{detail[0]?.title}</h2>
      </div>
      <div className="work-wrapper">
        <div className="work-card">
          <div className="work-card-img">
            <img src={detail[0]?.imgSrc} alt={detail[0]?.title} />
          </div>
          <div className="work-card-content">
            <h1>{detail[0]?.title}</h1>
            <h3>{detail[0]?.subtitle}</h3>
            <p>{detail[0]?.describtion}</p>
            <div className="btns">
              <a target="_blank" rel="noopener noreferrer" className="btn" href={detail[0]?.github}><FaGithub /></a>
              <a target="_blank" rel="noopener noreferrer" className="btn" href={detail[0]?.demo}><FaExternalLinkAlt /></a>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
