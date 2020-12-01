import React from 'react';
import Illustration from 'assets/images/welcome.svg';

import { Typography } from 'components/material/Typography';
import { useLoggedAccount } from 'components/zencryptState/useLoggedAccount';
import { sharedStyles, Slide } from './Slide';

export const SCREEN_KEY_WELCOME = 'slides/welcome';

export const Welcome = () => {
    const account = useLoggedAccount();

    return (
        <Slide title={`Hi, ${account?.name}`} heading={<Illustration width="100%" height="100%" />}>
            <Typography style={sharedStyles.info}>
                Nice to meet you. We have some additional settings for you. You can skip them now,
                and configure them later in "Settings" tab.
            </Typography>
        </Slide>
    );
};
