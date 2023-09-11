//@ts-nocheck
import { useState } from "preact/hooks";
import { useLocation, useNavigate, Outlet } from "react-router-dom";
import { Box, BottomNavigation, BottomNavigationAction } from "@mui/material";

enum Path {
  post = '/cloud-share/',
  cloud = '/cloud-share/cloud',
}

export default function Layout() {
  const location = useLocation();
  const [path, setPath] = useState<Path>(location.pathname as Path);
  const navigate = useNavigate();

  return (
    <Box
      sx={{
        height: '100vh',
        display: 'flex',
        flexDirection: 'column',
      }}
    >
      <Box
        sx={{
          flex: "1 1 0",
          overflow: "hidden auto",
          height: "100%",
          padding: "0 0.5rem",
        }}
      >
        <Outlet />
      </Box>
      <BottomNavigation
        showLabels
        value={path}
        onChange={(_, newPath) => {
          setPath(newPath);
          navigate(newPath);
        }}
      >
        <BottomNavigationAction
          value={Path.post}
          label='post'
        />
        <BottomNavigationAction
          value={Path.cloud}
          label='cloud'
        />
      </BottomNavigation>
    </Box>
  );
}
