import { Card, GoBack } from '../../components';
import { data } from '../../constants';
import './service.css';

export default function Service() {
  return (
    <>
      <GoBack />
      <div className="block service-wrap container">
        <h2>Services</h2>
      </div>
      <div className="wrapper">
        <div className="card-wrapper">
          {data.map((item) => (
            <Card key={item.title} {...item} />
          ))}
        </div>
      </div>
    </>
  );
}
