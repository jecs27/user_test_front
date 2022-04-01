<template>
    <v-dialog v-model="isShowLoading" hide-overlay persistent width="300">
      <v-card color="background" dark>
        <v-card-text>
          Espere un momento por favor...
          <v-progress-linear indeterminate color="white" class="mb-0" />
        </v-card-text>
      </v-card>
    </v-dialog>
</template>

<script>
  export default {
      name: 'LoadingDialog',
      data: () => ({
      }),
      props:{
        isShowLoading: Boolean
      }
  }
</script>
