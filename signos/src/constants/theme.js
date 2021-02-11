
import { createMuiTheme } from '@material-ui/core/styles'
import { secondaryColor } from './colors'

const theme = createMuiTheme({
    palette: {
        primary: {
            main: secondaryColor,
            contrastText: '#fff'
        }
    }
})

export default theme;