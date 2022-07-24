<template>
    <div class="flex justify-between  py-[16px]">
      <span class="text-[11px] capitalize">{{abilityName}} </span>
      <span>{{abilityValue}}</span>
    </div>
</template>
<script>
  export default{
    props:[
      'abilityName',
      'abilityValue'
    ],
    created(){
      // console.log(name +'->'+value)
    }
  }
</script>
