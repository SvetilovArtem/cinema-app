import * as React from 'react';
import { styled } from '@mui/material/styles';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Collapse from '@mui/material/Collapse';
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import { red } from '@mui/material/colors';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShareIcon from '@mui/icons-material/Share';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import { apiKey } from '../../pages/Main/Main';
import axios from 'axios';
import { useState } from 'react';

const ExpandMore = styled((props) => {
  const { expand, ...other } = props;
  return <IconButton {...other} />;
})(({ theme, expand }) => ({
  transform: !expand ? 'rotate(0deg)' : 'rotate(180deg)',
  marginLeft: 'auto',
  transition: theme.transitions.create('transform', {
    duration: theme.transitions.duration.shortest,
  }),
}));

export default function CinemaCard({name, year, poster, filmId, rating}) {
  const [expanded, setExpanded] = React.useState(false);
  const [choisenVideo, setChoisenVideo] = useState('')
  const [desc, setDesc] = useState('')

  const handleExpandClick = () => {
    setExpanded(!expanded);

    if(!expanded) {
      axios
        .get(`https://kinopoiskapiunofficial.tech/api/v2.2/films/${filmId}`, {
          method: 'GET',
          headers: {
              'X-API-KEY': `${apiKey}`,
              'Content-Type': 'application/json',
          },
        })
        .then(resp => setDesc(resp.data.description))
    }
    
  };
  const handleClickMedia = (e) => {
    axios
    .get(`https://kinopoiskapiunofficial.tech/api/v2.2/films/${filmId}/videos`, {
      method: 'GET',
      headers: {
          'X-API-KEY': `${apiKey}`,
          'Content-Type': 'application/json',
      },
    })
    .then(resp => {
      console.log(resp)
      setChoisenVideo(resp.data.items[1].url)
    })   
  }

  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardHeader
        avatar={
          <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
            {rating}
          </Avatar>
        }
        action={
          <IconButton aria-label="settings">
            <MoreVertIcon />
          </IconButton>
        }
        title={name}
        subheader={year}
      />
      {
      choisenVideo ? <iframe title='cinema' is="x-frame-bypass" src={choisenVideo} width="500" height="500" poster={poster}></iframe> :
      <CardMedia
      onClick={(e) => handleClickMedia(e)}
      component="img"
      height="400"
      image={poster}
      alt="Paella dish"
    /> 
      }
      
      <CardContent>
        <Typography variant="body2" color="text.secondary">
          
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        <IconButton aria-label="add to favorites">
          <FavoriteIcon />
        </IconButton>
        <IconButton aria-label="share">
          <ShareIcon />
        </IconButton>
        <ExpandMore
          expand={expanded}
          onClick={handleExpandClick}
          aria-expanded={expanded}
          aria-label="show more"
        >
          <ExpandMoreIcon />
        </ExpandMore>
      </CardActions>
      <Collapse in={expanded} timeout="auto" unmountOnExit>
        <CardContent>
          <Typography paragraph>{desc}</Typography>
        </CardContent>
      </Collapse>
    </Card>
  );
}
