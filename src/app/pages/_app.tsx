
import Box from '@material-ui/core/Box';
import CssBaseline from '@material-ui/core/CssBaseline';
import MuiLink from '@material-ui/core/Link';
import Typography from '@material-ui/core/Typography';
import { ThemeProvider } from '@material-ui/styles';
import App, { Container } from 'next/app';
import Head from 'next/head';
import React from 'react';
import theme from '../base/theme';
import MainAppBar from '../components/MainAppBar';

function MadeWithLove() {
  return (
    <Typography variant='body2' color='textSecondary' align='center'>
      {'Built with love by the '}
      <MuiLink color='inherit' href='https://material-ui.com/'>
        Material-UI
      </MuiLink>
      {' team.'}
    </Typography>
  );
}

class MyApp extends App {
  public componentDidMount() {
    // Remove the server-side injected CSS.
    const jssStyles = document.querySelector('#jss-server-side');
    if (jssStyles) {
      jssStyles.parentNode.removeChild(jssStyles);
    }
  }

  public render() {
    const { Component, pageProps } = this.props;

    return (
      <Container>
        <Head>
          <title>teno.dev</title>
        </Head>
        <ThemeProvider theme={theme}>
          {/* CssBaseline kickstart an elegant, consistent, and simple baseline to build upon. */}
          <CssBaseline />
          <MainAppBar />
          <Container>
            <Box my={2} minHeight='calc(100vh - 166px)'>
              <Component {...pageProps} />
            </Box>
            <MadeWithLove />
          </Container>
        </ThemeProvider>
      </Container>
    );
  }
}

export default MyApp;
