import React from 'react';
import { Container, Typography, Box, Paper } from '@mui/material';

const ContactPage: React.FC = () => {
    return (
        <Container>
            <Typography variant="h2" gutterBottom align="center">
                Contact Us
            </Typography>

            {/* Contact Information */}
            <Box mb={4}>
                <Paper elevation={3} sx={{ padding: 3, mb: 3 }}>
                    <Typography variant="h4" gutterBottom>
                        Get in Touch
                    </Typography>
                    <Typography paragraph>
                        We would love to hear from you! Whether you have a question, feedback, or just want to say hello, feel free to reach out to us.
                    </Typography>
                    <Typography variant="h6" gutterBottom>
                        Contact Information
                    </Typography>
                    <Typography paragraph>
                        <strong>Email:</strong> support@eshopperz.com
                    </Typography>
                    <Typography paragraph>
                        <strong>Phone:</strong> +44 20 7946 0958
                    </Typography>
                </Paper>
            </Box>

            {/* Address Section */}
            <Box>
                <Paper elevation={3} sx={{ padding: 3 }}>
                    <Typography variant="h4" gutterBottom>
                        Our Address
                    </Typography>
                    <Typography paragraph>
                        123 Eshopperz Lane, London, SW1A 1AA, United Kingdom
                    </Typography>
                </Paper>
            </Box>
        </Container>
    );
};

export default ContactPage;
