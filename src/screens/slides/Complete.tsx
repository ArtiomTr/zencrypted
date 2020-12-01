import React from 'react';
import Illustration from 'assets/images/complete.svg';

import { Typography } from 'components/material/Typography';
import { sharedStyles, Slide } from './Slide';

export const SCREEN_KEY_COMPLETE = 'slides/complete';

export const Complete = () => (
    <Slide heading={<Illustration width="100%" height="100%" />} title="That's it!">
        <Typography style={sharedStyles.info}>
            Everything is set up! Click finish to apply the settings and start using the
            application.
        </Typography>
    </Slide>
);
