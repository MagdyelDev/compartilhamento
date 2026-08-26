import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
  Image,
} from "react-native";

import { styles } from "./styles";

export default function App() {
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const [pagina, setPagina] = useState("login");

  // TELA EXPLORER
  if (pagina === "explorer") {
    return (
      <TouchableOpacity
        style={styles.imageButton}
        activeOpacity={1}
        onPress={() => setPagina("login")}
      >
        <Image
          source={{
            uri: "https://i.pinimg.com/736x/ff/75/22/ff752245ae648959603e8beefe9d1a50.jpg",
          }}
          style={styles.fullImage}
          resizeMode="cover"
        />
      </TouchableOpacity>
    );
  }

  // TELA LOGIN
  return (
    <View style={styles.container}>
      <View style={styles.card}>
        <Text style={styles.title}>Login</Text>

        <Text style={styles.label}>E-mail</Text>

        <TextInput
          style={styles.input}
          placeholder="Digite seu e-mail"
          value={email}
          onChangeText={setEmail}
          keyboardType="email-address"
          autoCapitalize="none"
        />

        <Text style={styles.label}>Senha</Text>

        <TextInput
          style={styles.input}
          placeholder="Digite sua senha"
          value={senha}
          onChangeText={setSenha}
          secureTextEntry
        />

        <Text style={styles.forgotPassword}>
          Esqueceu da senha?
        </Text>

        <TouchableOpacity
          style={styles.button}
          onPress={() => setPagina("explorer")}
        >
          <Text style={styles.buttonText}>Entrar</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}