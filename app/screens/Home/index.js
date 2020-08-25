import React, { useState } from 'react';
import { View, Text } from 'react-native';
import styles from './styles';
import { Fab, Icon, Button, Container } from 'native-base';
import PlayArea from './PlayArea';

export default function Home() {
  const [isOpen, setOpen] = useState(false);
  return (
    <Container style={styles.container}>
      <Fab
        direction="down"
        position="topRight"
        active={isOpen}
        style={{ backgroundColor: '#5f7c8c' }}
        onPress={() => setOpen(!isOpen)}>
        <Icon name="menu" />
        <Button style={{ backgroundColor: '#5f7c8c' }}>
          <Icon type="MaterialCommunityIcons" name="trophy" />
        </Button>
      </Fab>
      <PlayArea />
    </Container>
  );
}
