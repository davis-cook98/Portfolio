import { Link as GatsbyLink } from 'gatsby';
import React from 'react';
import { Container, Heading, Link, Text } from 'rebass';
import Layout from '../components/Layout';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/core/styles';
import { Grid } from '@material-ui/core';

const Index = () => (
  <Layout>
    <Grid
      container
      alignItems="center"
      justify="center"
      style={{ minHeight: '90vh' }}
    >
      <Container>
        <Typography
          component="h1"
          variant="h2"
          align="center"
          color="textPrimary"
          gutterBottom
        >
          davis cook
        </Typography>
        <Typography variant="h6" align="center" color="textSecondary" paragraph>
          a student at seton hall interested in data analysis
        </Typography>
        <Typography variant="h6" align="center" color="textSecondary" paragraph>
          <Link is={GatsbyLink} to="/about/">
            about
          </Link>
          -
          <Link is={GatsbyLink} to="/projects/">
            projects
          </Link>
          -
          <Link is={GatsbyLink} to="/quotes/">
            quotes
          </Link>
        </Typography>
      </Container>
    </Grid>
  </Layout>
);

export default Index;
