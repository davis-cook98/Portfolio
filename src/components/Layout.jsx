import { graphql, StaticQuery, Link } from 'gatsby';
import PropTypes from 'prop-types';
import React from 'react';
import Helmet from 'react-helmet';
import { Box, Flex, Heading, Provider as RebassProvider, Text } from 'rebass';
import { injectGlobal } from 'styled-components';
import Footer from './Footer';
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/core/styles';

injectGlobal`
  body {
    margin: 0;
    text-size-adjust: 100%;
  }
`;

const Layout = ({ children }) => (
  <RebassProvider is={Flex} flexDirection="column" css={{ minHeight: '100vh' }}>
    <StaticQuery
      query={graphql`
        {
          site {
            siteMetadata {
              title
              language
            }
          }
        }
      `}
      render={data => (
        <Helmet
          titleTemplate={`%s | ${data.site.siteMetadata.title}`}
          defaultTitle={data.site.siteMetadata.title}
        >
          <html lang={data.site.siteMetadata.language} />
        </Helmet>
      )}
    />

    <Box is="main" flex={1}>
      {children}
    </Box>

    <Footer>
    <a href={"https://www.linkedin.com/in/davis-cook/"}>{"connect with me "}</a>
    -
    <Link to="/"> back to home</Link>
    </Footer>
  </RebassProvider>
);

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
