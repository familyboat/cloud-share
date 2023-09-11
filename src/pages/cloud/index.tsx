//@ts-nocheck

import { Box, Divider, Paper } from "@mui/material";
import { purple } from "@mui/material/colors";
import { useState } from "preact/compat";
import { useEffect } from "react";
import { getUserInfo, saveUserInfo } from "../../db";

export default function Cloud() {
  const [notes, setNotes] = useState([]);

  useEffect(() => {
    async function fetchNotes() {
      const {uid, username} = getUserInfo();
      const resp = await fetch(`https://meditation-backend.deno.dev/notes?uid=${uid}&username=${username}`);
      {
        const {notes, uid, username} = await resp.json();
        saveUserInfo({uid, username});
        notes.sort((a, b) => {
          const aCreatedaAt = (new Date(a.created_at || 0)).getTime();
          const bCreatedaAt = (new Date(b.created_at || 0)).getTime();
          if (aCreatedaAt > bCreatedaAt) return -1;
          if (aCreatedaAt == bCreatedaAt) return 0;
          if (aCreatedaAt < bCreatedaAt) return 1;
        })
        setNotes(notes);
      }
    }

    fetchNotes();
  }, []);

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        gap: "1rem",
      }}
    >
      {notes.length === 0
        ?
        (<>loading ...</>) :
      notes.map((note) => (
        <Paper
          key={note.id}
          sx={{
            padding: "0.5rem",
          }}
        >
          <Box
            sx={{
              display: "flex",
              gap: '0.5rem',
              fontSize: "0.8rem",
            }}
          >
            <Box
              sx={{
                flex: "1 1 0",
                color: purple[400],
              }}
            >
              {note.title}
            </Box>
            <Box>
              {note.username} created at {(new Date(note.created_at).toLocaleString())}
            </Box>
          </Box>

          <Divider />

          <Box
            sx={{
              overflowWrap: "anywhere",
            }}
          >
            {note.content}
          </Box>
        </Paper>
      ))}
    </Box>
  );
}
