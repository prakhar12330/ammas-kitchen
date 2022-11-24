import { Button, Container, HStack, Input, VStack } from '@chakra-ui/react';
import React from 'react';
import { AiOutlineCloudUpload } from 'react-icons/ai';

const Upload = () => {
    return (
        <Container maxW={'container.xl'} h={'100vh'} p={'16'}>
            <VStack h='full' justifyContent={'center'} color={'purple.500'}>
                <AiOutlineCloudUpload size={'10vh'} />
                <form>
                    <HStack>
                        <Input 
                        type={'file'} 
                        required 
                        css={{
                            '&::file-selector-button': {
                                border: 'none',
                                width: 'calc(100% + 36px)',
                                height: '100%',
                                marginLeft: '-19px',
                                color: 'purple',
                                backgroundColor: 'white',
                                cursor: 'pointer',
                            }
                            
                        }
                        } />
                        <Button>Upload</Button>
                    </HStack>
                </form>
            </VStack>
        </Container>
    )
}

export default Upload