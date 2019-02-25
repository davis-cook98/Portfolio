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
    “Simplicity is the ultimate sophistication.” —Leonardo da Vinci
    </Typography>
    <Typography variant="h6" align="center" color="textSecondary" paragraph>
    "I intend to live life, not just exist." -George Takei
    </Typography>
    <Typography variant="h6" align="center" color="textSecondary" paragraph>
    “In the middle of every difficulty lies opportunity.” —Albert Einstein
    </Typography>
    <Typography variant="h6" align="center" color="textSecondary" paragraph>
    “Design is not just what it looks like and feels like. Design is how it works.” —Steve Jobs
    </Typography>
    </Container>
  </Layout>
);

export default Quotes;
