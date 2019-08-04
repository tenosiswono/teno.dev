import AppBar from '@material-ui/core/AppBar';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import Slide from '@material-ui/core/Slide';
import { createStyles, makeStyles } from '@material-ui/core/styles';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import useScrollTrigger from '@material-ui/core/useScrollTrigger';
import PublicIcon from '@material-ui/icons/Public';
import React from 'react';

const useStyles = makeStyles(() =>
  createStyles({
    root: {
      flexGrow: 1,
    },
    title: {
      flexGrow: 1,
    },
  }),
);

interface IScrollProps {
  window?: () => Window;
  children: React.ReactElement;
}

function HideOnScroll(props: IScrollProps) {
  const { children, window } = props;
  const trigger = useScrollTrigger({ target: window ? window() : undefined });

  return (
    <Slide appear={false} direction='down' in={!trigger}>
      {children}
    </Slide>
  );
}

export default function MainAppBar(props) {
  const classes = useStyles(props);
  return (
    <React.Fragment>
      <HideOnScroll {...props}>
        <AppBar color='default'>
          <Toolbar>
            <Typography variant='h6' color='inherit' className={classes.title}>
              teno.dev
            </Typography>
            <Button color='inherit' href='/'>Home</Button>
            <Button color='inherit' href='/about'>About</Button>
            <IconButton aria-label='github' href='https://github.com/tenosiswono' target='_blank'>
              <PublicIcon />
            </IconButton>
          </Toolbar>
        </AppBar>
      </HideOnScroll>
      <Toolbar />
    </React.Fragment>
  );
}
