import Head from "next/head";
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';

export default function About() {
  return (
    <div>
      <Head>
        <title>Mindkeyz | Learn who whe are and how we started.</title>
        <meta name='description' content='Mindkeyz a music production duo from Paramaribo, Suriname.' />
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <h1>About</h1>
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
