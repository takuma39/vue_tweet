<script setup lang="ts">
import FormComponent from '@/components/FormComponent.vue';
import ListComponent from '@/components/ListComponent.vue';
import { ref,provide } from 'vue';

type Tweet ={
  description:string
}
const tweets = ref<Tweet[]>([]);

const addTweet = (description:string)=>{
  const newTweet:Tweet = {
    description
  }
  tweets.value.push(newTweet);
}

const deleteTweet = (index: number) => {
  tweets.value.splice(index, 1);
}

provide('tweets', tweets);
provide('addTweet', addTweet);
provide('deleteTweet', deleteTweet);
  

</script>

<template>
  <div class="tweet">
    <h2>Tweet</h2>
    <FormComponent/>
    <ListComponent/>
  </div>
</template>

<style scoped lang="scss">
@import "@/assets/sass/app2.scss";
.tweet{
  padding: 40px;
  h2{
    @include rem(30);
    font-weight: bold;
    text-align: center;
    color: $green-1;
  }
}
</style>
