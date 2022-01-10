import React, { useState, useEffect } from "react";
import dynamic from "next/dynamic";
import { useDispatch, useSelector } from "react-redux";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { styled } from "@mui/material/styles";
import { useTheme, useMediaQuery } from "@mui/material";
import Stack from "@mui/material/Stack";
import Grid from "@mui/material/Grid";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import EmailIcon from "@mui/icons-material/Email";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import { StyledPageGrid } from "../styles/global";
import UseValidationErrors from "../hooks/useValidationErrors";
// import CircularSpinner from "../components/utility/Spinner";
import { sendMail } from "../store/slices/form";
import SEO from "../components/utility/SEO";

const ResponseModal = dynamic(() => import("../components/utility/Modal"), { ssr: false });
const CircularSpinner = dynamic(() => import("../components/utility/Spinner"), { ssr: false });
// const useForm = dynamic(() => import("react-hook-form"), { ssr: false });

// Schema validation
const schema = yup.object().shape({
  firstName: yup.string().trim().required("First name is required"),
  subject: yup.string().trim().required("Subject is required"),
  email: yup.string().trim().email("Email must be a valid email").required("Email is required"),
  message: yup.string().trim().required("Message is required"),
});

export const StyledTxtField = styled(TextField)(({ theme }) => ({
  backgroundColor: theme.palette.common.tertiaryLight,
  marginBottom: "1em",
  marginRight: "1em",
  "&.MuiTextField-root": {
    width: "35%",
    [theme.breakpoints.down("sm")]: {
      width: "63%",
    },
  },
}));

export const StyledBtn = styled(Button)(({ theme }) => ({
  backgroundColor: theme.palette.common.mindPurpDark,
  padding: "1em 0.5em 1em 0.5em",
  height: "3.35em",
  fontSize: "0.875em",
  textTransform: "none",
  fontWeight: 300,
  width: "73%",
  [theme.breakpoints.down("sm")]: {
    width: "63%",
  },
}));

