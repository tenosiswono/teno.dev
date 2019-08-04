/* eslint-disable jsx-a11y/anchor-has-content */
import MuiLink from '@material-ui/core/Link';
import clsx from 'clsx';
import NextLink, { LinkProps } from 'next/link';
import { withRouter } from 'next/router';
import React, { forwardRef, ReactNode } from 'react';

interface ILinkProps extends LinkProps {
  activeClassName?: string;
  className?: string;
  naked?: boolean;
  innerRef?: object;
  prefetch?: boolean;
  as?: object;
  children: ReactNode | string;
  color?: string;
}

const NextComposed = forwardRef<HTMLAnchorElement, ILinkProps>(({ as, href, prefetch, ...other }, ref) => {
  return (
    <NextLink href={href} prefetch={prefetch} as={as}>
      <a ref={ref} {...other} />
    </NextLink>
  );
});

// A styled version of the Next.js Link component:
// https://nextjs.org/docs/#with-link
function Link(props) {
  const {
    activeClassName = 'active',
    router,
    className: classNameProps,
    innerRef,
    naked,
    ...other
  } = props;

  const className = clsx(classNameProps, {
    [activeClassName]: router.pathname === props.href && activeClassName,
  });

  if (naked) {
    return <NextComposed className={className} ref={innerRef} {...other} />;
  }

  return <MuiLink component={NextComposed} className={className} ref={innerRef} {...other} />;
}

const RouterLink = withRouter(Link);

export default forwardRef<HTMLAnchorElement, ILinkProps>((props, ref) => <RouterLink {...props} innerRef={ref} />);
