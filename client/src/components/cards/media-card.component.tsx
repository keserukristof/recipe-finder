import { FunctionComponent } from "react";
import {
    Card as MuCard,
    CardContent,
    Typography,
    CardMedia,
} from '@mui/material';

import foodImage from "../../static/images/food.jpg";

interface MediaCardProps {
    title: string;
    description: string;
    children?: JSX.Element[];
}


export const MediaCard: FunctionComponent<MediaCardProps> = ({
    title,
    description,
    children
}) => {
    return (
        <MuCard sx={{ maxWidth: 350 }}>
            <CardMedia
                sx={{ height: 140 }}
                image={foodImage}
            />
            <CardContent>
                <Typography gutterBottom variant="h5">
                    {title}
                </Typography>
                <Typography variant="body2" color="text.secondary" sx={{
                    display: '-webkit-box',
                    WebkitBoxOrient: 'vertical',
                    overflow: 'hidden',
                    WebkitLineClamp: 3, // number of lines
                }}>
                    {description}
                </Typography>
            </CardContent>
            {children}
        </MuCard>
    );
};