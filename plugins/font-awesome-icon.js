import Vue from 'vue'
import { library, config } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { faBars, faSearch, faEdit, faSun } from '@fortawesome/free-solid-svg-icons'
import { faFile } from '@fortawesome/free-regular-svg-icons'

// This is important, we are going to let Nuxt worry about the CSS
config.autoAddCss = false

library.add(
  faBars,
  faSearch,
  faEdit,
  faSun,
  faFile,
)

Vue.component('font-awesome-icon', FontAwesomeIcon)
