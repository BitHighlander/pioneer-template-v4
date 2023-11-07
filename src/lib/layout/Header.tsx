import { Box, Flex } from '@chakra-ui/react';
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import { Pioneer } from '@pioneer-platform/pioneer-react';

import ThemeToggle from './ThemeToggle';

const Header = () => {
  return (
    <Flex
      as="header"
      width="full"
      align="center"
      alignSelf="flex-start"
      justifyContent="center"
      gridGap={2}
    >
      <Box marginLeft="auto">
        <ThemeToggle />
      </Box>
      <Pioneer />
    </Flex>
  );
};

export default Header;
