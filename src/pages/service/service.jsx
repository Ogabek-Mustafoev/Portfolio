import { Card, GoBack } from '../../components';
import { data } from '../../constants';
import './service.css';

export default function Service() {
  return (
    <>
      <GoBack />
      <div className="block service-wrap container">
        <h2 data-aos='zoom-out-up' >Services</h2>
      </div>
      <div className="wrapper">
        <div data-aos='zoom-out-up' data-aos-delay='400' className="card-wrapper">
          {data.map((item) => (
            <Card key={item.title} {...item} />
          ))}
        </div>
      </div>
    </>
  );
}
