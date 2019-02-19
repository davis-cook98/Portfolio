import { Link as GatsbyLink } from 'gatsby';
import React from 'react';
import { Container, Heading, Link, Text } from 'rebass';
import Layout from '../components/Layout';
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/core/styles';

const Quotes = () => (
  <Layout>
    <Container>
    <Typography component="h1" variant="h4" align="absolute" color="textPrimary" gutterBottom>
    quotes that I like
    </Typography>
    <Typography variant="h6" align="center" color="textSecondary" paragraph>
    
    </Typography>
    </Container>
  </Layout>
);

export default Quotes;
