import Header from "./header";
import Footer from "./footer";
import { Container } from "@mui/material";

const PageContainer = ({ children }) => {
  return (
    <Container maxWidth={false}>
      <Header style={{ position: "absolute" }} />
      <div>
        {children}
      </div>
      <Footer />
    </Container>
  );
}

export default PageContainer;