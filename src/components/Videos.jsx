import { Button, Heading, Stack, Text, VStack } from '@chakra-ui/react';
import React, { useState } from 'react';

const Videos = () => {
    const videosArr = [
      'https://player.vimeo.com/16405615?embedded=false&source=vimeo_logo&owner=324442',
      'https://player.vimeo.com/16405615?embedded=false&source=vimeo_logo&owner=324442',
      'https://player.vimeo.com/16405615?embedded=false&source=vimeo_logo&owner=324442',
      'https://player.vimeo.com/16405615?embedded=false&source=vimeo_logo&owner=324442',
      'https://player.vimeo.com/16405615?embedded=false&source=vimeo_logo&owner=324442',
      'https://player.vimeo.com/16405615?embedded=false&source=vimeo_logo&owner=324442',
      'https://player.vimeo.com/16405615?embedded=false&source=vimeo_logo&owner=324442',
      'https://player.vimeo.com/16405615?embedded=false&source=vimeo_logo&owner=324442',
      'https://player.vimeo.com/16405615?embedded=false&source=vimeo_logo&owner=324442',
    ];

    const [videoSrc, setVideoSrc] = useState(videosArr[0]);

    return (
        <Stack direction={['column', 'row']} h={'100vh'}>
            <VStack w={'full'}>
                <video
                    controls
                    controlsList="nodownload"
                    src={videoSrc}
                    style={{
                        width: '100%',
                    }}
                ></video>

            </VStack>
            <VStack
                w={['full', 'xl']}
                alignItems={'stretch'}
                p="8"
                spacing={'8'}
                overflowY={'auto'}
            >
                {videosArr.map((item, index) => (
                    <Button
                        variant={'ghost'}
                        colorScheme={'purple'}
                        onClick={() => setVideoSrc(item)}
                    >
                        Tutorial {index + 1}
                    </Button>
                ))}
            </VStack>
        </Stack>
    );
};

export default Videos;