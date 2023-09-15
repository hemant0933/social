import React, { useState } from "react";
import {
  Box,
  IconButton,
  InputBase,
  Typography,
  Select,
  MenuItem,
  FormControl,
  useTheme,
  useMediaQuery,
} from "@mui/material";
import {
  Search,
  Message,
  DarkMode,
  LightMode,
  Notifications,
  Help,
  Menu,
  Close,
} from "@mui/icons-material";
import { useDispatch, useSelector } from "react-redux";
import { setMode, setLogout } from "../../state/store.js";
import { useNavigate } from "react-router-dom";
import FlexBetween from "../../components/FlexBetween";
import { fontTokens } from "../../theme.js";

const Navbar = () => {
  const [isMobileMenuToggled, setIsMobileMenuToggled] = useState(false);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const user = useSelector((state) => state.user);
  const isNonMobileScreens = useMediaQuery("(min-width: 1000px)");

  const theme = useTheme();
  const neutralLight = theme.palette.neutral.light;
  const dark = theme.palette.neutral.dark;
  const background = theme.palette.background.default;
  const primaryLight = theme.palette.neutral.purple;
  const alt = theme.palette.background.alt;
  const light = theme.palette.neutral.main;
  // const font1 = theme.palette.fontStyle.fontFamily2;

  const fullName = user ? `${user.firstName} ${user.lastName}` : "";

  return (
    <FlexBetween padding="1rem 6%" backgroundColor={alt}>
      <FlexBetween gap="1.75rem">
        <Typography
        display='flex'
        alignItems='center'
        gap='0.5rem'
          fontWeight="bold"
          fontFamily={fontTokens.italiana}
          fontSize="clamp(1rem, 2rem, 2.25rem)"
          color={primaryLight}
          onClick={() => navigate("/home")}
          sx={{
            "&:hover": {
              color: light,
              cursor: "pointer",
            },
          }}
        >
          <svg width="40" height="40" viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg"> <g clip-path="url(#clip0_104_116)"> <path fill-rule="evenodd" clip-rule="evenodd" d="M103.143 0C105.352 0 107.143 1.79086 107.143 4V42.6749C107.143 47.0714 113.205 48.2497 114.852 44.1733L129.339 8.31456C130.167 6.26628 132.498 5.27669 134.547 6.10425L140.375 8.45892C142.423 9.28648 143.413 11.6178 142.585 13.6661L127.14 51.8948C125.507 55.935 130.595 59.3029 133.677 56.2217L162.831 27.0669C164.394 25.5048 166.926 25.5048 168.488 27.0669L172.933 31.5116C174.495 33.0737 174.495 35.6063 172.933 37.1684L146.752 63.3494C143.627 66.4748 147.132 71.6128 151.182 69.8432L185.11 55.0196C187.135 54.1351 189.493 55.0592 190.377 57.0835L192.894 62.8435C193.778 64.8679 192.854 67.2259 190.83 68.1104L151.734 85.1917C147.762 86.927 149.001 92.8571 153.335 92.8571H196C198.209 92.8571 200 94.648 200 96.8571V103.143C200 105.352 198.209 107.143 196 107.143H153.336C149.001 107.143 147.763 113.073 151.734 114.808L190.83 131.89C192.854 132.774 193.778 135.132 192.894 137.156L190.377 142.916C189.493 144.941 187.135 145.865 185.11 144.98L151.182 130.157C147.132 128.387 143.627 133.525 146.752 136.651L172.933 162.831C174.495 164.394 174.495 166.926 172.933 168.488L168.488 172.933C166.926 174.495 164.394 174.495 162.831 172.933L133.677 143.778C130.595 140.697 125.507 144.065 127.14 148.105L142.585 186.334C143.413 188.382 142.423 190.713 140.375 191.541L134.547 193.896C132.498 194.723 130.167 193.734 129.339 191.685L114.852 155.827C113.205 151.75 107.143 152.929 107.143 157.325V196C107.143 198.209 105.352 200 103.143 200H96.8571C94.648 200 92.8571 198.209 92.8571 196V157.325C92.8571 152.929 86.7953 151.75 85.1484 155.827L70.6605 191.685C69.8329 193.734 67.5016 194.723 65.4533 193.896L59.6253 191.541C57.577 190.713 56.5875 188.382 57.415 186.334L72.8605 148.105C74.4929 144.065 69.4046 140.697 66.3233 143.778L37.1685 172.933C35.6064 174.495 33.0737 174.495 31.5117 172.933L27.067 168.488C25.5049 166.926 25.5049 164.394 27.067 162.831L53.2479 136.65C56.3733 133.525 52.8683 128.387 48.818 130.157L14.8895 144.98C12.8652 145.865 10.5071 144.941 9.62265 142.916L7.10607 137.156C6.22161 135.132 7.14568 132.774 9.17004 131.89L48.2657 114.808C52.2374 113.073 50.9985 107.143 46.6642 107.143H4C1.79086 107.143 0 105.352 0 103.143V96.8571C0 94.648 1.79086 92.8571 4 92.8571H46.6644C50.9986 92.8571 52.2376 86.927 48.2659 85.1917L9.17001 68.1104C7.14565 67.2259 6.22158 64.8679 7.10604 62.8435L9.62262 57.0835C10.5071 55.0592 12.8651 54.1351 14.8895 55.0196L48.818 69.8432C52.8683 71.6129 56.3733 66.4748 53.2479 63.3494L27.067 37.1685C25.5049 35.6064 25.5049 33.0737 27.067 31.5116L31.5116 27.067C33.0737 25.5049 35.6064 25.5049 37.1685 27.067L66.3233 56.2218C69.4045 59.303 74.4928 55.9351 72.8605 51.8949L57.415 13.6661C56.5875 11.6178 57.5771 9.28648 59.6253 8.45892L65.4534 6.10425C67.5016 5.27669 69.833 6.26628 70.6605 8.31456L85.1484 44.1733C86.7953 48.2497 92.8571 47.0714 92.8571 42.6749V4C92.8571 1.79086 94.648 0 96.8571 0H103.143ZM100 142.857C123.669 142.857 142.857 123.669 142.857 100C142.857 76.3307 123.669 57.1429 100 57.1429C76.3307 57.1429 57.1429 76.3307 57.1429 100C57.1429 123.669 76.3307 142.857 100 142.857Z" fill="url(#paint0_linear_104_116)"/> </g> <defs> <linearGradient id="paint0_linear_104_116" x1="20.5" y1="16" x2="100" y2="200" gradientUnits="userSpaceOnUse"> <stop stop-color="#ACAAFF"/> <stop offset="1" stop-color="#C0E8FF"/> </linearGradient> <clipPath id="clip0_104_116"> <rect width="200" height="200" fill="white"/> </clipPath> </defs> </svg>
          Captioner
        </Typography>
        {isNonMobileScreens && (
          <FlexBetween
            backgroundColor={neutralLight}
            borderRadius="9px"
            gap="3rem"
            padding="0.1rem 1.5rem"
          >
            <InputBase placeholder="Search..." />
            <IconButton>
              <Search />
            </IconButton>
          </FlexBetween>
        )}
      </FlexBetween>

      {/* DESKTOP NAV */}
      {isNonMobileScreens ? (
        <FlexBetween gap="2rem">
          <IconButton onClick={() => dispatch(setMode())}>
            {theme.palette.mode === "dark" ? (
              <DarkMode sx={{ fontSize: "25px" }} />
            ) : (
              <LightMode sx={{ color: dark, fontSize: "25px" }} />
            )}
          </IconButton>
          <Message sx={{ fontSize: "25px" }} />
          <Notifications sx={{ fontSize: "25px" }} />
          <Help sx={{ fontSize: "25px" }} />
          <FormControl variant="standard" value={fullName}>
            <Select
              value={fullName}
              sx={{
                backgroundColor: neutralLight,
                width: "150px",
                borderRadius: "0.25rem",
                p: "0.25rem 1rem",
                "& .MuiSvgIcon-root": {
                  pr: "0.25rem",
                  width: "3rem",
                },
                "& .MuiSelect-select:focus": {
                  backgroundColor: neutralLight,
                },
              }}
              input={<InputBase />}
            >
              <MenuItem value={fullName}>
                <Typography>{fullName}</Typography>
              </MenuItem>
              <MenuItem onClick={() => dispatch(setLogout())}>Log Out</MenuItem>
            </Select>
          </FormControl>
        </FlexBetween>
      ) : (
        <IconButton
          onClick={() => setIsMobileMenuToggled(!isMobileMenuToggled)}
        >
          <Menu />
        </IconButton>
      )}

      {/* MOBILE NAV */}
      {!isNonMobileScreens && isMobileMenuToggled && (
        <Box
          position="fixed"
          right="0"
          bottom="0"
          height="100%"
          zIndex="10"
          maxWidth="500px"
          minWidth="300px"
          backgroundColor={background}
        >
          {/* CLOSE ICON */}
          <Box display="flex" justifyContent="flex-end" p="1rem">
            <IconButton
              onClick={() => setIsMobileMenuToggled(!isMobileMenuToggled)}
            >
              <Close />
            </IconButton>
          </Box>

          {/* MENU ITEMS */}
          <FlexBetween
            display="flex"
            flexDirection="column"
            justifyContent="center"
            alignItems="center"
            gap="3rem"
          >
            <IconButton
              onClick={() => dispatch(setMode())}
              sx={{ fontSize: "25px" }}
            >
              {theme.palette.mode === "dark" ? (
                <DarkMode sx={{ fontSize: "25px" }} />
              ) : (
                <LightMode sx={{ color: dark, fontSize: "25px" }} />
              )}
            </IconButton>
            <Message sx={{ fontSize: "25px" }} />
            <Notifications sx={{ fontSize: "25px" }} />
            <Help sx={{ fontSize: "25px" }} />
            <FormControl variant="standard" value={fullName}>
              <Select
                value={fullName}
                sx={{
                  backgroundColor: neutralLight,
                  width: "150px",
                  borderRadius: "0.25rem",
                  p: "0.25rem 1rem",
                  "& .MuiSvgIcon-root": {
                    pr: "0.25rem",
                    width: "3rem",
                  },
                  "& .MuiSelect-select:focus": {
                    backgroundColor: neutralLight,
                  },
                }}
                input={<InputBase />}
              >
                <MenuItem value={fullName}>
                  <Typography>{fullName}</Typography>
                </MenuItem>
                <MenuItem onClick={() => dispatch(setLogout())}>
                  Log Out
                </MenuItem>
              </Select>
            </FormControl>
          </FlexBetween>
        </Box>
      )}
    </FlexBetween>
  );
};

export default Navbar;
