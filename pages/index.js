import Image from "next/image";
import Link from "next/link";
import styles from "../styles/Home.module.css";
import {useTheme} from '@mui/material'
import SEO from "../components/utility/SEO";
import Typography from '@mui/material/Typography'
import Fab from '@mui/material/Fab';
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import ScrollTop from '../components/utility/ScrollToTop'

 const Home = () => {
  return (
    <div>
      <Typography align='center' variant='h2'>Home</Typography>
      <SEO />
      <Toolbar id="back-to-top-anchor"/>
      <Container>
        <Box sx={{ my: 2 }}>
          {[...new Array(50)]
            .map(
              () => `Cras mattis consectetur purus sit amet fermentum.
Cras justo odio, dapibus ac facilisis in, egestas eget quam.
Morbi leo risus, porta ac consectetur ac, vestibulum at eros.
Praesent commodo cursus magna, vel scelerisque nisl consectetur et.`,
            )
            .join('\n')}
        </Box>
      </Container>

      <ScrollTop>
        <Fab color='primary' size="small" aria-label="scroll back to top">
          <KeyboardArrowUpIcon />
        </Fab>
      </ScrollTop>
    </div>
  );
}

export default Home
