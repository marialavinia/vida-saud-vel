//bloco de importação dos componentes 
import { useState } from "react";
import { View, Text, TextInput, TouchableOpacity } from "react-native";
import ResultImc from "./ResultImc";
import styles from "./style";

//exportação das constancias para inserir os dados em seus espaços vazios 
export default function Form(){

    const[altura, setAltura] = useState(null)
    const[peso, setPeso] = useState(null)
    const[messageImc, setMessageImc] = useState("Preencha a altura e o peso")
    const[imc, setImc] = useState(null)
    const[textButton, setTextButton] = useState("Calcular")
//função que calcula o imc recebendo o peso e a altura
    function imcCalculator(){
        return setImc((peso/(altura*altura)).toFixed(2))
    }
//função que valida o imc e retorna os resultados 
    function validationImc(){
        if(peso != null && altura != null){
            imcCalculator()
            setAltura(null)
            setPeso(null)
            setMessageImc("Seu imc é igual a: ")
            setTextButton("Calcular Novamente")
            return
        }
        setImc(null)
        setMessageImc("Preencha a altura e peso: ")
        setTextButton("Calcular")
    }
    
    //retorno para a inserção de dados e estilização é incluida no formulario  
    return(
        <View style={styles.formContext}>
            <View style={styles.form}>
               <Text style={styles.formLabel}>Altura</Text> 
               <TextInput
                    style={styles.input}
                    onChangeText={setAltura}
                    value={altura}
                    placeholder="Ex.: 1.75"
                    keyboardType="numeric"
               />

               <Text style={styles.formLabel}>Peso</Text> 
               <TextInput
                    style={styles.input}
                    onChangeText={setPeso}
                    value={peso}
                    placeholder="Ex.: 75.365"
                    keyboardType="numeric"
               />

               <TouchableOpacity //diferente do botton, ele mostra que o usuarrio  interagio com o botão
                    style={styles.buttonCalculator} 
                    onPress={() => {
                        validationImc()
                    }}
               >
                <Text style={styles.textButtonCalculator}>{textButton}</Text>
               </TouchableOpacity>
            </View>
            <ResultImc messageResultImc={messageImc} resultImc = {imc}/>
        </View>
    );
} 