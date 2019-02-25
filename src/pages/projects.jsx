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
    <Typography component="h1" variant="h4" align="absolute" color="textPrimary" gutterBottom>
    projects i am working on:
    </Typography>
    <Typography variant="h4" align="absolute" color="textPrimary" paragraph>
    school:
    </Typography>
    <Typography variant="h5" align="absolute" color="textPrimary" paragraph>
    automated programming
    </Typography>
    <Typography variant="h6" align="absolute" color="textSecondary" paragraph>
    the goal of this project is to simplify the scripting to function process.
    we aim to use machine learning to recognize inputs and outputs of scripts and
    output a useable, savable function.
    </Typography>

    <Typography variant="h5" align="absolute" color="textPrimary" paragraph>
    text analysis
    </Typography>
    <Typography variant="h6" align="absolute" color="textSecondary" paragraph>
    the goal of this project is to run sentiment analysis about charter schools.
    the goal is to find out public opionion of charter schools using 40 years of
    newspaper articles and python programming.
    </Typography>

    <Typography variant="h4" align="absolute" color="textPrimary" paragraph>
    personal:
    </Typography>
    <Typography variant="h5" align="absolute" color="textPrimary" paragraph>
    this website
    </Typography>
    <Typography variant="h6" align="absolute" color="textSecondary" paragraph>
    this website is a work in progress. the aim is to update this as new techniques
    are learned and new libraries are developed.
    </Typography>

    <Typography variant="h5" align="absolute" color="textPrimary" paragraph>
    twitter sentiment
    </Typography>
    <Typography variant="h6" align="absolute" color="textSecondary" paragraph>
    this project is my sentiment analysis done on the twitter stream. this project
    is currently on hold as the api revoked my credentials.
    </Typography>

    <Typography variant="h5" align="absolute" color="textPrimary" paragraph>
    small projects
    </Typography>
    <Typography variant="h6" align="absolute" color="textSecondary" paragraph>
    contained in this folder are small projects that I took on to learn a new
    library or skill. i prefer to learn while doing so there will be constant
    updates to this repository.
    </Typography>
    </Container>
  </Layout>
);

export default Projects;
