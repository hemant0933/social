import React from 'react';
import WidgetWrapper from '../../components/WidgetWrapper';
import FlexBetween from '../../components/FlexBetween';
import { useTheme } from '@emotion/react';
import { Typography } from '@mui/material';

const AdvertWidget = () => {
    const {palette} = useTheme();
    const dark = palette.neutral.dark;
    const main = palette.neutral.main;
    const medium = palette.neutral.medium;
    const BASE_URL = process.env.REACTBASE_URL;
    

  return (
    <WidgetWrapper>
      <FlexBetween>
        <Typography color={dark} varient="h5" fontWeight="500">
            Sponsored
        </Typography>
        <Typography color={medium}>Create Ad</Typography>
      </FlexBetween>
      <img
        width="100%"
        height="auto"
        alt='advert'
        src={`${BASE_URL}/assets/info4.jpeg`}
        style={{borderRadius:"0.75rem",margin:"0.75rem 0"}}
      />
      <FlexBetween>
        <Typography color={main}>MacCosmetics</Typography>
        <Typography color={medium}>maccosmetics.com</Typography>
      </FlexBetween>
      <Typography color={medium} m="0.5rem 0">
       Take a peek at fall’s most popular looks.
      </Typography>
    </WidgetWrapper>
  );
}

export default AdvertWidget;
