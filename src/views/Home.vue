<template>
   <v-app id="login">
      <v-main>
         <v-container fluid fill-height>
            <v-layout align-center justify-center>
               <v-flex xs12 sm8 md6 lg4 xl2>
                  <v-card class="elevation-12">
                     <v-toolbar dark color="primary">
                        <v-toolbar-title>The Rocket Code</v-toolbar-title>
                     </v-toolbar>
                     <v-card-text>
                       <DataUser v-if="bNombre" @registroNombre="registroNombre"/>
                     </v-card-text>
                     <v-card-actions>
                        <v-btn  v-if="bRegistro" color="purple lighten-1" text  @click="showRegistro()">Registrarse</v-btn>
                            <v-spacer></v-spacer>
                        <v-btn color="primary" :disabled="!allData" @click="hacerRegistro()">Iniciar</v-btn>
                     </v-card-actions>
                  </v-card>
               </v-flex>
            </v-layout>
         </v-container>
      </v-main>
   </v-app>
</template>

<script>
import SnackBar from '../components/SnackBar.vue';
import LoadingDialog from '../components/LoadingDialog.vue';
import DataUser from '../components/DataUser.vue';


export default {
    name: 'registroUser',
    components:{
      SnackBar,
      LoadingDialog,
      DataUser
    },
    data: () => ({
        bRegistro:true,
        bNombre: false,
        bFechaNacimiento: false,
        bDatosContacto: false,

        sNombre: '',
        sSegundoNombre: '',
        sApellidoPaterno: '',
        sApellidoMaterno: '',

        sDiaNacimiento: '',
        sMesNacimiento: '',
        sAnioNacimiento: '',

        sCorreo: '',
        sTelefono: ''

    }),
    props: {
        source: String,
    },
    methods:{
        registroNombre(data) {
            this.sNombre = data.sNombre;
            this.sSegundoNombre = data.sSegundoNombre

            if(data.sNombre != '' && data.sApellidoPaterno != ''){
                this.showFechaNacimiento();
            }
        },
        showRegistro(){
            this.bRegistro = false;
            this.bNombre = true;
        },
        showFechaNacimiento(){
            this.bNombre = false;
            this.bFechaNacimiento = true;
        },
        showDatosContacto(){
            this.bNombre = false;
            this.bFechaNacimiento = true;
            this.bDatosContacto = true;
        },
    },
    computed:{
        allData(){
            return(
                this.sNombre != '' &&
                this.sSegundoNombre != '' 
            ); 
        },
       
    },
}
</script>