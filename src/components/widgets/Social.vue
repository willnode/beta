<template>
  <div class="social">
    <a
      v-for="b in args"
      :key="b.url"
      :href="b.url"
      :style="{'--fill': b.color}"
      class="btn btn-outline-light btn-social"
    >
      <component :is="'icon-' + (b.icon || b.title.toLowerCase())"/>
      {{b.title}}
    </a>
  </div>
</template>

<script>
export class Icon {
  constructor(title, url, color, icon) {
    this.title = title;
    this.url = url;
    this.color = color;
    this.icon = icon;
  }
}
export default {
  props: {
    /** @type Array<Icon> */
    args: Array // of Icon
  }
};
</script>
