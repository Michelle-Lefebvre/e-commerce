import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
    title: {
        flexGrow: 1,
        alignItems: 'center',
        display: 'flex',
        textDecoration: 'none',
    },
    text: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'column',
        width: '100%',
        textAlign: 'center',
        margin: '10% 0',
        minHeight: '200px',
        backgroundColor: 'rgba(33, 33, 33, .3)',
    },
    alert: {
        padding: theme.spacing(1),
        margin: theme.spacing(1, 0),
        marginTop: "60px",
        textAlign: "center",
    },
}));