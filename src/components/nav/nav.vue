<template>
  <div class="f-nav" :class="direction">
    <slot></slot>
  </div>
</template>
<script>
export default {
  name: "FlyNav",
  props: {
    selected: {
      type: Array,
      default: () => []
    },
    multiple: {
      type: Boolean,
      default: false
    },
    direction: {
      type: String,
      default: 'horizontal',
      validator(val){return ['horizontal','vertical'].indexOf(val) > -1}
    }
  },
  provide(){
    return {
      root: this,
      direction: this.direction
    }
  },
  data(){
    return {
      items: [],
      namePath: []
    }
  },
  mounted() {
    this.updateChildren();
    this.listenToChildren();
  },
  updated() {
    this.updateChildren();
  },
  methods: {
    addItems(vm){
      this.items.push(vm);
    },
    updateChildren() {
      this.items.forEach(vm => {
        vm.selected = this.selected.indexOf(vm.name) > -1;
      });
    },
    listenToChildren() {
      this.items.forEach(vm => {
        vm.$on("add:selected", name => {
          if (this.multiple) {
            if (this.selected.indexOf(name) === -1) {
              let copy = JSON.parse(JSON.stringify(this.selected));
              copy.push(name);
              this.$emit("update:selected", copy);
            }
          } else {
            this.$emit("update:selected", [name]);
          }
        });
      });
    }
  }
};
</script>
<style lang="scss" scoped>
@import 'style/_variable';
.f-nav {
  display: flex;
  user-select: none;
  border-bottom: 1px solid #e6e6e6;
  &.vertical{
    flex-direction: column;
    border: 1px solid #e6e6e6;
  }
}
</style>


