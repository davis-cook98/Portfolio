import { Link as GatsbyLink } from 'gatsby';
import React from 'react';
import { Container, Heading, Link, Text } from 'rebass';
import Layout from '../components/Layout';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/core/styles';


const styles = theme => ({
  icon: {
    marginRight: theme.spacing.unit * 2,
  },
  heroUnit: {
  },
  heroContent: {
    maxWidth: 600,
    margin: '0 auto',
    padding: `${theme.spacing.unit * 27}px 0 ${theme.spacing.unit * 6}px`,
  },
  layout: {
    width: 'auto',
    marginLeft: theme.spacing.unit * 3,
    marginRight: theme.spacing.unit * 3,
    [theme.breakpoints.up(1100 + theme.spacing.unit * 3 * 2)]: {
      width: 1100,
      marginLeft: 'auto',
      marginRight: 'auto',
    },
  },
});

function Album(props) {
  const { classes } = props;

  return (
    <React.Fragment>
      <CssBaseline />
      <main>
        {/* Hero unit */}
        <div className={classes.heroUnit}>
          <div className={classes.heroContent}>
            <Typography component="h1" variant="h2" align="absolute" color="textPrimary" gutterBottom>
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
          </div>
        </div>
      </main>
    </React.Fragment>
  );
}

Album.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Album);
