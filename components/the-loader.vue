<template lang="pug">
  #the-loader(v-show='isLoading')
    font-awesome-icon(icon='sun' spin)
    #the-loader__label Loading...
</template>

<script>
  export default {
    data: () => ({
      isLoading: false,
    }),
    methods: {
      start() {
        this.isLoading = true
      },
      finish() {
        this.isLoading = false
      },
    },
  }
</script>

<style lang="sass" scoped>
  @import ~assets/sass/variables

  #the-loader
    position: fixed
    top: 0
    left: 0
    width: 100%
    height: 100%
    color: $c-white
    background: linear-gradient(135deg, #667eea 0%, #764ba2 100%)
    display: flex
    flex-direction: column
    justify-content: center
    align-items: center
    z-index: 999
    animation: fadeIn 0.3s ease
    &__label
      font-size: 1.5em
      margin-top: 1em
      letter-spacing: 1px
      font-weight: 300

  .fa-sun
    font-size: 8em
    opacity: 0.9

  @keyframes fadeIn
    from
      opacity: 0
    to
      opacity: 1
</style>
