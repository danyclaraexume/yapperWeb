import Navigation from "../components/navigation"
import SearchBar from "../components/searchBar"
import {Stack} from "@mui/material"

const Header = () => {
    return(
        <Stack direction={{ xs: 'row', sm: 'row' }} spacing={{ xs: 1, sm: 2, md: 2 }}>
            <Navigation/>
            <SearchBar/>
        </Stack>
    )
}

export default Header;