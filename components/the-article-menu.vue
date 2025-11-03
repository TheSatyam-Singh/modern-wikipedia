<template lang="pug">
  div
    nuxt-link#the-logo(to='/')
      img(src='/img/logo.svg')
    div(v-show='article.headings && article.headings.length')
      .toc__title Contents
      ul
        li(v-for='heading in article.headings')
          a.toc__link(:href='"#" + heading.id') {{ heading.title }}
          ul
            li(v-for='heading in heading.children')
              a.toc__link.toc__link--nested(:href='"#" + heading.id') {{ heading.title }}
</template>

<script>
  import { mapState } from 'vuex'

  export default {
    computed: mapState(['article']),
  }
</script>

<style lang="sass" scoped>
  @import ~assets/sass/variables

  #the-logo
    padding: $p-md
    border-bottom: $border
    display: block
    text-align: center
    transition: transform 0.2s ease
    &:hover
      transform: scale(1.02)

  img
    width: 100%
    max-width: 180px

  .toc
    &__title, &__link
      padding: $p-md
      background-color: $c-white
      border-bottom: $border
      font-weight: 600
      transition: all 0.2s ease
    &__title
      color: $c-grey
      text-align: center
      font-size: 0.95em
      letter-spacing: 0.5px
    &__link
      display: block
      color: $c-black
      font-size: .9em
      text-decoration: none
      border-left: 3px solid transparent
      &:hover
        background-color: $c-blue-light
        border-left-color: $c-accent
        padding-left: calc(3em + 3px)
      &--nested
        font-weight: normal
        padding: $p-sm
        padding-left: 4em
        border-bottom-width: 0
        font-size: .85em
        li:last-child &
          border-bottom-width: 1px
</style>
