import { Link as GatsbyLink } from 'gatsby';
import React from 'react';
import { Container, Heading, Link, Text } from 'rebass';
import Layout from '../components/Layout';
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/core/styles';

const About = () => (
  <Layout>
    <Container>
    <Typography component="h1" variant="h4" align="absolute" color="textPrimary" gutterBottom>
    davis cook
    </Typography>
    <Typography variant="h6" align="center" color="textSecondary" paragraph>
    i am a senior year computer science student studying at seton hall university.
    i am currently pursuing undergraduate research in the fields of text analysis
    and automated programming. i am also a Co-op at UPS where I am writing code to 
    aid their user experience.
    </Typography>
    {/* <Typography variant="h6" align="center" color="textSecondary" paragraph>
    in my free time i like to rock climb and go for runs. i really like these
    activities because they allow me to get exercise while being able to spend
    time with friends and family. i think that people put too little emphasis
    on their personal relationships, and i do not want to fall into that hole.
    </Typography> */}
    </Container>
  </Layout>
);

export default About;
