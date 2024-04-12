//bloco de importação
import React from  "react";
import { View, Text } from "react-native";
import styles from "./style"
//exporta a fução/estilo do titulo 
export default function Title(){
    return(
        <View style={styles.boxTitle}>
            <Text style={styles.textTitle}>App - Vida Saudável</Text>
        </View>
    );
}