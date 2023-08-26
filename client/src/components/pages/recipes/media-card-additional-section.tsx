import { FunctionComponent } from "react";
import { Divider, Grid } from "@mui/material";
import { AccessTime, Speed } from '@mui/icons-material';
import StyledRecipeAdditionalInformationBox from "../../../styled-components/recipe-additional-information-box.component";


interface MediaCardAdditionalSectionProps {
    preparationTime: number;
    complexity: string;
}

export const MediaCardAdditionalSection: FunctionComponent<MediaCardAdditionalSectionProps> = ({ preparationTime, complexity }) => {
    return (
        <>
            <Divider variant="middle" sx={{ m: 2 }} />
            <Grid container spacing={2} justifyContent="space-evenly" alignItems="center">
                <StyledRecipeAdditionalInformationBox>
                    <AccessTime sx={{ mr: 1 }} />
                    {preparationTime} min
                </StyledRecipeAdditionalInformationBox>
                <StyledRecipeAdditionalInformationBox>
                    <Speed sx={{ mr: 1 }} />
                    {complexity}
                </StyledRecipeAdditionalInformationBox>
            </Grid>
        </>
    );
}