import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
  foot: {
    backgroundColor: '#ffffff',
    display: 'flex',
    flexDirection: 'column',
    textAlign: 'center',
    width: '100%',
    position: 'fixed',
    bottom: '0vh',
  },
  copy: {
    height: '25%',
    margin: '15px', 
  },
  credit: {
    fontSize:'10px',
    marginBottom: '15px'
  },
}));