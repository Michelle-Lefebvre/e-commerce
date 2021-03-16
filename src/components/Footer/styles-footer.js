import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
  foot: {
    backgroundColor: '#fff',
    display: 'flex',
    flexDirection: 'column',
    alignContent: 'center',
    textAlign: 'center'
  },
  copy: {
    boxSizing: 'border-box',
    width: '100%',
    height: '25%',
    margin: '15px', 
  },
  credit: {
    fontSize:'10px',
    width: '100%',
  },
  
}));