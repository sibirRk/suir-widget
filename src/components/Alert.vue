<template>
  <div class="flow-catalog-alert">
    <div class="flow-catalog-alert__wrapper">
      <div class="flow-catalog-alert__inner flow-catalog-alert__inner_with-icon">
        <svg class="flow-catalog-alert__icon">
          <use xlink:href="#danger-icon"></use>
        </svg>
        <div class="flow-catalog-alert__title">Экстренное предупреждение</div>
        <p class="flow-catalog-alert__description">В Краснодарском крае ожидается ухудшение
        </p>
        <div class="flow-catalog-alert__source">МЧС России</div>
        <div class="flow-catalog-alert__time">14:00</div>
        <a href="#" class="flow-catalog-alert__more-btn">Подробнее</a></div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'alert',
    props: {
    }
  }
</script>