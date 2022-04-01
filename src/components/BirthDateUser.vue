<template>
    <div style="z-index: 99 !important;">
        <v-form>
            <v-card class="elevation-1">
                <v-toolbar dark color="secondary">
                <v-toolbar-title>¿Cúal es tu fecha de nacimiento?</v-toolbar-title>
                </v-toolbar>
                <v-card-text>
                    <v-menu ref="menu" v-model="menu" :close-on-content-click="false"
                  :return-value.sync="dFechaNacimiento" transition="scale-transition" 
                  offset-y min-width="auto">
                      <template v-slot:activator="{ on, attrs }">
                      <v-text-field v-model="dFechaNacimiento" label="Fecha de Nacimiento"
                          prepend-icon="mdi-calendar" readonly v-bind="attrs" v-on="on"
                          color="secondary"></v-text-field>
                      </template>
                      <v-date-picker locale="es-ES" v-model="dFechaNacimiento" scrollable color="secondary" :max="max_date"> 
                      <v-spacer></v-spacer>
                      <v-btn text color="secondary" @click="menu = false" >
                          Cancelar
                      </v-btn>
                      <v-btn text color="secondary" @click="$refs.menu.save(dFechaNacimiento)" >
                          Aceptar
                      </v-btn>
                      </v-date-picker>
                  </v-menu>

                </v-card-text>
                <v-card-actions>
                    
                <v-spacer></v-spacer>
                <v-btn color="primary" :disabled="!enableNext" @ @click="registrarFecha()">Siguiente</v-btn>
                </v-card-actions>
            </v-card>            
        </v-form>
    </div>
</template>

<script>
  export default {
      name: 'BirthDateUser',
      data: () => ({
        dFechaNacimiento:'',
        sDia:'',
        sMes:'',
        sAnio:'',

        max_date:  (new Date(Date.now() - (new Date()).getTimezoneOffset() * 60000)).toISOString().substr(0, 10),
        menu: false,
      }),
      methods: {
        registrarFecha() {
            this.$emit("registroFecha", {
                dFechaNacimiento: this.dFechaNacimiento
            });
        },
    },
    computed:{
        enableNext(){
            return(
                this.dFechaNacimiento != ''
            ); 
        },
       
    },
  }
</script>
