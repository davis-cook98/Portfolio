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
    I am a Junior year Computer Science student studying at Seton Hall University.
    I am currently pursuing undergraduate research in the fields of text analysis
    and automated programming. I also work in the Office of Undergraduate Admissions
    as an Academic Ambassador, where I am responsible for outreach to high school
    students interested in Computer Science.
    </Typography>
    <Typography variant="h6" align="center" color="textSecondary" paragraph>
    In my free time I like to rock climb and go for runs. I really like these
    activities because they allow me to get exercise while being able to spend
    time with friends and family. I think that people put too little emphasis
    on their personal relationships, and I do not want to fall into that hole.
    </Typography>
    </Container>
  </Layout>
);

export default About;
