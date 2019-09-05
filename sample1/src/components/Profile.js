import React from 'react';
import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';

import MainHeader from './MainHeader.js';
import MainFooter from './MainFooter.js';
import CssBaseline from '@material-ui/core/CssBaseline';
import { makeStyles } from '@material-ui/core/styles';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithubSquare, faTwitterSquare, faInstagram } from '@fortawesome/free-brands-svg-icons';
import { faHatWizard,faChessKnight,faSuitcase, faFish } from '@fortawesome/free-solid-svg-icons';

import Avatar from '@material-ui/core/Avatar';
import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

import EmailIcon from '@material-ui/icons/Email';
import Fab from '@material-ui/core/Fab';

const useStyles = makeStyles(theme => ({
  icon: {
    marginRight: theme.spacing(2),
  },
  heroContent: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(8, 0, 6),
  },
  heroButtons: {
    marginTop: theme.spacing(4),
  },
  cardGrid: {
    paddingTop: theme.spacing(8),
    paddingBottom: theme.spacing(8),
  },
  card: {
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
  },
  cardMedia: {
    paddingTop: '56.25%', // 16:9
  },
  cardContent: {
    flexGrow: 1,
  },
  footer: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(6),
  },
  avatar: {
    margin: 0,
    width: 110,
    height: 110,
  },
  heading: {
    fontSize: theme.typography.pxToRem(15),
    flexBasis: '33.33%',
    flexShrink: 0,
  },
  secondaryHeading: {
    fontSize: theme.typography.pxToRem(15),
    color: theme.palette.text.secondary,
  },button: {
    margin: theme.spacing(1),
  },
  leftIcon: {
    marginRight: theme.spacing(1),
  },
  rightIcon: {
    marginLeft: theme.spacing(1),
  },
  iconSmall: {
    fontSize: 20,
  },
  hobbytitle: {
    color: theme.palette.text.secondary,
  },
}));


