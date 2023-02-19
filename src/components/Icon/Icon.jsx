import { Center } from "@chakra-ui/react";

const Icon = ({ name, size = 24 }) => {
  return (
    <Center as="span" w={`${size}px`} h={`${size}px`} overflow="hidden">
      <span
        className="material-symbols-rounded"
        style={{ fontSize: `${size}px` }}
      >
        {name}
      </span>
    </Center>
  );
};

export default Icon;
