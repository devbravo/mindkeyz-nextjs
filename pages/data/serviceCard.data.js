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
    info: 'Want a Mindkeyz beat, but want to add you own vision and own all the rights? Lets cook you up a custom beat.',
  },
  {
    index: 1,
    service: 'Mixing & Mastering',
    icon: <SpeakerIcon sx={{color: "#6600ff", fontSize: '40px'}} />,
    info: 'After recording a song it needs to be mix & mastered. Let us put the final touches on your record.',
  },
  {
    index: 2,
    service: 'Video Consultation',
    icon: <VideocamIcon sx={{color: "#6600ff", fontSize: '40px' }} />,
    info: `Want to start an online beat selling business, but don't know how? We have over 6 years of experience.`
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
    info: `With over 50k+ subs on YouTube, our channel is the place to be if you're an upcoming music producer.`
  },
  {
    index: 5,
    service: 'Artworks',
    icon: <PhotoIcon sx={{color: "#6600ff", fontSize: '40px'}} />,
    info: `Artworks are essential in this age of streaming. Whether you releasing an album or single. We've got you!.`
  }
];

export default ServicesData;