import React from 'react';
import type {Node} from 'react';
import { Wallet } from 'ethers';
import {
  SafeAreaView,
  Button,
  StatusBar,
  Alert
} from 'react-native';

const App: () => Node = () => {
  const importMnemonic = () => {
    console.log("fromMnemonic start");

    const mnemonic = "uphold eagle true another decide enlist average party relief seven arrange giant"
    const { address, privateKey } = Wallet.fromMnemonic(mnemonic);

    Alert.alert(`Mnemonic imported for default path. Private key: ${privateKey}`);

    console.log("fromMnemonic end");
  };

  return (
    <SafeAreaView>
      <StatusBar />
      <Button onPress={importMnemonic} title="Import wallet" />
    </SafeAreaView>
  );
};
export default App;
