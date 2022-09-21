<script setup lang="ts">
import { ref,inject } from 'vue';
import Input from '@/components/InputComponent.vue';
import Button from '@/components/ButtonComponent.vue';

const description = ref<string>('');

const _addTweet = inject('addTweet');
const addTweet = (input: string) =>{
  if(input === '' || input.length > 30) return;
  _addTweet(input);
  description.value = '';
}

</script>
    
<template>
<form class="form">
  <p class="error" v-if="description.length >30">30文字以内で入力してください。</p>
  <Input v-model:description="description"/>
  <Button @click.prevent="addTweet(description)">Button</Button>
</form>
</template>
    
<style scoped lang="scss">
@import "@/assets/sass/app2.scss";
.error{
  color: rgb(253, 123, 123);
}
.form{
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: $green-2;
  padding: 24px 0;
  width: 60%;
  margin: 0 auto;
  margin-top: 8px;
  border-radius: 4px;

  input{
    width: 50%;
  }
  button{
    margin-top: 12px;
  }
}
</style>