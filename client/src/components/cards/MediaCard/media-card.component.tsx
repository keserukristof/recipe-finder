import { FunctionComponent } from "react";
import { Link } from "react-router-dom";
import { Card as MuCard, CardContent, Typography, CardActions, CardMedia, Button } from '@mui/material';

import "./media-card.css"
import foodImage from "../../../static/images/food.jpg"


interface MediaCardProps {
    id: number;
    title: string;
    description: string;
    buttonLabel: string;
    linkPath: string;
}

export const MediaCard: FunctionComponent<MediaCardProps> = ({ id, title, description, buttonLabel, linkPath }) => {
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
                <hr className="media-card-separator"/>
            </CardContent>
            <CardActions>
                <Link to={`/${linkPath}/${id}`}>
                    <Button size="small">{buttonLabel}</Button>
                </Link>
            </CardActions>
        </MuCard>
    );
};