const Contact = () => {
  const [send, setSend] = useState(false);
  const dispatch = useDispatch();
  const theme = useTheme();
  const matchesSM = useMediaQuery(theme.breakpoints.down("sm"));

  const {
    register,
    handleSubmit,
    setError,
    formState: { errors },
    reset,
  } = useForm({ resolver: yupResolver(schema) });

  const onSubmit = data => {
    dispatch(sendMail(data));
  };

  // needed for loading a spinnner
  const { loading } = useSelector(state => state.form);

  // Message been send succesfull?
  const { status } = useSelector(state => state.form.list.receivedResponse);
  // if so reset the form inputs
  useEffect(() => {
    if (status === "Success") {
      reset();
    }
  }, [reset, status]);

  // TODO
  // Could be dynamically imported
  UseValidationErrors(setError);

  return (
    <div>
      <SEO
        title='Mindkeyz | Contact us for info on instrumentals, beat licensing and beat hosting on our YouTube channel.'
        description='description'
        siteTitle='Hit us up for custom dancehall & afobeats, beat hosting on YouTube or just to say hi.'
      />
      <Grid item container sx={{ backgroundColor: theme.palette.common.secondaryDark, height: "auto" }}>
        <StyledPageGrid item>
          <Typography align='center' color={theme.palette.common.tertiary} sx={{ fontSize: "1.9em", fontWeight: 600 }}>
            Get In Touch
          </Typography>
          <Typography variant='body1' align='center' color='text.secondary'>
            Let us know more about you!
          </Typography>
        </StyledPageGrid>
        <Grid item container justifyContent='center' alignItems='center' sx={{ mb: "10em" }}>
          <Grid
            item
            container
            direction={matchesSM ? "column" : "row"}
            md={8}
            sx={{ boxShadow: "0px 3px 15px rgba(0,0,0,0.7)" }}>
            <Grid
              component='form'
              onSubmit={handleSubmit(onSubmit)}
              item
              container
              justifyContent='center'
              sx={{ width: matchesSM ? "100%" : "65%", backgroundColor: "#1B1C1E", pt: matchesSM ? "2.5em" : "4.7em" }}
              noValidate
              autoComplete='off'>
              <Grid
                item
                container
                direction={matchesSM ? "column" : "row"}
                justifyContent='center'
                alignItems={matchesSM ? "center" : undefined}>
                <StyledTxtField
                  error={typeof errors.firstName === "object"}
                  id='filled-multiline-flexible-firstname'
                  label={matchesSM ? "Name" : "First Name"}
                  multiline
                  variant='filled'
                  name='firstName'
                  helperText={errors.firstName?.message}
                  {...register("firstName", { required: true })}
                />
                {matchesSM ? (
                  ""
                ) : (
                  <StyledTxtField
                    id='filled-multiline-flexible-lastname'
                    label='Last Name'
                    multiline
                    variant='filled'
                    name='lastName'
                    helperText=''
                    {...register("lastName", { required: true })}
                  />
                )}
              </Grid>
              <Grid
                item
                container
                direction={matchesSM ? "column" : "row"}
                justifyContent='center'
                alignItems={matchesSM ? "center" : undefined}>
                <StyledTxtField
                  error={typeof errors.subject === "object"}
                  id='filled-multiline-flexible-object'
                  label='Subject'
                  multiline
                  variant='filled'
                  name='subject'
                  helperText={errors.subject?.message}
                  {...register("subject", { required: true })}
                />
                <StyledTxtField
                  error={typeof errors.email === "object"}
                  id='filled-multiline-flexible-email'
                  label='Email'
                  multiline
                  variant='filled'
                  name='email'
                  helperText={errors.email?.message}
                  {...register("email", { required: true })}
                />
              </Grid>
              <Grid item container justifyContent='center'>
                <StyledTxtField
                  error={typeof errors.message === "object"}
                  sx={{
                    "&.MuiTextField-root": {
                      width: matchesSM ? "63%" : "73%",
                    },
                  }}
                  id='filled-multiline-static-message'
                  label='Message'
                  multiline
                  variant='filled'
                  rows={4}
                  name='message'
                  helperText={errors.message?.message}
                  {...register("message", { required: true })}
                />
                <StyledBtn onClick={() => setSend(!send)} variant='contained' sx={{ mr: "1em" }} type='submit'>
                  Send
                </StyledBtn>
              </Grid>
              <Grid item container direction='column' justifyContent='center' alignItems='center' sx={{ my: "1em" }}>
                {loading ? <CircularSpinner /> : <Container sx={{ width: "40px", height: "40px" }} />}
              </Grid>
            </Grid>
            <Grid
              item
              container
              direction='column'
              alignItems='center'
              justifyContent='center'
              sx={{ backgroundColor: "#1B1C1E", width: matchesSM ? "100%" : "35%" }}>
              <Grid
                item
                container
                direction={matchesSM ? "column" : "row"}
                alignItems={matchesSM ? "center" : "flex-end"}
                sx={{ color: "#fff", mb: matchesSM ? "2em" : "1em", mt: matchesSM ? 0 : "-3em" }}>
                <Grid item sx={{ mr: matchesSM ? 0 : "1em" }}>
                  <AccessTimeIcon />
                </Grid>
                <Stack align={matchesSM ? "center" : undefined}>
                  <Typography variant='body2' color='#9fa1a6' sx={{ mb: "0.3em" }}>
                    Opening Hours
                  </Typography>
                  <Typography sx={{ fontSize: "0.8em" }}>Monday - Saturday</Typography>
                  <Typography sx={{ fontSize: "0.8em" }}>8am - 5pm (GMT-3)</Typography>
                </Stack>
              </Grid>
              <Grid
                item
                container
                direction={matchesSM ? "column" : "row"}
                alignItems={matchesSM ? "center" : "flex-end"}
                sx={{ color: "#fff", mb: matchesSM ? "2em" : "1em" }}>
                <Grid item sx={{ mr: matchesSM ? 0 : "1em" }}>
                  <LocationOnIcon />
                </Grid>
                <Stack align={matchesSM ? "center" : undefined}>
                  <Typography variant='body2' color='#9fa1a6' sx={{ mb: "0.3em" }}>
                    Address
                  </Typography>
                  <Typography sx={{ fontSize: "0.8em" }}>Paramaribo, Suriname</Typography>
                  <Typography sx={{ fontSize: "0.8em" }}>South America</Typography>
                </Stack>
              </Grid>
              <Grid
                item
                container
                direction={matchesSM ? "column" : "row"}
                alignItems={matchesSM ? "center" : "flex-end"}
                sx={{ color: "#fff", mb: matchesSM ? "2em" : undefined }}>
                <Grid item sx={{ mr: matchesSM ? 0 : "1em" }}>
                  <EmailIcon />
                </Grid>
                <Stack align={matchesSM ? "center" : undefined}>
                  <Typography variant='body2' color='#9fa1a6' sx={{ mb: "0.3em" }}>
                    Support
                  </Typography>
                  <Typography sx={{ fontSize: "0.8em" }}>Mindkey@gmail.com</Typography>
                </Stack>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
        {send ? <ResponseModal /> : ""}
      </Grid>
    </div>
  );
};

export default Contact;
