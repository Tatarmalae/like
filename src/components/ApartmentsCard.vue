<template>
  <div class="apartments__card">
    <div class="apartments__card-info">
      <div class="apartments__card-title">
        <h3>{{ apartment.attributes.title }}</h3>
      </div>
      <hr />
      <div class="apartments__card-params">
        <ul>
          <li>Количество комнат: {{ apartment.attributes.rooms }}</li>
          <li>Площадь: {{ apartment.attributes.area }}{{ apartment.attributes.unit }}</li>
        </ul>
      </div>
      <hr />
      <div class="apartments__card-address">
        <p>Адрес</p>
        <ul>
          <li>Город: {{ apartment.attributes.address.city }}</li>
          <li>Улица: {{ apartment.attributes.address.street }}</li>
          <li>Дом: {{ apartment.attributes.address.house }}</li>
          <li>Квартира: {{ apartment.attributes.address.room }}</li>
        </ul>
      </div>
    </div>
    <hr />
    <div class="apartments__card-owner">
      <p>Владелец</p>
      <ul>
        <li>Фамилия: {{ apartment.relationships.attributes.last_name }}</li>
        <li>Имя: {{ apartment.relationships.attributes.first_name }}</li>
        <li>Отчество: {{ apartment.relationships.attributes.middle_name }}</li>
      </ul>
    </div>
    <div class="like" :class="{ active: favorite }" @click.prevent="like(apartment.id)">
      <svg viewBox="0 0 32 29.6">
        <path
          d="M23.6,0c-3.4,0-6.3,2.7-7.6,5.6C14.7,2.7,11.8,0,8.4,0C3.8,0,0,3.8,0,8.4c0,9.4,9.5,11.9,16,21.2c6.1-9.3,16-12.1,16-21.2C32,3.8,28.2,0,23.6,0z"
        />
      </svg>
    </div>
  </div>
</template>

<script>
import { mapActions } from 'vuex';

export default {
  name: 'ApartmentsCard',
  props: ['apartment'],
  data() {
    return {
      favorite: false,
    };
  },
  methods: {
    ...mapActions({
      ToggleLike: 'TOGGLE_LIKE',
    }),
    async like(id) {
      this.favorite = !this.favorite;
      await this.ToggleLike({ id: id, flag: this.favorite });
    },
  },
};
</script>

<style scoped>
.apartments__card {
  position: relative;
  padding: 10px;
  margin: 10px;
  flex: 1 16%;
  border: 1px solid;
}
p {
  font-size: 16px;
  color: #696969;
}
@media screen and (max-width: 40em) {
  .apartments__card {
    flex: none;
  }
}

.like svg {
  fill: #a0a0a0;
  position: absolute;
  bottom: 15px;
  right: 15px;
  width: 20px;
  cursor: pointer;
}

.like.active svg {
  fill: #ff0000;
}
</style>
