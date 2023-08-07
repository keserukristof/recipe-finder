import { FunctionComponent } from "react";
import { Box, Card as MuCard, CardContent, Typography, CardActions, Button } from '@mui/material';


interface CardProps {
    title: string;
    content: JSX.Element;
}

export const Card: FunctionComponent<CardProps> = ({ title, content }) => {
    return (
        <Box sx={{ maxWidth: 275 }}>
            <MuCard variant="outlined">
                <CardContent>
                    <Typography variant="h5" component="div">
                        {title}
                    </Typography>
                </CardContent>
                <CardActions>
                    <Button size="small">Mutrition Table</Button>
                </CardActions>
            </MuCard>
        </Box>
    );
};