import { useState } from "react";
import {
    Flex,
    Heading,
    Input,
    Button,
    InputGroup,
    Stack,
    InputLeftElement,
    chakra,
    Box,
    Link,
    Avatar,
    FormControl,
    FormHelperText,
    InputRightElement
} from "@chakra-ui/react";
import { FaUserAlt, FaLock } from "react-icons/fa";

const CFaUserAlt = chakra(FaUserAlt);
const CFaLock = chakra(FaLock);

const Login = () => {
    const [showPassword, setShowPassword] = useState(false);
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleShowClick = () => setShowPassword(!showPassword);

    return (
        <Flex
            flexDirection="column"
            width="100wh"
            height="100vh"
            backgroundImage="url('https://toantuoitho.vn/wp-content/uploads/2021/05/phan-mem-quan-ly-hoc-sinh.png')"
           
            justifyContent="center"
            alignItems="center"
            
        >
            <Stack
                flexDir="column"
                mb="2"
                justifyContent="center"
                alignItems="center"
                backgroundColor="gray.200"
            >
                <Avatar bg="teal.500" marginBottom={3} marginTop={4}/>
                <Heading color="teal.400" marginBottom={3}>Project Mini</Heading>
                <Box minW={{ base: "90%", md: "468px" }}
                    backgroundColor="gray.200" >
                    <form
                   >
                        <Stack
                            spacing={8}
                            p="1rem"
                            // backgroundColor="whiteAlpha.900"
                            backgroundColor="gray.200"
                            boxShadow="md"
                            
                        >
                            <FormControl>
                                <InputGroup
                                    backgroundColor="whiteAlpha.900"
                                >
                                    <InputLeftElement
                                        pointerEvents="none"
                                        children={<CFaUserAlt color="gray.300" />}
                                    />
                                    <Input type="email" placeholder="email address" value={email} onChange={(e) => setEmail(e.target.value)} />
                                   
                                </InputGroup>
                            </FormControl>
                            <FormControl>
                                <InputGroup
                                    backgroundColor="whiteAlpha.900">
                                    <InputLeftElement
                                        pointerEvents="none"
                                        color="gray.300"
                                        children={<CFaLock color="gray.300" />}
                                    />
                                    <Input
                                        type={showPassword ? "text" : "password"}
                                        placeholder="Password"
                                        value={password} onChange={(e) => setPassword(e.target.value)}
                                    />
                                    <InputRightElement width="4.5rem">
                                        <Button h="1.75rem" size="sm" onClick={handleShowClick}>
                                            {showPassword ? "Hide" : "Show"}
                                        </Button>
                                    </InputRightElement>
                                </InputGroup>
                                <FormHelperText textAlign="right">
                                    <Link>forgot password?</Link>
                                </FormHelperText>
                            </FormControl>
                            <Button
                                borderRadius={0}
                                type="submit"
                                variant="solid"
                                colorScheme="teal"
                                width="full"
                            >
                                Login
                            </Button>
                        </Stack>
                    </form>
                </Box>
            </Stack>
            <Box >
                New to us?{" "}
                <Link color="teal.500" href="#">
                    Sign Up
                </Link>
            </Box>
        </Flex>
    );
};

export default Login;
