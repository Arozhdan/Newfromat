<template>
  <div class="nav-landing" :class="{small:smallNav}">
    <div class="container px-4 mx-auto flex items-center justify-between">
      <div class="flex items-center">
        <a href="#" class="block pr-6 xl:pr-12 border-r">
          <IconLogo class="nav-landing__logo" />
          <IconLogoBigger class="nav-landing__logo--bigger" />
        </a>
        <div class="hidden sm:flex ml-6 xl:ml-12">
          <nuxt-link
            :class="{'text-orange' : activeLink === 'adv'}"
            :to="{name:'index', hash:'#advertisers'}"
            class="minicaps text-gray-48 font-bold text-sm inline-block py-2 transition duration-300 hover:text-orange"
          >
            For advertisers
          </nuxt-link>
          <nuxt-link
            :class="{'text-orange' : activeLink === 'venue'}"
            :to="{name:'index', hash:'#venues'}"
            class="minicaps text-gray-48 font-bold text-sm inline-block ml-8 py-2 transition duration-300 hover:text-orange"
          >
            For venues
          </nuxt-link>
          <nuxt-link
            :class="{'text-orange' : activeLink === 'contact'}"
            :to="{name:'index', hash:'#contacts'}"
            class="minicaps text-gray-48 font-bold text-sm inline-block ml-8 py-2 transition duration-300 hover:text-orange"
          >
            Contacts
          </nuxt-link>
        </div>
      </div>
      <div class="dropdown dropdown-end block sm:hidden">
        <div tabindex="0" class="m-1 btn bg-black-0">
          <span class="minicaps">Menu</span>
        </div>
        <ul tabindex="0" class="p-2 shadow menu dropdown-content bg-base-100 rounded-box w-52">
          <li>
            <a>Item 1</a>
          </li>
          <li>
            <a>Item 2</a>
          </li>
          <li>
            <a>Item 3</a>
          </li>
        </ul>
      </div>
      <div class="hidden lg:flex items-center">
        <div class="flex items-center">
          <a href="#" class="block transition duration-300 hover:opacity-60 w-5 h-5">
            <img src="~/assets/icons/facebook.svg" alt="">
          </a>
          <a href="#" class="block transition duration-300 hover:opacity-60 w-5 h-5 ml-6">
            <img src="~/assets/icons/instagram.svg" alt="">
          </a>
          <a href="#" class="block transition duration-300 hover:opacity-60 w-5 h-5 ml-6">
            <img src="~/assets/icons/twitter.svg" alt="">
          </a>
        </div>
        <button class="btn btn-outline ml-4 xl:ml-16 rounded-badge px-8 font-normal lowercase text-black-0 border-2 border-gray-200">
          info@newformatmedia.com
        </button>
      </div>
    </div>
  </div>
</template>

<script>
import IconLogoBigger from '../Icon/IconLogo/IconLogoBigger'
export default {
  name: 'NavLanding',
  components: { IconLogoBigger },
  data: () => ({
    smallNav: false,
    activeLink: false
  }),
  mounted () {
    document.addEventListener('scroll', () => {
      this.smallNav = window.pageYOffset > 50
      this.activeLink = this.getActiveLink()
    })
  },
  methods: {
    getActiveLink () {
      const adv = document.querySelector('#advertisers')
      const venue = document.querySelector('#venues')
      const contact = document.querySelector('#contacts')
      if (window.scrollY > adv.offsetTop && window.scrollY < venue.offsetTop) { return 'adv' }
      if (window.scrollY > venue.offsetTop && window.scrollY < contact.offsetTop - 100) { return 'venue' }
      if (window.scrollY > contact.offsetTop - 100) { return 'contact' }
      return false
    }
  }
}
</script>

<style lang="postcss">
@import "./nav-landing.pcss";
</style>
