import React from "react";
import {
  Card,
  CardContent,
  Typography,
  Grid,
  Container,
} from "@material-ui/core";
import "./Card.css";

export const Cards = ({ status, description, value, date, styling }) => {
  return (
    <div>
      <Container fixed>
        <Grid container spacing={2}  justify="center">
          <Grid item component={Card} className={status===styling?styling:'Deaths'}>
            <CardContent>
              <Typography color="textSecondary" gutterBottom>
                {status}
              </Typography>
              <Typography variant="h5">{value}</Typography>
              <Typography color="textSecondary">
                Last update
                <br />
                <span>{new Date(date).toDateString()}</span>
              </Typography>
              <Typography variant="body2">{description}</Typography>
            </CardContent>
          </Grid>
        </Grid>
      </Container>
    </div>
  );
};
