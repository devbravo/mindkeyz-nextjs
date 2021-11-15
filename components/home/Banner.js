import Image from "next/image";
import Box from '@mui/material/Box';
import banner from '../../public/images/mindkeyzBanner2.webp'

const Banner = () => {
  return (
      <Box sx={{display: 'block'}}>
        <Image 
          alt='company logo'
          src={banner}
          layout="responsive"
          objectFit="contain"
          quality={100} 
          priority
          placeholder='blur'
          // width={8996}
          // height={5123}
          />
      </Box>
     
 
    );
}
 
export default Banner;