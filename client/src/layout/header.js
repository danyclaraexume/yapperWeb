import Navigation from "../components/navigation"
import {Stack} from "@mui/material"

const Header = () => {
    return(
        <Stack direction={{ xs: 'row', sm: 'row' }} spacing={{ xs: 1, sm: 2, md: 2 }}>
            <Navigation/>
        </Stack>
    )
}

export default Header;