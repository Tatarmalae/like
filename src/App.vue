<template>
  <div id="app">
    <ApartmentsList />
  </div>
</template>

<script>
import ApartmentsList from '@/components/ApartmentsList';

export default {
  name: 'App',
  components: {
    ApartmentsList,
  },
};
</script>

<style>
html,
body {
  font-family: Verdana, sans-serif;
  font-size: 15px;
  line-height: 1.5;
}

html,
body,
ol,
ul,
p {
  margin: 0;
  padding: 0;
}

ol,
ul {
  list-style: none;
}

a {
  text-decoration: none;
}
</style>
