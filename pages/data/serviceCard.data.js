import VideocamIcon from '@mui/icons-material/Videocam';
import SpeakerIcon from '@mui/icons-material/Speaker';
import MusicNoteIcon from '@mui/icons-material/MusicNote';
import InstagramIcon from '@mui/icons-material/Instagram';
import YouTubeIcon from '@mui/icons-material/YouTube';
import PhotoIcon from '@mui/icons-material/Photo';

const ServicesData = [
  {
    index: 0,
    service: 'Custom Beats',
    icon: <MusicNoteIcon sx={{color: "#6600ff", fontSize: '40px'}} />,
    info: 'Want a Mindkeyz beat, but want to own all the rights? Lets cook you up a custom beat, with full ownership.',
  },
  {
    index: 1,
    service: 'Mixing & Mastering',
    icon: <SpeakerIcon sx={{color: "#6600ff", fontSize: '40px'}} />,
    info: 'After recording a song you need to have it mix & mastered professionaly. Let us put the final touches on your record.',
  },
  {
    index: 2,
    service: 'Video Consultation',
    icon: <VideocamIcon sx={{color: "#6600ff", fontSize: '40px' }} />,
    info: 'Want to start an online beat selling business, but dont know how? We have over 6 years of experience. Hit us up!!!'
  },
  {
    index: 3,
    service: 'Promotion',
    icon: <InstagramIcon sx={{color: "#6600ff", fontSize: '40px'}} />,
    info: 'Are you an aspiring artist that made a song on our beat? Send us your video and will promo it for you on the gram.'
  },
  {
    index: 4,
    service: 'Beat Hosting',
    icon: <YouTubeIcon sx={{color: "#6600ff", fontSize: '40px'}} />,
    info: `Seeking exposure as a producer and want to sell your beats, our channel has over 50k subs. Let's take care of you.`
  },
  {
    index: 5,
    service: 'Artworks',
    icon: <PhotoIcon sx={{color: "#6600ff", fontSize: '40px'}} />,
    info: 'Hit us up to fix you some high quality create artworks for your single, mixtape or album. For an affordable price.'
  }
];

export default ServicesData;