export default function Profile() {
    const classes = useStyles();
    const [expanded, setExpanded] = React.useState(false);

    const handleChange = panel => (event, isExpanded) => {
      setExpanded(isExpanded ? panel : false);
    };

    return (
    <React.Fragment>
    <CssBaseline />
    <MainHeader />
      <main>
          {/* Hero unit */}
          <div className={classes.heroContent}>
            <Container maxWidth="md">
            <Grid container spacing={1}>
              <Grid item xs={3} sm={3} md={2} align="left">
                <Avatar alt="JinYagi" src="./static/materials/yagi.jpg" className={classes.avatar}/>
              </Grid>
              <Grid item xs={9} sm={9} md={10} align="left">
                <Typography component="h1" variant="h2" align="left" color="textPrimary" gutterBottom>
                  やぎじん
                </Typography>
                <Typography variant="h5" align="left" color="textSecondary" paragraph>
                  登呂遺跡非公式観光親善大使
                </Typography>
              </Grid>
            </Grid>
              
            <Grid container spacing={2}>
              <Grid item xs={12} sm={12} md={12}>
                <ExpansionPanel expanded={expanded === 'panel1'} onChange={handleChange('panel1')}>
                  <ExpansionPanelSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel1bh-content"
                    id="panel1bh-header"
                  >
                    <Typography className={classes.heading}>所属</Typography>
                    <Typography className={classes.secondaryHeading}>名城大学大学院修士課程</Typography>
                  </ExpansionPanelSummary>
                  <ExpansionPanelDetails>
                    <Typography>
                      2019/04 ~ 2021/03<br/>
                      名城大学大学院理工学研究科情報工学専攻修士課程<br/>
                      知的センサ情報処理研究室
                    </Typography>
                  </ExpansionPanelDetails>
                </ExpansionPanel>
              </Grid>
            </Grid>

            <Grid container spacing={2}>
              <Grid item xs={12} sm={12} md={12}>
                <ExpansionPanel expanded={expanded === 'panel2'} onChange={handleChange('panel2')}>
                  <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />} aria-controls="panel2bh-content" id="panel2bh-header" >
                    <Typography className={classes.heading}>連絡先</Typography>
                    <Typography className={classes.secondaryHeading}> Email</Typography>
                  </ExpansionPanelSummary>
                  <ExpansionPanelDetails>
                    <Typography>
                      <EmailIcon/>193426019[at]ccalumni.meijo-u.ac.jp<br />
                      ※[at]を＠で置き換えてください
                    </Typography>
                  </ExpansionPanelDetails>
                </ExpansionPanel>
              </Grid>
            </Grid>
            </Container>
          </div>

          <Container maxWidth="md">
          <Grid container>
            <Grid item xs={12} sm={12} md={12} align="left">
              <Typography component="h3" variant="h4" align="left" className={classes.hobbytitle}>
                  About
              </Typography>
            </Grid>
          </Grid>
          </Container>
          <Container className={classes.cardGrid} maxWidth="md">
            {/* End hero unit */}
            <Grid container spacing={4}>

              <Grid item key={1} xs={12} sm={6} md={4}>
                  <Card className={classes.card}>
                    <CardMedia
                      className={classes.cardMedia}
                      image="https://source.unsplash.com/random"
                      title="Image title"
                    />
                    <CardContent className={classes.cardContent}>
                      <Typography gutterBottom variant="h5" component="h2">
                        GitHub
                      </Typography>
                      <Typography>
                        GitHubアカウント．制作したものがいくつかあります．
                      </Typography>
                    </CardContent>
                    <CardActions>
                    
                    <Fab variant="extended" size="medium" color="default" aria-label="add" className={classes.rightIcon} href="https://github.com/yagijin" target="_blank">
                      <FontAwesomeIcon icon={faGithubSquare}  size="lg" className={classes.leftIcon}/>
                       GitHub
                    </Fab>
                    </CardActions>
                  </Card>
                </Grid>

                <Grid item key={2} xs={12} sm={6} md={4}>
                  <Card className={classes.card}>
                    <CardMedia
                      className={classes.cardMedia}
                      image="https://source.unsplash.com/random"
                      title="Image title"
                    />
                    <CardContent className={classes.cardContent}>
                      <Typography gutterBottom variant="h5" component="h2">
                        Twitter
                      </Typography>
                      <Typography>
                        Twitterアカウント．たまにしかつぶやきません．
                      </Typography>
                    </CardContent>
                    <CardActions>
                    
                    <Fab variant="extended" size="medium" color="primary" aria-label="add" className={classes.rightIcon} href="https://twitter.com/yagijinjin" target="_blank">
                      <FontAwesomeIcon icon={faTwitterSquare}  size="lg" className={classes.leftIcon}/>
                       Twitter
                    </Fab>
                    </CardActions>
                  </Card>
                </Grid>

                <Grid item key={3} xs={12} sm={6} md={4}>
                  <Card className={classes.card}>
                    <CardMedia
                      className={classes.cardMedia}
                      image="https://source.unsplash.com/random"
                      title="Image title"
                    />
                    <CardContent className={classes.cardContent}>
                      <Typography gutterBottom variant="h5" component="h2">
                      <FontAwesomeIcon icon={faHatWizard}  size="md" className={classes.leftIcon}/>
                      Magic
                      </Typography>
                      <Typography>
                        主にスライハンドを練習. <br />
                        現在は，ギミック作りに没頭中.
                      </Typography>
                    </CardContent>
                    <CardActions>
                   
                    <Fab variant="extended" size="medium" color="primary" aria-label="add" className={classes.rightIcon} href="https://www.instagram.com/yagijin_magic/" target="_blank">
                      <FontAwesomeIcon icon={faInstagram}  size="lg" className={classes.leftIcon}/>
                       Instagram
                    </Fab>
                    </CardActions>
                  </Card>          
                </Grid>

                <Grid item key={4} xs={12} sm={6} md={4}>
                  <Card className={classes.card}>
                    <CardMedia
                      className={classes.cardMedia}
                      image="https://source.unsplash.com/random"
                      title="Image title"
                    />
                    <CardContent className={classes.cardContent}>
                      <Typography gutterBottom variant="h5" component="h2">
                      <FontAwesomeIcon icon={faChessKnight}  size="md" className={classes.leftIcon}/>
                        Boardgame
                      </Typography>
                      <Typography>
                        なんでもやります．<br />
                        カタン日本選手権2019地区予選敗退.
                      </Typography>
                    </CardContent>
                    <CardActions>
                    </CardActions>
                  </Card>
                </Grid>

                <Grid item key={5} xs={12} sm={6} md={4}>
                  <Card className={classes.card}>
                    <CardMedia
                      className={classes.cardMedia}
                      image="https://source.unsplash.com/random"
                      title="Image title"
                    />
                    <CardContent className={classes.cardContent}>
                      <Typography gutterBottom variant="h5" component="h2">
                      <FontAwesomeIcon icon={faSuitcase}  size="md" className={classes.leftIcon}/>
                        Travel
                      </Typography>
                      <Typography>
                        海外旅行が好きです．アイスランドにいつか行くことが夢.
                      </Typography>
                    </CardContent>
                    <CardActions>
                    </CardActions>
                  </Card>
                </Grid>

                <Grid item key={6} xs={12} sm={6} md={4}>
                  <Card className={classes.card}>
                    <CardMedia
                      className={classes.cardMedia}
                      image="https://source.unsplash.com/random"
                      title="Image title"
                    />
                    <CardContent className={classes.cardContent}>
                      <Typography gutterBottom variant="h5" component="h2">
                      <FontAwesomeIcon icon={faFish}  size="md" className={classes.leftIcon}/>
                        Ramen
                      </Typography>
                      <Typography>
                        究極の煮干しラーメンを作るべく日々奮闘中．
                        いつか寸胴を買ったら豚骨もやりたい．
                      </Typography>
                    </CardContent>
                    <CardActions>
                    </CardActions>
                  </Card>
                </Grid>

            </Grid>
          </Container>
        </main>
        <MainFooter />
        </React.Fragment>
    );
}
