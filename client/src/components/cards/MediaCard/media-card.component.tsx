import { FunctionComponent } from "react";
import { Card as MuCard, CardContent, Typography, CardActions, CardMedia, Button } from '@mui/material';

import foodImage from "../../../static/images/food.jpg"


interface MediaCardProps {
    id: number;
    title: string;
    description: string;
    buttonLabel: string;
}

export const MediaCard: FunctionComponent<MediaCardProps> = ({ id, title, description, buttonLabel }) => {
    return (
        <MuCard sx={{ maxWidth: 250 }}>
            <CardMedia
                sx={{ height: 140 }}
                image={foodImage}
            />
            <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                    {title}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                    {description}
                </Typography>
            </CardContent>
            <CardActions>
                <Button size="small">{buttonLabel}</Button>
            </CardActions>
        </MuCard>
    );
};