import { FunctionComponent, useState } from "react";
import { Card as MuCard, CardContent, Typography, CardActions, Collapse, IconButton, Grid } from '@mui/material';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import ClearIcon from '@mui/icons-material/Clear';

import { ExpandMore } from "../../styled-components/expand-more.component";


interface ExpandableCardProps {
    id: number;
    title: string;
    expandedContent: JSX.Element;
    minWidth: string;
    isIcon?: boolean;
    icon?: JSX.Element;
    handleRemoveClick: (id: number) => void;
}

export const ExpandableCard: FunctionComponent<ExpandableCardProps> = ({ id, title, expandedContent, isIcon, icon, handleRemoveClick}) => {
    const [expanded, setExpanded] = useState(false);

    const handleExpandClick = () => {
        setExpanded(!expanded);
    };

    return (
        <MuCard sx={{ display: 'inline-flex', flexDirection: 'column', alignItems: 'flex-start', minWidth: '170px' }}>
            <CardContent sx={{ width: '100%' }}>
                <Grid container
                    justifyContent="space-between"
                    alignItems="center">
                    <Grid item>
                        <Typography variant="h5" component="div">
                            {title} {isIcon ? icon : ''}
                        </Typography>
                    </Grid>
                    <Grid item>
                        <IconButton aria-label="remove ingredient">
                            <ClearIcon onClick={() => handleRemoveClick(id)}/>
                        </IconButton>
                    </Grid>
                </Grid>
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