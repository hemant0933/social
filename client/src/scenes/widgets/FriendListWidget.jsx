import { Box, Typography, useTheme } from "@mui/material";
import React, { useEffect } from "react";
import WidgetWrapper from "../../components/WidgetWrapper";
import Friend from "../../components/Friend";
import { setFriends } from "../../state/store";
import { useDispatch, useSelector } from "react-redux";

const FriendListWidget = ({ userId }) => {
  const dispatch = useDispatch();
  const { palette } = useTheme();
  const token = useSelector((state) => state.token);
  const friends = useSelector((state) => state.user.friends);
  // const BASE_URL ="https://social-pvx3.onrender.com";

  const getFriends = async () => {
    const response = await fetch(
      `https://backend-fuhg.onrender.com/users/${userId}/friends`,
      {
        method: "GET",
        headers: { Authorization: `Bearer ${token}` },
      }
    );
    const data = await response.json();
    dispatch(setFriends({ friends: data }));
  };

  useEffect(() => {
    getFriends();
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  return (
    <WidgetWrapper>
      <Typography
        color={palette.neutral.dark}
        variant="h5"
        fontWeight="500"
        sx={{mb:"1.5rem"}} 
      >
        Friend List
      </Typography>
      <Box display="flex" flexDirection="column" gap="1.5rem">
        {Array.isArray(friends) && friends.map((friend) => (
            <Friend 
                key={friend._id}
                friendId={friend._id}
                name={`${friend.firstName} ${friend.lastName}`}
                subtitle={friend.occupation}
                userPicturePath={friend.picturePath}
            />
        ))}
      </Box>
    </WidgetWrapper>
  );
};

export default FriendListWidget;
