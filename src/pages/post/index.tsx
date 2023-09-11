//@ts-nocheck
import { Box, Button, TextField } from "@mui/material";
import { useState } from "react";
import { toast } from "react-toastify";

export default function Post() {

  const [title, setTitle] = useState<string | null>(null);
  const [content, setContent] = useState<string | null>(null);
  const [message, setMessage] = useState<string | null>(null)

  const handleSubmit = async () => {
    if (title && content) {
      const note = {
        title,
        content,
        'created_at': new Date()
      }
      const resp = await fetch('https://meditation-backend.deno.dev/notes', {
        method: 'POST',
        body: JSON.stringify(note),
        headers: {
          'content-type': 'application/json'
        }
      })
      if (resp.ok) {
        const {error, message} = await resp.json()
        setMessage(message || error)
        setTitle(null)
        setContent(null)
      } else {
        setMessage('post fail')
      }
    }
    if (title === null) setTitle("");
    if (content === null) setContent("");
  };

  return (
    <>
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
        }}
      >
        <Button onClick={handleSubmit} variant="contained" size="small">
          post
        </Button>
      </Box>
      <Box>
        {message}
      </Box>
      <Box
        sx={{
          flex: "1 1 0",
          overflow: "hidden auto",
        }}
      >
        <TextField
          autoComplete="off"
          required
          margin="dense"
          id="title"
          label='title'
          error={title === ""}
          helperText="Please enter the title of the note"
          type="text"
          value={title ?? ""}
          onChange={(e) => setTitle(e.target.value)}
          fullWidth
          variant="standard"
        />
        <TextField
          required
          autoComplete="off"
          margin="dense"
          id="content"
          label="content"
          error={content === ""}
          helperText="Please enter the content of the note"
          type="text"
          value={content ?? ""}
          onChange={(e) => setContent(e.target.value)}
          fullWidth
          multiline
          variant="standard"
        />
      </Box>
    </>
  );
}
