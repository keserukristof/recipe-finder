import { FunctionComponent, useState } from "react";
import { Card as MuCard, CardContent, Typography, CardActions, Collapse, IconButton } from '@mui/material';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

import { ExpandMore } from "../../styled-components/expand-more.component";


interface ExpandableCardProps {
    title: string;
    expandedContent: JSX.Element;
}

export const ExpandableCard: FunctionComponent<ExpandableCardProps> = ({ title, expandedContent }) => {
    const [expanded, setExpanded] = useState(false);

    const handleExpandClick = () => {
        setExpanded(!expanded);
    };

    return (
        <MuCard sx={{display: 'inline-flex', flexDirection: 'column', alignItems: 'flex-start'}}>
            <CardContent>
                <Typography variant="h5" component="div">
                    {title}
                </Typography>
            </CardContent>
            <CardActions disableSpacing>
                <IconButton aria-label="add to favorites">
                    <FavoriteIcon />
                </IconButton>
                <ExpandMore
                    expand={expanded}
                    onClick={handleExpandClick}
                    aria-expanded={expanded}
                    aria-label="show more"
                >
                    <ExpandMoreIcon />
                </ExpandMore>
            </CardActions>
            <Collapse in={expanded} timeout="auto" unmountOnExit>
                <CardContent>
                    {expandedContent}
                </CardContent>
            </Collapse>
        </MuCard>
    );
};