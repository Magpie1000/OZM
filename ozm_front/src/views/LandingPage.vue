<template>
  <v-row class="mt-5">
    <v-col>
      <LandingPageCard 
        :title="`오프라인`"
        :imgURL="`https://1.bp.blogspot.com/-JoMGdgbM-hM/W64DU3bOpuI/AAAAAAABPF4/H-3K9sKnlgU84WXk0C5ek_s7343C0M1CQCLcBGAs/s400/bentou_businessman_cry.png`"
        :content="`붐비지 않는 식당에서 빨리 식사를 마치고 싶습니다.`"
      />
    </v-col>
    <v-col>
      <LandingPageCard 
        :title="`온라인`"
        :imgURL="`https://1.bp.blogspot.com/-MSVlmJAwKO8/XQjuilcZoeI/AAAAAAABTTM/QsOIxuWHmjku9GqcW-JggC9bnngiSUTEACLcBGAs/s800/syokuji_gyudon_businessman.png`"
        :content="`다소 시간적인 여유가 있습니다`"
      />
    </v-col>
  </v-row>
</template>

<script>
import LandingPageCard from '../components/cards/LandingPageCard.vue';

export default {
  name: 'LandingPage',
  components: {
    LandingPageCard,
  },
}
</script>

<style>

</style>