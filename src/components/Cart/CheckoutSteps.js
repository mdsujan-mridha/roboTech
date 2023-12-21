import { AccountBalance, LibraryAddCheck, LocalShipping } from '@mui/icons-material';
import { Step, StepLabel, Stepper, Typography } from '@mui/material';
import React, { Fragment } from 'react';
import "./cart.css";

const CheckoutSteps = ({ activeStep }) => {

    const steps = [
        {
            label: <Typography> Shipping Details </Typography>,
            icon: <LocalShipping />
        },
        {
            label: <Typography> Confirm </Typography>,
            icon: <LibraryAddCheck />
        },
        {
            label: <Typography> Payment </Typography>,
            icon: <AccountBalance />
        },

    ]
    const stepsStyle = {
        boxSizing: "border-box"
    }

    return (
        <Fragment>
            <Stepper alternativeLabel activeStep={activeStep}
                style={stepsStyle}
            >
                {
                    steps.map((item, index) => (
                        <Step
                            key={index}
                            active={activeStep === index ? true : false}
                            completed={activeStep >= index ? true : false}
                        >
                            <StepLabel style={{
                                color: activeStep >= index ? "tomato" : "white"
                            }}
                                icon={item.icon}
                            >
                            </StepLabel>

                        </Step>
                    ))
                }
            </Stepper>
        </Fragment>
    );
};

export default CheckoutSteps;