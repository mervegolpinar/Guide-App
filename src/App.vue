<template>
  <v-app>
    <RouterView>
    </RouterView>
    <v-snackbar :timeout="1500" v-model="$store.state.snackbar" color="green">
      Registration successfully added
      <template v-slot:actions>
      </template>
    </v-snackbar>
  </v-app>
</template>

<script>
export default {
  name: 'App',
  data: () => ({
    //
  }),
}
</script>

