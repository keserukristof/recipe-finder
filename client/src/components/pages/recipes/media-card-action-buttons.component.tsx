import { FunctionComponent } from "react";
import { Link } from "react-router-dom";
import { Button, CardActions } from "@mui/material";


interface MediaCardActionButtonsProps {
    linkPath: string;
    id: number;
    buttonLabel: string;
}

export const MediaCardActionButtons: FunctionComponent<MediaCardActionButtonsProps> = ({ linkPath, id, buttonLabel }) => {
    return (
    <CardActions>
        <Link to={`/${linkPath}/${id}`}>
            <Button size="small">{buttonLabel}</Button>
        </Link>
    </CardActions>
    );
}