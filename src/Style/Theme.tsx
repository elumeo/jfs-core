import createMuiTheme from '@material-ui/core/styles/createMuiTheme'

const Theme = () => {
    return createMuiTheme({ 
        palette: {
          primary: {
            // light: 'rgb(180, 20, 110)',
            main: 'rgb(110, 30, 90)',
          //   dark: '#002884',

            contrastText: '#fff',
          },
          secondary: {
            // light: 'rgb(105, 190, 170)',
            main: 'rgb(0, 120, 125)',
          //   dark: '#ba000d',
            contrastText: '#fff',
          },
          text :{
            
          }
        },
        
    
    })
} 
export default Theme