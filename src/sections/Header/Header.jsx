import { Link } from "react-router-dom";
import {
  Box,
  Button,
  Container,
  Grid,
  GridItem,
  HStack,
  IconButton,
  Input,
  InputGroup,
  InputRightElement,
  useColorMode,
  useColorModeValue as mode,
} from "@chakra-ui/react";
import Icon from "../../components/Icon/Icon";

const Header = () => {
  const { colorMode, toggleColorMode } = useColorMode();

  return (
    <Box bg={mode("white", "gray.800")}>
      <Container maxW="container.lg">
        <Grid
          templateColumns="auto 1fr auto"
          h="14"
          alignItems="center"
          gap="10"
        >
          <GridItem>
            <HStack spacing="10">
              <Box
                as={Link}
                to="/"
                fontWeight="semibold"
                fontSize="xl"
                fontStyle="italic"
                textTransform="uppercase"
                borderBottom="2px"
                borderBottomColor="black"
              >
                Sater
              </Box>
              <Button leftIcon={<Icon name="grid_view" />}>Kataloq</Button>
            </HStack>
          </GridItem>
          <GridItem>
            <InputGroup>
              <Input placeholder="Search..." />
              <InputRightElement>
                <IconButton icon={<Icon name="search" size={20} />} size="sm" />
              </InputRightElement>
            </InputGroup>
          </GridItem>
          <GridItem>
            <HStack spacing="3">
              <IconButton
                icon={<Icon name={`${colorMode}_mode`} />}
                onClick={toggleColorMode}
              />
              <Button leftIcon={<Icon name="add" />} variant="primary">
                Yeni Elan
              </Button>
            </HStack>
          </GridItem>
        </Grid>
      </Container>
    </Box>
  );
};

export default Header;
