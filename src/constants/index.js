import { FaReact, FaMobileAlt } from 'react-icons/fa';
import { TbBrandNextjs, TbBrandJavascript } from 'react-icons/tb';
import { SiRedux } from 'react-icons/si';
import mers from '../assets/img/work1.png';
import serial from '../assets/img/work2.png';
import cook from '../assets/img/work3.png';
import blog from '../assets/img/work4.png';
import twitter from '../assets/img/work5.png';
import movie from '../assets/img/work6.png';
import shop from '../assets/img/work7.png';
import news from '../assets/img/work8.png';
import videosTube from '../assets/img/work9.png';
import trailer from '../assets/img/work10.png';
import nikeShop from '../assets/img/work11.png';
import figmaDesign from '../assets/img/work12.png';

export const data = [
  {
    title: 'JavaScript',
    Icon: TbBrandJavascript,
    text: "JavaScript is a programming language that is one of the core technologies of the World Wide",
    href: 'https://www.javascript.com/',
  },
  {
    title: 'React Website',
    Icon: FaReact,
    text: "React JS is a popular front-end JavaScript library for building user interfaces based on components.",
    href: 'https://reactjs.org/',
  },
  {
    title: "Next Website",
    Icon: TbBrandNextjs,
    text: "Next.js is a web development framework created by Vercel enabling React-based app.",
    href: 'https://nextjs.org/',
  },
  {
    title: 'Redux',
    Icon: SiRedux,
    text: "Redux is an open-source, popular JavaScript library for managing and centralizing application state.",
    href: 'https://developer.mozilla.org/en-US/docs/Learn/CSS/CSS_layout/Responsive_Design',
  },
  {
    title: "Responsive Design",
    Icon: FaMobileAlt,
    text: "Responsive design is an approach to making web pages usable on different devices and windows.",
    href: 'https://redux.js.org/',
  },
];

export const works = [
  {
    slug: 'js-mers',
    title: "Mers-Project",
    subtitle: 'Built in JavaScript, full-stack with Json-server, only desctop friendly',
    describtion: "Full-Stack JavaScript Project. Json-server used as backend. All data come from db.json and messages are saved to that file.",
    imgSrc: mers,
    demo: 'https://js-full-stack-mers-project.vercel.app/',
    github: 'https://github.com/Ogabek-Mustafoev/JS_full-stack_mers-project',
  },
  {
    slug: 'js-serial',
    title: "Serial-Project",
    subtitle: 'Built in JavaScript, full-stack with Json-server, only desctop friendly',
    describtion: "Full-Stack JavaScript Project. Json-server used as backend. All data come from db.json and messages are saved to that file.",
    imgSrc: serial,
    demo: 'https://js-full-stack-serial-project.vercel.app/',
    github: 'https://github.com/Ogabek-Mustafoev/JS_full-stack_serial-project',
  },
  {
    slug: 'twitter-project',
    title: "Twitter-Analog",
    subtitle: 'Built on React Class Component, fully responsive on different screens',
    describtion: "In this project, you can add, remove and also filter posts. This project shows how to build React Class Component Application.",
    imgSrc: twitter,
    demo: 'https://react-twitter-analog.vercel.app/',
    github: 'https://github.com/Ogabek-Mustafoev/React_Twitter-Analog',
  },
  {
    slug: 'movie-project',
    title: "Movie-App",
    subtitle: 'Built on React Function Component, fully responsive on different screens',
    describtion: "Movei-App with OMDB-API. You can search any movies, series and even cartoons. This project also supports dark and light theme.",
    imgSrc: movie,
    demo: 'https://react-movie-with-omdb-api.vercel.app/',
    github: 'https://github.com/Ogabek-Mustafoev/React_Movie_with_OMDB-API',
  },
  {
    slug: 'shop-app',
    title: "Shop-App",
    subtitle: 'Built on React Function Component, fully responsive on different screens',
    describtion: "Shop-App with FakeStore-API. This e-commerce project is SPA with react-router-dom. You can add products to your cart(basket).",
    imgSrc: shop,
    demo: 'https://react-shop-with-fake-store-api.vercel.app/',
    github: 'https://github.com/Ogabek-Mustafoev/React_Shop_with_FakeStoreAPI',
  },
  {
    slug: 'news-app',
    title: "News-App",
    subtitle: 'Built on Redux and React Function Component, responsive on different screens',
    describtion: "Full-Stack News-App with Redux-Toolkit and Json-Server. All data come from db.json file and added posts are saved to that file.",
    imgSrc: news,
    demo: 'https://react-redux-full-stack-news-app.vercel.app/',
    github: 'https://github.com/Ogabek-Mustafoev/React-Redux_Full-Stack_News-App',
  },
  {
    slug: 'videos-tube',
    title: "VideosTube",
    subtitle: 'Built on React Function Component, fully responsive on different screens',
    describtion: "VideosTube project is YouTube clone with RapidAPI. You can watch any videos like YouTube, it also supports dark and light theme.",
    imgSrc: videosTube,
    demo: 'https://react-youtube-clone-with-rapid-api.vercel.app/',
    github: 'https://github.com/Ogabek-Mustafoev/React_YouTube-Clone_with_Rapid-API',
  },
  {
    slug: 'trailer-app',
    title: "Trailer-App",
    subtitle: 'Built on React Function Component, fully responsive on different screens',
    describtion: "By this project you can watch trailers of any movies, series and cartoons. All data come from TMDB-APi, you can watch newest trailers.",
    imgSrc: trailer,
    demo: 'https://react-trailer-with-tmdb-api.vercel.app/',
    github: 'https://github.com/Ogabek-Mustafoev/React_Trailer_with_TMDB-API',
  },
  {
    slug: 'cook-app',
    title: "Cook-App",
    subtitle: 'Built on React Function Component, fully responsive on different screens',
    describtion: "By this project you can cook worldwide meals. All meals are listed with ingrediens, preparation method and video instruction. Let's cook!",
    imgSrc: cook,
    demo: 'https://react-cook-with-mealdbapi.vercel.app/',
    github: 'https://github.com/Ogabek-Mustafoev/React_Cook_with_MealDB-API',
  },
  {
    slug: 'blog-app',
    title: "Blog-App",
    subtitle: 'Built on Next JS, fully responsive on different screens and window sizes',
    describtion: "Full-Stack project shows you my posts realated to IT sphere and important world news will be published. GraphCMS is used for backend.",
    imgSrc: blog,
    demo: 'https://full-stack-next-js-blog.vercel.app/',
    github: 'https://github.com/Ogabek-Mustafoev/Full-Stack_NextJS_Blog',
  },
  {
    slug: 'nike-shop',
    title: "Nike Shop",
    subtitle: 'Built on React JS, fully responsive on different screens and window sizes',
    describtion: "Nike Shop application is built in react.js. This e-commerce project is fully shopify application. You can add products to your cart(basket).",
    imgSrc: nikeShop,
    demo: 'https://e-commerce-nike.vercel.app/',
    github: 'https://github.com/Ogabek-Mustafoev/E-Commerce-Nike',
  },
  {
    slug: 'figma-design',
    title: "Figma design",
    subtitle: 'Simple static website, fully responsive on different screens and window sizes',
    describtion: "This website is created by just HTML and CSS. Design is created in Figma. This is made for MyTeacher.uz online IELTS teaching platform.",
    imgSrc: figmaDesign,
    demo: 'https://figma-html-css.vercel.app/',
    github: 'https://github.com/Ogabek-Mustafoev/Figma-HTML-CSS',
  },
]