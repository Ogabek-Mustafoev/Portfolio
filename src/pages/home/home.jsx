import { Link } from 'react-router-dom';
import ReactTypingEffect from 'react-typing-effect';
import { GoBack } from '../../components';
import me from '../../assets/img/me.png'
import './home.css';

export default function Home() {
  return (
    <section className="home section">
      <div className="container">
        <GoBack />
        <div className="row">
          <div className="home-info">
            <h3 className="hello">Hi. <small>I'm</small> <br /> <span className="name">Mustafoev Ogabek</span></h3>
            <h3 className="my-profession">I work as <br />
              <ReactTypingEffect
                text={["React JS developer (front-end)", "Next JS developer (SSR | SEO)", "State manager(Redux | Zustand)"]}
                cursorRenderer={cursor => <h1>{cursor}</h1>}
                speed={100}
                eraseSpeed={30}
                eraseDelay={2000}
                typingDelay={1000}
                displayTextRenderer={(text, i) => {
                  return (
                    <h1>
                      {text.split('').map((char, i) => {
                        const key = `${i}`;
                        return (
                          <span
                            key={key}
                            style={i % 2 === 0 ? { color: 'var(--skin-color)' } : {}}
                          >{char}</span>
                        );
                      })}
                    </h1>
                  );
                }}
              />
            </h3>
            <p>I'm a front-end Developer. I work with JavaScript, ReactJS,
              NextJS, Redux | Toolkit and many UI components, CSS frameworks...</p>
            <Link to="/contact" className="btn hire-me">Let's Talk!</Link>
          </div>
          <div className="home-img">
            <div className="img">
              <img src={me} alt="me-img" />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
