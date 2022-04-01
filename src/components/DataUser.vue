<template>
    <div style="z-index: 99 !important;">
        <v-form>
            <v-card class="elevation-1">
                <v-toolbar dark color="secondary">
                <v-toolbar-title>¿Cúal es tu nombre?</v-toolbar-title>
                </v-toolbar>
                <v-card-text>
                <v-text-field
                    v-model="sNombre"
                    placeholder="Nombre"
                    type="text"
                    id="sNombre" >
                </v-text-field>

                <v-text-field
                v-model="sSegundoNombre"
                placeholder="Segundo Nombre"
                type="text"
                id="sSegundoNombre" ></v-text-field>

                <v-text-field
                v-model="sApellidoPaterno"        
                placeholder="Apellido Paterno"
                type="text"
                id="sApellidoPaterno" ></v-text-field>

                <v-text-field
                v-model="sApellidoMaterno"
                placeholder="Apellido Materno"
                type="text"
                id="sApellidoMaterno" ></v-text-field>
        
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
      name: 'DataUser',
      data: () => ({
        sNombre:'',
        sSegundoNombre:'',
        sApellidoPaterno:'',
        sApellidoMaterno:'',
      }),
      methods: {
        registrarNombre() {
            this.$emit("registroNombre", {
                sNombre: this.sNombre,
                sSegundoNombre: this.sSegundoNombre,
                sApellidoPaterno: this.sApellidoPaterno,
                sApellidoMaterno: this.sApellidoMaterno,
            });
        }
    }
  }
</script>
