<template>
   <v-app id="login">
      <v-main>
         <v-container fluid fill-height>
              <SnackBar :isShowSnack="isShowSnack" :sMessage="sMessage" :sTypeSnack="sTypeSnack"/>
              <LoadingDialog :isShowLoading="isLoading" />
            <v-layout align-center justify-center>
               <v-flex xs12 sm8 md6 lg4 xl2>
                  <v-card class="elevation-12">
                     <v-toolbar dark color="primary">
                        <v-toolbar-title>The Rocket Code</v-toolbar-title>
                     </v-toolbar>
                     <v-card-text>
                       <DataUser v-if="bNombre" @registroNombre="registroNombre"/>
                       <BirthDateUser v-if="bFechaNacimiento" @registroFecha="registroFecha"/>
                       <ContactUser v-if="bDatosContacto" @registroContacto="registroContacto"/>

                       <div v-if="bDatosCompletos">
                            <v-col>
                                <v-row><span class="text-h4"> Si tus datos con correctos por favor continuemos...</span></v-row>
                                <v-row><span>Nombre: {{sNombre}} {{sSegundoNombre}} {{sApellidoPaterno}} {{sApellidoMaterno}}</span></v-row>
                                <v-row><span>Fecha Naciemiento: {{dFechaNacimiento}}</span></v-row>
                                <v-row><span>Correo: {{sCorreo}}</span></v-row>
                                <v-row><span>Teléfono: {{sTelefono}}</span></v-row>
                            </v-col>
                       </div>
                     </v-card-text>
                     <v-card-actions>
                        <v-btn  v-if="!bRegistro" color="purple lighten-1" text  @click="showRegistro()">Registrarse</v-btn>
                        <v-btn  v-if="allData" color="purple lighten-1" text  @click="clearData()">Limpiar Datos</v-btn>
                            <v-spacer></v-spacer>
                        <v-btn color="primary" v-if="allData" @click="hacerRegistro()">Iniciar</v-btn>
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
import BirthDateUser from '../components/BirthDateUser.vue';
import ContactUser from '../components/ContactUser.vue';
import moment from 'moment';

export default {
    name: 'registroUser',
    components:{
      SnackBar,
      LoadingDialog,
      DataUser,
      BirthDateUser,
      ContactUser
    },
    data: () => ({
        sToken:'x[iHc#S)jnwB%fr-$*fh7)3]}q_?zC+8P[^#w+<F6HLGVw<ZJE:E9`J,t8KJ', //Por tiempo se pone directo
        isShowSnack: false,
        sMessage:'',
        sTypeSnack:'success',

        isLoading:false,

        bRegistro: false,
        bDatosCompletos: false,
        bNombre: false,
        bFechaNacimiento: false,
        bDatosContacto: false,

        sNombre: '',
        sSegundoNombre: '',
        sApellidoPaterno: '',
        sApellidoMaterno: '',
        
        dFechaNacimiento:'',

        sCorreo: '',
        sTelefono: ''

    }),
    props: {
        source: String,
    },
    methods:{
        clearData(){
             this.isShowSnack = false;
            this.bRegistro = false;
            this.bNombre = false;
            this.bFechaNacimiento = false;
            this.bDatosContacto = false;
            this.bDatosCompletos = false;

            this.sNombre = '';
            this.sSegundoNombre= '';
            this.sApellidoPaterno = '';
            this.sApellidoMaterno = '';
            this.dFechaNacimiento = '';
            this.sCorreo = '';
            this.sTelefono = '';
        },
        registroNombre(data) {
            if(data.sNombre != '' && data.sApellidoPaterno != ''){
                this.sNombre = data.sNombre;
                this.sSegundoNombre = data.sSegundoNombre;
                this.sApellidoPaterno = data.sApellidoPaterno;
                this.sApellidoMaterno = data.sApellidoMaterno;
                this.showFechaNacimiento();
            }
        },
        registroFecha(data){
            if(data.dFechaNacimiento != ''){
                this.dFechaNacimiento = data.dFechaNacimiento;
                this.showDatosContacto();
            }
        },
        registroContacto(data){
            if(data.sCorreo != '' && data.sTelefono != ''){
                this.sCorreo = data.sCorreo;
                this.sTelefono = data.sTelefono;
                this.showFinalDatos();
            }
        },
        showRegistro(){
            this.bRegistro = true;
            this.bNombre = true;
        },
        showFechaNacimiento(){
            this.bNombre = false;
            this.bFechaNacimiento = true;
        },
        showDatosContacto(){
            this.bNombre = false;
            this.bFechaNacimiento = false;
            this.bDatosContacto = true;
        },
        showFinalDatos(){
            this.bNombre = false;
            this.bFechaNacimiento = false;
            this.bDatosContacto = false;
            this.bDatosCompletos = true;
        },
        async hacerRegistro(){
            let vsMW = await this.encryptData('trc-2712');
            this.isLoading = true;

            let databody = {
                sNombre: this.sNombre,
                sSegundoNombre:this.sSegundoNombre,
                sApellido_Paterno: this.sApellidoPaterno,
                sApellido_Materno: this.sApellidoMaterno,
                dFechaNacimiento: this.dFechaNacimiento,
                sCorreo: this.sCorreo,
                sTelefono: this.sTelefono
            };
            
            console.log(databody);
            await this.axios.post('http://127.0.0.1:32712/users/createUser',databody,
            {
                headers: {
                    'sMW': vsMW,
                    'Authorization': 'Bearer '+ this.$cookies.get("tokenApp")
                }, 
            })
            .then((result) => {
                console.log(result);  
                this.isLoading = false

                this.sTypeSnack = 'success';
                this.sMessage = 'Usuario registrado ';
                this.isShowSnack = true;
            }).catch((err) => {

                this.isLoading = false
                this.sTypeSnack = 'error';
                this.sMessage = err.response.data.message;
                this.isShowSnack = true;
            });
        },
        encryptData(data){
            console.log(data);
            let encToken = this.sToken + moment().format('DD%MM&YYYY') + new Date().getDay();
            return this.$CryptoJS.AES.encrypt(data.toString(), encToken).toString();
        }
        
    },
    computed:{
        allData(){
            return(
                this.sNombre != '' &&
                this.sApellidoPaterno != '' &&
                this.dFechaNacimiento != '' &&
                this.sCorreo != '' &&
                this.sTelefono != ''
            ); 
        },
       
    },
    async created() {
        let vsMW = await this.encryptData('trc-2712');
        let databody={
            sMW: vsMW
        }
        console.log(databody);
        console.log('antes de servicio');
        await this.axios.post('http://127.0.0.1:32712/utils/getAppToken',databody,{
            headers: {
                'sMW':'smw '+ vsMW
            },
        })
        .then((result) => {
            this.$cookies.set( "tokenApp",result.data.data.token);
        }).catch((err) => {
        });
    }
}
</script>