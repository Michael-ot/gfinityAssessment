<template>
  <div :class=" `border-b lg:border-b-0 lg:border-r font-bold border-[#44444B] py-[17px] lg:py-[9px] flex justify-between lg:block space-x-4 lg:space-x-0 ${customCss}`">
    <p class=" font-bold font-manrope-Bold">{{title}}</p>
    <p class=" font-normal text-white lg:mt-[18px]">{{value}}</p>
  </div>
</template>
<script>

  export default{
    name:'PersonalDetail',
    props:[
      'title',
      'value',
      'customCss'
    ]
  }
</script>
