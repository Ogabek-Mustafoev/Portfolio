import { useEffect, useState } from 'react';
import { MdSettings } from 'react-icons/md';
import { HiSun, HiMoon } from 'react-icons/hi';
import './settings.css';

export default function Settings() {
  const [darkmode, setDarkmode] = useState(false);
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState(null);

  useEffect(() => {
    if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
      document.documentElement.classList.add('dark');
      setDarkmode(true);
    } else {
      document.documentElement.classList.remove('dark');
      setDarkmode(false);
    }
    setColor('color-1');
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const changeTheme = () => {
    setDarkmode(!darkmode);
    if (darkmode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }

  const setColor = (e) => {
    document.body.className = '';
    document.body.classList.add(e);
    setActive(e);
    if (open) {
      setOpen(false);
    }
  }

  return (
    <>
      <div onClick={() => setOpen(!open)} className="overlay" style={{ display: open ? 'block' : 'none' }} ></div>
      <div data-aos-delay="400" className={`style-switcher ${open && 'open'}`}>
        <div onClick={() => setOpen(!open)} className="style-switcher-toggler s-icon">
          <MdSettings className='spinner' />
        </div>
        <div
          className="day-night s-icon"
          onClick={changeTheme}>
          {!darkmode ? <HiSun /> : <HiMoon />}
        </div>
        <h4>Colors</h4>
        <div className="colors">
          <span id="color-1" onClick={e => setColor(e.target.id)} className={active === 'color-1' ? 'active' : ''} />
          <span id="color-2" onClick={e => setColor(e.target.id)} className={active === 'color-2' ? 'active' : ''} />
          <span id="color-3" onClick={e => setColor(e.target.id)} className={active === 'color-3' ? 'active' : ''} />
          <span id="color-4" onClick={e => setColor(e.target.id)} className={active === 'color-4' ? 'active' : ''} />
          <span id="color-5" onClick={e => setColor(e.target.id)} className={active === 'color-5' ? 'active' : ''} />
        </div>
      </div>
    </>
  )
}
