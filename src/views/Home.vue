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
                       
                     </v-card-text>
                     <v-card-actions>
                         
                        <v-spacer></v-spacer>
                        <v-btn color="primary" :disabled="!canLogin" @click="hacerRegistro()">Iniciar</v-btn>
                     </v-card-actions>
                  </v-card>
               </v-flex>
            </v-layout>
         </v-container>
      </v-main>
   </v-app>
</template>

<script>
export default {
    name: 'Login|Registro',
    data: () => ({
        sCorreoLogin:'',

        sNombre:'',
        sSegundoNombre:'',
        sApellidoPaterno:'',
        sApellidoMaterno:'',

        sDiaNacimiento:'',
        sMesNacimiento:'',
        sAnioNacimiento:'',

        sCorreo:'',

        sTelefono:''

    }),
    props: {
        source: String,
    },
    methods:{

    },
}
</script>