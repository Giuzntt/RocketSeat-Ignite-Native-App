import { useState } from "react";
import {
  FlatList,
  ScrollView,
  Alert,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import { styles } from "./styles";
import { Participants } from "./../../components/Participants/index";

export default function Home() {
  const [participants, setParticipants] = useState<string[]>([]);
  const [participantName, setParticipantName] = useState<string>("");

  function handleParticipantAdd() {
    if (participants.includes(participantName)) {
      Alert.alert("Eita", "O participante já foi adicionado, tente outro nome");
    } else {
      setParticipants((oldParticipants) => [
        ...oldParticipants,
        participantName,
      ]);
      setParticipantName("");
    }
  }

  function handleParticipantRemove(name: string) {
    Alert.alert("Remover", `Deseja remover ${name}?`, [
      {
        text: "Não",
        style: "cancel",
      },
      {
        text: "Sim",
        onPress: () => {
          Alert.alert("Removido", `${name} foi removido com sucesso`);
          setParticipants((oldParticipants) =>
            oldParticipants.filter((participant) => participant !== name)
          );
        },
        style: "destructive",
      },
    ]);
  }

  return (
    <>
      <View style={styles.container}>
        <Text style={styles.title}>Nome do Evento</Text>
        <Text style={styles.subtitle}>
          {/* pegar o dia de hoje */}
          {new Date().toLocaleDateString("pt-BR", {
            weekday: "long",
            year: "numeric",
            month: "long",
            day: "numeric",
          })}
        </Text>
        <View style={styles.participantsContainer}>
          <TextInput
            value={participantName}
            onChangeText={setParticipantName}
            style={styles.input}
            placeholder="Nome do participante"
            placeholderTextColor="#555"
          />
          <TouchableOpacity
            style={styles.button}
            onPress={() => {
              handleParticipantAdd();
            }}
          >
            <Text style={styles.inputText}>+</Text>
          </TouchableOpacity>
        </View>
        <FlatList
          style={styles.participantsList}
          data={participants}
          keyExtractor={(item) => item}
          renderItem={({ item }) => (
            <Participants
              name={item}
              onRemove={() => handleParticipantRemove(item)}
            />
          )}
          showsVerticalScrollIndicator={false}
          ListEmptyComponent={() => (
            <Text style={styles.emptyList}>Nenhum participante</Text>
          )}
        />
      </View>
    </>
  );
}
