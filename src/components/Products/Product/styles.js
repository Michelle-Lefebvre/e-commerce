import { makeStyles } from '@material-ui/core/styles';

export default makeStyles(() => ({
  root: {
    maxWidth: '100%',
  },
  media: {
    height: 0,
    paddingTop: '75%', // 4:3
  },
  card: {
    height: '100%',
  },
  cardActions: {
    display: 'flex',
    justifyContent: 'flex-end',
    alignContent: 'flex-end',
  },
  cardContent: {
    display: 'flex',
    justifyContent: 'space-between',
  },
}));