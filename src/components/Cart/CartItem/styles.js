import { makeStyles } from '@material-ui/core/styles';
import { Height } from '@material-ui/icons';

export default makeStyles(() => ({
    media: {
        height: 260,
    },
    cardContent: {
        display: 'flex', 
        justifyContent: 'space-between',
    },
    cardActions: {
        justifyContent: 'space-between',
    },
    buttons: {
        display: 'flex', 
        justifyContent: 'center',
    },

}));