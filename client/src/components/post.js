import React from 'react';
import { Card, CardContent, Typography, Stack, Avatar, Button } from '@mui/material';

const FeedPost = ({theusername, postDate, content}) => {
    console.log(theusername)
    return(
        <Card>
        <CardContent>
          <Stack direction="row" spacing={2} alignItems="center">
            <Avatar alt={theusername} src="/path/to/user/photo.jpg" sx={{ width: 35, height: 35 }} />
            <Typography variant="body" component="div" fontWeight="bold">
              {theusername}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              {postDate}
            </Typography>
          </Stack>
          <Typography variant="body2" color="text.secondary" mt={1}>
            {content}
          </Typography>
          <Stack direction="row">
            <Button>Like</Button>
            <Button>Comment</Button>
            <Button>Share</Button>
          </Stack>
        </CardContent>
      </Card>
    );
}

export default FeedPost;