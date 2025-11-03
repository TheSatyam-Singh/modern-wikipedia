<template lang="pug">
  header
    .the-header__group
      button(@click='toggleShowMenu')
        font-awesome-icon(icon='bars' size='lg')
      form(v-on:submit.prevent='submitSearch')
        input(v-model='search')
        button
          font-awesome-icon(icon='search')
    .the-header__group
      button(@click='setEditingMode' :class='{ "is-active": isEditing }')
        font-awesome-icon(icon='edit')
      button(@click='setReadingMode' :class='{ "is-active": !isEditing }')
        font-awesome-icon(:icon='["far", "file"]')
</template>

<script>
  import { mapState, mapMutations } from 'vuex'

  export default {
    data: () => ({
      search: null,
    }),
    computed: mapState(['isEditing']),
    methods: {
      ...mapMutations(['toggleShowMenu', 'setEditingMode', 'setReadingMode']),
      submitSearch() {
        if (!this.search) return
        this.$router.replace({ path: this.search })
      },
    },
  }
</script>

<style lang="sass" scoped>
  @import ~assets/sass/variables

  header
    display: flex
    flex-wrap: wrap
    justify-content: space-between
    align-content: stretch
    background: linear-gradient(135deg, #667eea 0%, #764ba2 100%)
    color: $c-white
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1)
    position: sticky
    top: 0
    z-index: 100

  .the-header__group, form
    display: inline-flex

  button, input
    background: 0
    border: 0
    outline: 0
    color: unset
    opacity: .75
    transition: all 0.2s ease
    &:hover, &:focus
      opacity: 1
      transform: scale(1.05)

  button
    padding: 0 1em
    position: relative
    border-radius: 4px
    &:hover
      background: rgba(255, 255, 255, 0.1)
    &.is-active
      opacity: 1
      background: rgba(255, 255, 255, 0.2)
      &:after
        content: ''
        display: block
        border-right: .4em solid transparent
        border-left: .4em solid transparent
        border-bottom: .4em solid $c-white
        position: absolute
        bottom: 0px

  input
    font-size: .9em
    border-bottom: 2px solid rgba(255, 255, 255, 0.3)
    margin: 1em 0
    padding-bottom: .5em
    padding-left: 0.5em
    &:focus
      opacity: 1
      border-bottom-color: rgba(255, 255, 255, 0.8)
</style>
