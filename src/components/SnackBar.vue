<template>
    <div style="z-index: 99 !important;">
        <v-snackbar
        v-model="isShowSnack" :timeout="timeOut"
        :value="true" absolute shaped right :color="sTypeSnack">
            {{sMessage}}
        </v-snackbar>
    </div>
</template>

<script>
  export default {
      name: 'SnackBar',
      data: () => ({
        timeOut:2727,
      }),
      props:{
        isShowSnack: Boolean,
        sMessage: String,
        sTypeSnack: String
      }
      
  }
</script>
