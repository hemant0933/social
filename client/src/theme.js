// export const colorTokens2 = {
//   bgWhite: "#e5dddf",
//   black: "#191825",
//   blue: "#865dff",
//   purple1: "#e384ff",
//   purple2: "#ffa3fd",
// }

export const fontTokens = {
  italiana: "Italiana, serif",
  marcellus: "Marcellus, serif",
  mulish: "Mulish, sans-serif",
  workSans: "Work Sans, sans-serif",
};
// color design tokens export
export const colorTokens = {
  grey: {
    0: "#FFFFFF",
    10: "#F6F6F6",
    50: "#F0F0F0",
    100: "#E0E0E0",
    200: "#C2C2C2",
    300: "#A3A3A3",
    400: "#858585",
    500: "#666666",
    600: "#4D4D4D",
    700: "#333333",
    800: "#1A1A1A",
    900: "#0A0A0A",
    1000: "#000000",
  },
  primary: {
    50: "#E6FBFF",
    100: "#CCF7FE",
    200: "#99EEFD",
    300: "#66E6FC",
    400: "#33DDFB",
    500: "#00D5FA",
    600: "#00A0BC",
    700: "#006B7D",
    800: "#00353F",
    900: "#001519",
    1000: "#BC7AF9",
  },
};

// palette.primary.purple

// mui theme settings
export const themeSettings = (mode) => {
  return {
    palette: {
      mode: mode,
      ...(mode === "dark"
        ? {
            // palette values for dark mode
            primary: {
              dark: colorTokens.primary[200],
              main: colorTokens.primary[500],
              light: colorTokens.primary[800],
              purple: colorTokens.primary[1000],
            },
            neutral: {
              dark: colorTokens.grey[100],
              main: colorTokens.grey[200],
              mediumMain: colorTokens.grey[300],
              medium: colorTokens.grey[400],
              light: colorTokens.grey[700],
            },
            background: {
              default: colorTokens.grey[900],
              alt: colorTokens.grey[800],
            },
          }
        : {
            // palette values for light mode
            primary: {
              dark: colorTokens.primary[700],
              main: colorTokens.primary[500],
              light: colorTokens.primary[50],
              purple: colorTokens.primary[1000],
            },
            neutral: {
              dark: colorTokens.grey[700],
              main: colorTokens.grey[500],
              mediumMain: colorTokens.grey[400],
              medium: colorTokens.grey[300],
              light: colorTokens.grey[50],
            },
            background: {
              default: colorTokens.grey[10],
              alt: colorTokens.grey[0],
            },
          }),
    },
    typography: {
      fontFamily: fontTokens.mulish,
      fontSize: 12,
      h1: {
        fontFamily: fontTokens.mulish,
        fontSize: 40,
      },
      h2: {
        fontFamily: fontTokens.mulish,
        fontSize: 32,
      },
      h3: {
        fontFamily: fontTokens.mulish,
        fontSize: 24,
      },
      h4: {
        fontFamily: fontTokens.mulish,
        fontSize: 20,
      },
      h5: {
        fontFamily: fontTokens.mulish,
        fontSize: 16,
      },
      h6: {
        fontFamily: fontTokens.mulish,
        fontSize: 14,
      },
    },
  };
};