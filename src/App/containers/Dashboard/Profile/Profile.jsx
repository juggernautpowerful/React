import React from "react";
import { connect } from "react-redux";
import {
  actions,
  isUpdatedCardSelector,
  cardDataSelector,
  errorSelector,
} from "../../../store/Card";
import { Grid, Typography, Paper } from "@material-ui/core";
import Background from "../../../../Images/login-background.jpg";
import commonClasses from "../../../Common.module.css";
import { ProfileForm } from "./components/ProfileForm";
import { CompleteProfile } from "./components/CompleteProfile";
const mapStateToProps = (state) => ({
  isUpdatedCard: isUpdatedCardSelector(state),
  cardData: cardDataSelector(state),
  error: errorSelector(state),
});
const mapDispatchToProps = (dispatch) => ({
  cardSave: (value) => dispatch(actions.cardSave(value)),
});
class Profile extends React.PureComponent {
  render() {
    const { isUpdatedCard, cardData, cardSave, error } = this.props;
    return (
      <Paper
        elevation={1}
        style={{
          backgroundSize: "cover",
          backgroundImage: `url(${Background})`,
        }}
      >
        <Grid
          container
          alignItems="center"
          direction="column"
          style={{ minHeight: "100vh" }}
        >
          <Grid item>
            <Paper elevation={1} className={commonClasses.wrapPaper}>
              <Typography align="center" variant="h4" component="h1">
                Профиль
              </Typography>
              <Typography
                align="center"
                variant="body1"
                gutterBottom
                style={{
                  marginBottom: "40px",
                  color: "rgba(0, 0, 0, 0.54)",
                }}
              >
                Способ оплаты
              </Typography>
              {isUpdatedCard ? (
                <CompleteProfile error={error} />
              ) : (
                <ProfileForm cardData={cardData} cardSave={cardSave} />
              )}
            </Paper>
          </Grid>
        </Grid>
      </Paper>
    );
  }
}
const connectedProfile = connect(mapStateToProps, mapDispatchToProps)(Profile);
export { connectedProfile as Profile };