<template>
  <div class="btn-group-vertical">
    <button
      class="btn btn-outline-light text-left p-0 pr-3"
      v-for="(m,k) in args"
      :key="k"
    >
      <span
        class="d-inline-block font-weight-bold text-right btn-success px-2 py-1"
        style="width:100px"
      >{{k}}</span>
      -- {{m}}
    </button>
  </div>
</template>

<script>
export default {
  props: {
    args: Object
  }
};
</script>
