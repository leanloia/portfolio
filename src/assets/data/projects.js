import { v4 as uuidv4 } from 'uuid';
import ProjectImg from '../images/projectImg.png';
import UTrackerImg from '../images/utracker.jpg';
import GreenCtgImg from '../images/greenctg.jpg';
import CoinTrackerImg from '../images/cointracker.jpg';
import LocalShop from '../images/localshop.png';
import TravelWith from '../images/travelwith.jpg';
import CavinImg from '../images/cavinimg.jpg';

const projects = [
  {
    id: uuidv4(),
    name: 'localSHOP',
    desc: 'web platform for local small business.',
    img: LocalShop,
  },
  // {
  //   id: uuidv4(),
  //   name: 'Green CTG',
  //   desc:
  //     'An app to help people to get an overview of how they can make the city beautiful.',
  //   img: GreenCtgImg,
  // },
  {
    id: uuidv4(),
    name: 'travelWith',
    desc: 'Web-app for organize travel with friends.',
    img: TravelWith,
  },
  // {
  //   id: uuidv4(),
  //   name: "Cavin's Portfolio",
  //   desc:
  //     'A portfolio for Cavin jr. A artist from New york city. The portfolio is made using ReactJs and GatsbyJs.',
  //   img: CavinImg,
  // },
  // {
  //   id: uuidv4(),
  //   name: 'Tracking Soft',
  //   desc:
  //     'A tracking website that will show the performance of the website. Also you will get some useful advice to improve the performance.',
  //   img: ProjectImg,
  // },
];

export default projects;
