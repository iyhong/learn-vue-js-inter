<template>
  <div id="root">
    <p>{{ this.originalPrice }}</p>
    <p>{{ this.doublePrice }}</p>
    <p>{{ this.triplePrice }}</p>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
  computed: {
    ...mapGetters(['originalPrice', 'doublePrice', 'triplePrice']),
  },
}
</script>

<style></style>
