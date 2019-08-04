import Box from '@material-ui/core/Box';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import React from 'react';

export default function Index() {
  return (
    <Container maxWidth='sm'>
      <Box my={4}>
        <Typography variant='h2' component='h1' gutterBottom={true}>
          teno.dev
        </Typography>
      </Box>
    </Container>
  );
}
