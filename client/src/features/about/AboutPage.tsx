import React from 'react';
import { Container, Typography, Box, Grid, Paper, Divider, Avatar, Button } from '@mui/material';
import { GitHub, LinkedIn } from '@mui/icons-material';

const AboutPage: React.FC = () => {
    return (
        <Container>
            {/* Header Section */}
            <Box textAlign="center" mb={4}>
                <Typography variant="h2" gutterBottom>
                    Welcome to Eshopperz
                </Typography>
                <Typography variant="h5" color="textSecondary">
                    Your one-stop shop for the latest trends in fashion, electronics, and more!
                </Typography>
            </Box>

            {/* Description Section */}
            <Paper elevation={3} sx={{ padding: 3, marginBottom: 4 }}>
                <Typography variant="h4" gutterBottom>
                    About Us
                </Typography>
                <Typography paragraph>
                    At Eshopperz, we are dedicated to providing you with the best shopping experience. We offer a wide range of products, from the latest fashion trends to cutting-edge electronics. Our mission is to deliver high-quality products at competitive prices while ensuring exceptional customer service.
                </Typography>
                <Typography paragraph>
                    Founded in 2021, Eshopperz has quickly become a favorite destination for online shoppers. We pride ourselves on our commitment to quality and customer satisfaction. Our team works tirelessly to curate the best products and ensure that you have a seamless shopping experience from start to finish.
                </Typography>
                <Typography paragraph>
                    Explore our collections, find your favorites, and experience shopping like never before. Thank you for choosing Eshopperz!
                </Typography>
            </Paper>

            {/* Mission and Vision Sections */}
            <Box mb={4}>
                <Typography variant="h4" gutterBottom>
                    Our Mission
                </Typography>
                <Paper elevation={2} sx={{ padding: 3, mb: 3 }}>
                    <Typography paragraph>
                        Our mission is to enhance the shopping experience by offering a diverse selection of high-quality products at affordable prices. We strive to exceed customer expectations with exceptional service and innovative solutions. Our goal is to create a shopping destination that combines convenience, variety, and value for our customers.
                    </Typography>
                </Paper>
                
                <Typography variant="h4" gutterBottom>
                    Our Vision
                </Typography>
                <Paper elevation={2} sx={{ padding: 3 }}>
                    <Typography paragraph>
                        Our vision is to be the leading online retailer known for our commitment to quality, customer satisfaction, and technological innovation. We aim to continuously improve our offerings and services to meet the evolving needs of our customers, while fostering a community of loyal shoppers who trust Eshopperz for their diverse shopping needs.
                    </Typography>
                </Paper>
            </Box>

            {/* Social Media Section */}
            <Box textAlign="center" mb={4}>
                <Typography variant="h5" gutterBottom>
                    Follow Us
                </Typography>
                <Box>
                    <Button
                        href="https://github.com/eshopperz"
                        target="_blank"
                        rel="noopener noreferrer"
                        startIcon={<GitHub />}
                        variant="contained"
                        color="primary"
                        sx={{ margin: 1 }}
                    >
                        GitHub
                    </Button>
                    <Button
                        href="https://linkedin.com/company/eshopperz"
                        target="_blank"
                        rel="noopener noreferrer"
                        startIcon={<LinkedIn />}
                        variant="contained"
                        color="primary"
                        sx={{ margin: 1 }}
                    >
                        LinkedIn
                    </Button>
                </Box>
            </Box>

            {/* Team Section */}
            <Typography variant="h4" gutterBottom>
                Meet Our Team
            </Typography>
            <Grid container spacing={3}>
                <Grid item xs={12} sm={6} md={4}>
                    <Paper elevation={3} sx={{ padding: 2 }}>
                        <Box display="flex" alignItems="center">
                            <Avatar alt="Team Member 1" src="/path/to/team-member-1.jpg" sx={{ width: 60, height: 60, marginRight: 2 }} />
                            <Box>
                                <Typography variant="h6">Jane Doe</Typography>
                                <Typography variant="body2" color="textSecondary">
                                    CEO
                                </Typography>
                            </Box>
                        </Box>
                        <Typography paragraph mt={2}>
                            Jane is the visionary behind Eshopperz, leading the company with a passion for innovation and excellence.
                        </Typography>
                    </Paper>
                </Grid>
                <Grid item xs={12} sm={6} md={4}>
                    <Paper elevation={3} sx={{ padding: 2 }}>
                        <Box display="flex" alignItems="center">
                            <Avatar alt="Team Member 2" src="/path/to/team-member-2.jpg" sx={{ width: 60, height: 60, marginRight: 2 }} />
                            <Box>
                                <Typography variant="h6">John Smith</Typography>
                                <Typography variant="body2" color="textSecondary">
                                    CTO
                                </Typography>
                            </Box>
                        </Box>
                        <Typography paragraph mt={2}>
                            John is responsible for ensuring that Eshopperz remains at the forefront of e-commerce technology.
                        </Typography>
                    </Paper>
                </Grid>
                <Grid item xs={12} sm={6} md={4}>
                    <Paper elevation={3} sx={{ padding: 2 }}>
                        <Box display="flex" alignItems="center">
                            <Avatar alt="Team Member 3" src="/path/to/team-member-3.jpg" sx={{ width: 60, height: 60, marginRight: 2 }} />
                            <Box>
                                <Typography variant="h6">Alice Johnson</Typography>
                                <Typography variant="body2" color="textSecondary">
                                    Head of Marketing
                                </Typography>
                            </Box>
                        </Box>
                        <Typography paragraph mt={2}>
                            Alice leads our marketing efforts, ensuring that our brand reaches the right audience and resonates with our customers.
                        </Typography>
                    </Paper>
                </Grid>
            </Grid>
        </Container>
    );
};

export default AboutPage;
