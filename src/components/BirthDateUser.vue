<template>
    <div style="z-index: 99 !important;">
        <v-form>
            <v-card class="elevation-1">
                <v-toolbar dark color="secondary">
                <v-toolbar-title>¿Cùal es tu fecha de nacimiento?</v-toolbar-title>
                </v-toolbar>
                <v-card-text>
                </v-card-text>
                <v-card-actions>
                    
                <v-spacer></v-spacer>
                <v-btn color="primary" @click="registrarNombre()">Siguiente</v-btn>
                </v-card-actions>
            </v-card>            
        </v-form>
    </div>
</template>

<script>
  export default {
      name: 'BirthDateUser',
      data: () => ({
       
      }),
      methods: {
        registrarNombre() {
            this.$emit("registroFecha", {
                
            });
        }
    }
  }
</script>
