<script setup lang="ts">
import DleteButton from '@/components/DeleteButtonComponent.vue';
import { inject } from 'vue';
const tweets = inject('tweets');

const _deleteTweet = inject('deleteTweet');
const deleteTweet = (id: number) =>{
  _deleteTweet(id);
}
</script>
      
<template>
<p v-if="tweets.length <= 0" class="error">No tweets have been added</p>
<ul v-else class="list">
  <li v-for="(tweet, index) in tweets" :key="tweet.id">
    <p>{{ index }}：{{ tweet.description }}</p>
    <DleteButton @click="deleteTweet(index)"/>
  </li>
</ul>
</template>
      
<style scoped lang="scss">
@import "@/assets/sass/app2.scss";
.error{
  text-align: center;
  margin-top: 16px;
  @include rem(20);
  font-weight: bold;
  color: $green-1;
}
.list{
  background-color: $green-2;
  width: 60%;
  padding: 24px;
  margin: 0 auto;
  border-radius: 4px;
  margin-top: 16px;

  li{
    width: 70%;
    margin: 0 auto;
    background-color: #fff;
    padding: 12px;
    display: flex;

    &:nth-child(n +2){
      margin-top: 12px;
    }

    p{
      @include rem(18);
      width: 100%;
      line-height: 36.5px;
      color: $green-1;
    }

    button{
      margin-left: 4px;
    }
  }
}
</style>