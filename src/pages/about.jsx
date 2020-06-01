import React from 'react';
import { Container } from 'rebass';
import Layout from '../components/Layout';
import Typography from '@material-ui/core/Typography';

const About = () => (
  <Layout>
    <Container>
    <Typography component="h1" variant="h4" align="absolute" color="textPrimary" gutterBottom>
    davis cook
    </Typography>
    <Typography variant="h6" align="center" color="textSecondary" paragraph>
    i am a recent graduate from seton hall university with a degree in computer science,
    and a minor in psychology. i also recieved my school's data analysis certificate
    i am currently an applications developer at ups on their air, fleet, and freight team.
    </Typography>
    </Container>
  </Layout>
);

export default About;
