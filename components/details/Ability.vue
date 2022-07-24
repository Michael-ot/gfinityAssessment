
<template>
    <div v-if="stat" class=" text-sm text-white">
      <div class="flex justify-between border-t-2 border-b-2 border-white py-[6px] w-full">
        <span class="uppercase">{{statName.substring(0,3)}}</span>
        <span>{{stat.average}}</span>
      </div>

      <AbilityItem v-for="[property,value] in Object.entries(stat)" v-if="property != 'average'" :abilityName="property" :abilityValue="value"></AbilityItem>
    </div>
</template>
<script>
import AbilityItem from './Ability/AbilityItem.vue'

  export default{
    name: "Ability",
    props: ["stat","statName"],
    created() {
        console.log(this.stat);
    },
    components: { AbilityItem }
  }
</script>
