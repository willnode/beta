<template>
  <div class="btn-group-vertical">
    <a class="btn btn-outline-light text-left" v-for="m in args.list" :key="m.uri" :href="m.uri">
      <img v-if="m.ig" :src="m.ig + 'media?size=t'" class="clearfix" width="40px">
      <span class="ml-2 d-inline-block">{{m.title}}</span>
    </a>
    <a class="btn btn-outline-light" :href="args.more.uri">
      <i>{{args.more.caption}}</i>
    </a>
  </div>
</template>

<script>
export default {
  props: {
    args: Object
  }
};
</script>

