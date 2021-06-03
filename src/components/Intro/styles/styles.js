import { makeStyles} from '@material-ui/core/styles';
export default makeStyles(() => ({
    bigtext: {
        fontWeight: '300',
        fontSize: '36px',
        fontFamily: 'Open Sans',
        color: '#ce973e',
        paddingBottom: '30px',
    },
    smalltext: {
        fontFamily: 'Open Sans',
        fontSize: '18px',
        fontWeight: '400',
        color: 'rgba(74,74,74,0.7)',
        marginBottom: '16px',
    },
    update: {
        fontFamily: 'Open Sans',
        fontSize: '16px',
        fontWeight: '400',
        
        paddingBottom: '70px',
    },
    linkupdate: {
        textDecoration: 'underline',
        "&:hover" : {
            color: 'black',
            textDecoration: 'none',
        },
        color: '#ce973e',
        
    },
    buttoncont: {
        textAlign: 'center',
        paddingBottom: '60px',
    },
    buttonallpaths: {
        fontFamily: 'Open Sans',
        fontSize: '16px',
        fontWeight: '700',
        color: 'white',
        maxWidth: '280px',
        paddingTop: '14px',
        paddingBottom: '14px',
        textTransform:'none',
        backgroundColor: '#6abfc3',
        borderRadius: '0.2em',
        boxShadow: '0 0.05em 0.25em 0 rgba(0, 0, 0, 0.5)',
        "&:hover" : {
            backgroundColor: '#6abfc3', 
            opacity: '0.8',
        },
    },

  }));