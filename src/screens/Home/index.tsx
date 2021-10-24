import React from "react";
import { KeyboardAvoidingView, Platform, View } from "react-native";

import { Hearder } from "../../components/Hearder";
import { MessageList } from "../../components/MessageList";
import { SendMessageForm } from "../../components/SendMessageForm";
import { SignInBox } from "../../components/SignInBox/Index";
import { useAuth } from "../../hooks/auth";

import { styles } from "./styles";

export function Home() {
  const { user } = useAuth();

  return(
    <KeyboardAvoidingView
      style={{ flex: 1 }}
      behavior={Platform.OS === 'ios' ? 'padding' : undefined}>
      <View style={styles.container}>
        <Hearder />
        <MessageList />
        { !user ? <SignInBox /> : <SendMessageForm /> }
      </View>
    </KeyboardAvoidingView>
  );
}