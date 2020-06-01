import React from 'react';
import { Container } from 'rebass';
import Layout from '../components/Layout';
import Typography from '@material-ui/core/Typography';

const Projects = () => (
  <Layout>
    <Container>
    <Typography component="h1" variant="h4" align="absolute" color="textPrimary" gutterBottom>
    projects:
    </Typography>
    <Typography variant="h4" align="absolute" color="textPrimary" paragraph>
    school:
    </Typography>
    <Typography variant="h5" align="absolute" color="textPrimary" paragraph>
    automated programming (ongoing)
    </Typography>
    <Typography variant="h6" align="absolute" color="textSecondary" paragraph>
    the goal of this project is to simplify the scripting to function process.
    we aim to use machine learning to recognize inputs and outputs of scripts and
    output a useable, savable function.
    </Typography>

    <Typography variant="h5" align="absolute" color="textPrimary" paragraph>
    text analysis (ongoing)
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
    <a href={"https://github.com/davis-cook98/Portfolio"}>{"this website"}</a>
    (ongoing)
    </Typography>
    <Typography variant="h6" align="absolute" color="textSecondary" paragraph>
    this website is a work in progress. the aim is to update this as new techniques
    are learned and new libraries are developed.
    </Typography>

    <Typography variant="h5" align="absolute" color="textPrimary" paragraph>
    <a href={"https://github.com/davis-cook98/TwitterAnalysis"}>{"twitter analysis"}</a>
    (on hold)
    </Typography>
    <Typography variant="h6" align="absolute" color="textSecondary" paragraph>
    this project is my sentiment analysis done on the twitter stream. this project
    is currently on hold as the api revoked my credentials.
    </Typography>

    <Typography variant="h5" align="absolute" color="textPrimary" paragraph>
    <a href={"https://github.com/davis-cook98/Personal-Work"}>{"small projects"}</a>
    (finished)
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
