import Navigation from "../components/navigation"
import UtilsBar from "../components/utilsBar"
import {Stack} from "@mui/material"

const Header = () => {
    return(
        <Stack>
            <UtilsBar/>
            <Navigation/>
        </Stack>
    )
}

export default Header;