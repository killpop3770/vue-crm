<template>
  <ul class="sidenav app-sidenav" v-bind:class="{open: value}">

    <router-link
        v-for="link in links"
        v-bind:key="link.url"
        v-bind:to="link.url"
        v-bind:exact="link.exact"
        active-class="active">
      <li><a href="#" class="waves-effect waves-orange pointer">{{ link.title }}</a></li>
    </router-link>
    <!--        tag="li"-->
    <!--      TODO: 'tag' is deprecated in vue 3, replace with v-slot? check docs!-->
    <!--      https://github.com/vuejs/vue-router-next/issues/148-->
    <!--    <li><a href="#" class="waves-effect waves-orange pointer">ЖОПА</a></li>-->
    <!--  TODO: доделать свойство выделения!  -->
  </ul>
</template>

<script>
export default {
  name: "Sidebar",
  props: ['value'],
  //body function is {} like --> () => {}
  //return obj from function is ({}) like --> () => ({})
  data: () => ({
    links: [
      {title: 'Счет', url: '/', exact: true},
      {title: 'История', url: '/history'},
      {title: 'Планирование', url: '/planning'},
      {title: 'Новая запись', url: '/record'},
      {title: 'Категории', url: '/categories'},
    ]
  })
}
</script>

<style scoped>

</style>