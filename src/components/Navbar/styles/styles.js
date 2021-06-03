import { makeStyles} from '@material-ui/core/styles';
export default makeStyles(() => ({
    logo: {
        height: '70px',
        verticalAlign: 'middle',
    },
    appBar: {
        boxShadow: 'none',
    },
    toolbar: {
        padding: 0,
        
        display: 'flex',
        marginTop: '10px',
        marginBottom: '50px',
        paddingLeft: "168px",
        paddingRight: "168px",
        alignItems: 'center',
        '@media only screen and (max-width: 1008px)' : {
            paddingRight: "30px",
            paddingLeft: "30px",
          },
          '@media only screen and (max-width: 750px)' : {
            paddingRight: "20px",
            paddingLeft: "20px",
          }
    },
    title: {
        fontFamily: 'Norse',
        fontSize: '32px',
        letterSpacing: '0.4px',
        fontWeight: 'bold',
        color: '#cc9543',
        flex: 1,
        paddingLeft: '0.5em',
        whiteSpace: 'nowrap',
    },
    linkbar: {
        fontFamily: 'Open Sans',
        fontSize: '16px',
        fontWeight: '700',
        fontColor: '#000000',
        textDecoration: 'none',
        '@media only screen and (max-width: 750px)' : {
            display: 'none',
          }
        
    },
    link: {
        color: 'rgba(74,74,74,0.7)',
        paddingLeft: '20px',
        whiteSpace: 'nowrap',
    },

  }));