import Head from "next/head";
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';

export default function Services() {
  return (
    <div>
      <Head>
        <title>Mindkeyz | Mixing & Master, Custom Beats, Consultation</title>
        <meta name='description' content='We offer a range of musical services.' />
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <h1>Our Sevices</h1>
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
    </div>
  );
}
