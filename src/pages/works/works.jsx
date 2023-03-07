import { Drop, GoBack } from "../../components";
import { works } from '../../constants';
import './works.css';

export default function Works() {
  return (
    <>
      <GoBack />
      <div className="block container folio-header">
        <h2 data-aos='zoom-in-left'>Works</h2>
      </div>
      <div className="container folio-wrap">
        <div data-aos='zoom-in-up' data-aos-delay='500' className='drop-wrapper'>
          {works.map((work, idx) => (
            <Drop key={work.slug} num={idx + 1}  {...work} />
          )).reverse()}
        </div>
      </div>
    </>
  )
}
