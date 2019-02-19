import { Link as GatsbyLink } from 'gatsby';
import React from 'react';
import { Container, Heading, Link, Text } from 'rebass';
import Layout from '../components/Layout';
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/core/styles';

const Projects = () => (
  <Layout>
    <Container>
      <Heading my={3}>Hi from the second page</Heading>
      <Text is="p">Welcome to page 2</Text>
      <Text is="p" my={3}>
        <Link is={GatsbyLink} to="/">
          Go back to the homepage
        </Link>
      </Text>
    </Container>
  </Layout>
);

export default Projects;
