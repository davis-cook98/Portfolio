import { Link as GatsbyLink } from 'gatsby';
import React from 'react';
import { Container, Link} from 'rebass';
import Layout from '../components/Layout';
import Typography from '@material-ui/core/Typography';
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
