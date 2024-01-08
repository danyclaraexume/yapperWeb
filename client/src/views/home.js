import React from 'react';
import PageContainer from '../layout/pageContainer';
import FeedPost from '../components/post';
import { Stack, Grid } from '@mui/material';
import YourPost from '../components/yourPost'

const HomePage = () => {

    const posts = [
        { id: 1, theusername: 'Friend 1', content: 'Content for post 1.', postDate: '12-12-29'},
        { id: 2, theusername: 'Friend 2', content: 'Content for post 2.', postDate: '12-12-28'},
        { id: 3, theusername: 'Friend 3', content: 'Content for post 3.', postDate: '12-12-27'}
        // Add more posts as needed
      ];

    return(
        <PageContainer>
            <Grid container spacing={2} justifyContent="center">
                <Grid item xs={12} sm={3}>
                <Stack style={{ border: 'yellow solid 1px', width: '100%' }}>
                    Trending...
                </Stack>
                </Grid>
                <Grid item xs={12} sm={6}>
                    <YourPost/>
                    <Stack direction="column" spacing={2} style={{ width: '100%' }}>
                        {posts.map((post) => (
                        <FeedPost key={post.id} theusername={post.theusername} content={post.content} postDate={post.postDate} />
                        ))}
                    </Stack>
                </Grid>
                <Grid item xs={12} sm={3}>
                <Stack style={{ width: '100%' }}>Pub</Stack>
                </Grid>
            </Grid>
    </PageContainer>
    );
}

export default HomePage;