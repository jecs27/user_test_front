<template>
    <div style="z-index: 99 !important;">
        <v-form>
            <v-card class="elevation-1">
                <v-toolbar dark color="secondary">
                <v-toolbar-title>Datos de contacto</v-toolbar-title>
                </v-toolbar>
                <v-card-text>
                <v-text-field
                    v-model="sCorreo"
                    placeholder="Correo"
                    type="text"
                    id="sCorreo" 
                    :rules="correoRules">
                </v-text-field>

                <v-text-field
                v-model="sTelefono"
                placeholder="Télefono"
                type="text"
                id="sTelefono" ></v-text-field>
        
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
        sCorreo:'',
        sTelefono:'',
        correoRules: [
          v => !!v || 'El Correo es requerido',
          v => /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i.test(v) || 'El correo no es Valido',
        ],
      }),
      methods: {
        registrarNombre() {
            this.$emit("registroContacto", {
                sCorreo: this.sCorreo,
                sTelefono: this.sTelefono,
            });
        }
    }
  }
</script>
