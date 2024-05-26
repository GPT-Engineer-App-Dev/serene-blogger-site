import { Box, Container, Flex, Heading, Link, Text, VStack, HStack, Divider, IconButton, Button } from "@chakra-ui/react";
import { FaTwitter, FaFacebook, FaInstagram } from "react-icons/fa";
import { useEffect, useState } from "react";
import { Link as RouterLink } from "react-router-dom";

const Index = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const storedPosts = JSON.parse(localStorage.getItem("posts")) || [];
    setPosts(storedPosts);
  }, []);

  return (
    <Container maxW="container.xl">
      {/* Navigation Bar */}
      <Flex as="nav" bg="gray.800" color="white" p={4} justifyContent="space-between" alignItems="center">
        <Heading as="h1" size="lg">My Blog</Heading>
        <HStack spacing={4}>
          <Link as={RouterLink} to="/" color="white">Home</Link>
          <Link as={RouterLink} to="#" color="white">About</Link>
          <Link as={RouterLink} to="#" color="white">Blog</Link>
          <Link as={RouterLink} to="#" color="white">Contact</Link>
        </HStack>
      </Flex>

      {/* Main Content */}
      <Flex mt={8} direction={{ base: "column", md: "row" }}>
        {/* Blog Posts Section */}
        <Box flex="3" mr={{ md: 8 }}>
          <Flex justifyContent="space-between" alignItems="center" mb={4}>
            <Heading as="h2" size="xl">Blog Posts</Heading>
            <Button as={RouterLink} to="/add-post" colorScheme="blue">Add New Post</Button>
          </Flex>
          <VStack spacing={8} align="stretch">
            {posts.map((post, index) => (
              <Box key={index} p={5} shadow="md" borderWidth="1px">
                <Heading fontSize="xl">{post.title}</Heading>
                {post.image && <Box mt={4}><img src={post.image} alt={post.title} /></Box>}
                <Text mt={4}>{post.content}</Text>
              </Box>
            ))}
          </VStack>
        </Box>

        {/* Sidebar */}
        <Box flex="1" mt={{ base: 8, md: 0 }}>
          <Heading as="h3" size="lg" mb={4}>Recent Posts</Heading>
          <VStack spacing={4} align="stretch">
            {posts.slice(0, 3).map((post, index) => (
              <Link key={index} href="#">{post.title}</Link>
            ))}
          </VStack>
        </Box>
      </Flex>

      {/* Footer */}
      <Box as="footer" bg="gray.800" color="white" py={4} mt={8}>
        <Flex justifyContent="center" mb={4}>
          <IconButton as="a" href="#" aria-label="Twitter" icon={<FaTwitter />} mx={2} />
          <IconButton as="a" href="#" aria-label="Facebook" icon={<FaFacebook />} mx={2} />
          <IconButton as="a" href="#" aria-label="Instagram" icon={<FaInstagram />} mx={2} />
        </Flex>
        <Text textAlign="center">&copy; {new Date().getFullYear()} My Blog. All rights reserved.</Text>
      </Box>
    </Container>
  );
};

export default Index;