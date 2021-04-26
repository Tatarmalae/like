<template>
  <div class="apartments">
    <ApartmentsCard v-for="apartment in apartments" :key="apartment.id" :apartment="apartment" />
  </div>
</template>

<script>
import ApartmentsCard from "@/components/ApartmentsCard";

export default {
  name: "ApartmentsList",
  components: {
    ApartmentsCard
  },
  data() {
    return {
      apartments: []
    };
  },
  created() {
    this.getApartments();
  },
  methods: {
    getApartments() {
      fetch("./entities.json")
        .then(res => res.json())
        .then(json => {
          this.apartments = json.response;
        });
    }
  }
};
</script>

<style scoped>
.apartments {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
}
</style>
