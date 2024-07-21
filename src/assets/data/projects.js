import { v4 as uuidv4 } from 'uuid';
// import ProjectImg from '../images/projectImg.png';
// import UTrackerImg from '../images/utracker.jpg';
// import GreenCtgImg from '../images/greenctg.jpg';
// import CoinTrackerImg from '../images/cointracker.jpg';
// import CavinImg from '../images/cavinimg.jpg';
import LocalShop from '../images/localshop.png';
import TravelWith from '../images/travelwith.jpg';
import CalendarApp from '../images/calendarapp.jpg';
import JournalApp from '../images/journalapp.jpg';

const projects = [
  {
    id: uuidv4(),
    name: 'travelWith',
    desc: 'Web-app for organize travel with friends.',
    img: TravelWith,
    linkLive: 'https://travel-with.herokuapp.com/',
    linkCode: 'https://github.com/murbano17/travelwith-client',
  },
  {
    id: uuidv4(),
    name: 'localSHOP',
    desc: 'web platform for local small business.',
    img: LocalShop,
    linkLive: 'https://localshop-ml.herokuapp.com/',
    linkCode: 'https://github.com/leanloia/localSHOP',
  },
  {
    id: uuidv4(),
    name: 'CalendarApp',
    desc: 'An small calendar-app project, design for sharing a common calendar within a small group of people.',
    img: CalendarApp,
    linkLive: 'https://react-calendarapp.herokuapp.com/',
    linkCode: 'https://github.com/leanloia/REACT-calendar-app',
  },
  {
    id: uuidv4(),
    name: 'JournalApp',
    desc: 'An small project web-app to keep a small journal.',
    img: JournalApp,
    linkLive: 'https://react-app-cursos-61d87.web.app',
    linkCode: 'https://github.com/leanloia/journal-app',
  },
  // {
  //   id: uuidv4(),
  //   name: 'Tracking Soft',
  //   desc:
  //     'A tracking website that will show the performance of the website. Also you will get some useful advice to improve the performance.',
  //   img: ProjectImg,
  // },
];

export default projects;
