<script setup lang="ts">
import { ref,defineProps,defineEmits,computed } from 'vue';
const emit = defineEmits(['update:description']);
const props = defineProps({
    description: String
});

const over = ref<boolean>(false);

const descriptionComputed = computed({
  get: () => props.description,
  set: (value) => {
    if(value.length > 30){
      over.value=true;
    }else{
      over.value=false;
    }
    emit('update:description', value);
  },
});
</script>
    
<template>
<input placeholder="tweet" type="text" class="input" :class="[over ? 'over' : '']" maxlength="31" v-model.trim="descriptionComputed">
</template>
    
<style scoped lang="scss">
@import "@/assets/sass/app2.scss";
.input {
 line-height: 28px;
 border: 1px solid $green-1;
 padding: 4px;
 outline: none;
 background-color: #fff;
 color: $green-1;
 transition: .3s cubic-bezier(0.645, 0.045, 0.355, 1);

 &.over{
  background-color: rgb(255, 237, 237);
  position: relative;
 }
}

.input:focus, input:hover {
 outline: none;
 border-radius: 1rem;
 border-color: $green-1;
}

.input::placeholder {
 color: $green-1;
}

.input:focus::placeholder {
 opacity: 0;
 transition: opacity .3s;
}
</style>