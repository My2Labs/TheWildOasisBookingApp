import styled from "styled-components";
import GlobalStyles from "../styles/GlobalStyles";
import Button from "../ui/Button";
import Input from "../ui/Input";
import Heading from "../ui/Heading";
import Row from "../ui/Row";

const StyledApp = styled.div`
  background-color: orange;
  padding: 20px;
`;

function App() {
  return (
    <>
      <GlobalStyles />
      <StyledApp>
        <Row>
          <Row type="horizontal">
            <Heading as="h1">The Wild Oasis</Heading>
            <div>
              <Button onClick={() => alert("Check in")}>Check in</Button>
              <Input type="number" placeholder="Number of guests" />
            </div>
          </Row>

          <Row type="horizontal">
            <Heading as="h2">Check in and out</Heading>
            <Button
              variation="secondary"
              size="small"
              onClick={() => alert("Check in")}
            >
              Check in
            </Button>
            <Input type="number" placeholder="Number of guests" />
          </Row>

          <Row>
            <Heading as="h3">Form</Heading>
            <form>
              <Button variation="secondary" onClick={() => alert("Check in")}>
                Check in
              </Button>
              <Input type="number" placeholder="Number of guests" />
            </form>
          </Row>
        </Row>
      </StyledApp>
    </>
  );
}

export default App;
