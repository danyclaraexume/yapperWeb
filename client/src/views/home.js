import React from 'react';
import PageContainer from '../layout/pageContainer';
import FeedPost from '../components/post';
import { Stack } from '@mui/material';

const HomePage = () => {

    const posts = [
        { id: 1, theusername: 'Friend 1', content: 'Content for post 1.', postDate: '12-12-29'},
        { id: 2, theusername: 'Friend 2', content: 'Content for post 2.', postDate: '12-12-28'},
        { id: 3, theusername: 'Friend 3', content: 'Content for post 3.', postDate: '12-12-27'}
        // Add more posts as needed
      ];

    return(
        <PageContainer>
            <Stack direction={{ xs: 'column', sm: 'row' }} spacing={{ xs: 1, sm: 2, md: 4 }} justifyContent="center" style={{border: "red solid 1px"}}>
                <Stack style={{border: "yellow solid 1px"}}>Trending...</Stack>
                <Stack 
                    direction="column"
                    spacing={2}
                >
                {posts.map((post) => (
                    <FeedPost key={post.id} theusername={post.theusername} content={post.content} postDate={post.postDate} />
                ))} 
                </Stack>
                <Stack md={4}>Pub</Stack>

            </Stack>
        </PageContainer>
    );
}

export default HomePage;