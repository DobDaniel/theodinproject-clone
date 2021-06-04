import { makeStyles} from '@material-ui/core/styles';
import { Autorenew } from '@material-ui/icons';
export default makeStyles(() => ({
    bigtext: {
      fontWeight: '700',
      fontSize: '1.5rem',
      letterSpacing: '0.2px',
      lineHeight: '1.88',
      fontFamily: 'Open Sans',
      color: '#4a4a4a',
      marginBottom: "36px",
      paddingTop: "100px",
    },
    container: {
      maxWidth: '500px',
      color: 'blue',
      backgroundColor: 'blue',
      textAlign: 'center',
      
    },
    smalltext: {
      margin: "0 auto",
      textAlign: 'center',
      maxWidth: '570px',
      fontWeight: '400',
      fontSize: '1.125rem',
      letterSpacing: '0.2px',
      lineHeight: '1.88',
      fontFamily: 'Open Sans',
      color: 'rgba(74,74,74,0.7)',
      paddingBottom: '100px',
    },
    cards:{
      display:'flex',
      '@media only screen and (max-width: 750px)' : {
        display:'block',
      },
      textAlign: 'center',
      margin: "0 auto",
      maxWidth: "1080px",
    }
  }));