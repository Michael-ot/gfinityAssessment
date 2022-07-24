<template>
  <div>
    <div v-if="item && !loading" class=" px-[23px] py-[32px] font-manrope">
      <div class=" py-[45px] px-[9px] md:px-[18px] lg:pl-[16px]  lg:pr-[70px] lg:flex lg:space-x-[50px]" style="background: linear-gradient(180deg, #0A0A0A 0%, #161616 52.33%, #0D0D0D 100%); border-radius: 12px;">
        <div class=" w-full flex-shrink-0 lg:w-[182px] mx-auto mb-[23px] lg:mb-0">
          <img class=" block mx-auto" :src=" item? imageUrlFor(item.cardImage) : ''" />
        </div>
        <div class=" w-full grid grid-cols-3  lg:grid-cols-6 gap-x-[11px] gap-y-[25px]">
          <DetailsAbility v-for="[stateName,stat] in Object.entries(item.statistics)" :stat="stat" :statName="stateName" ></DetailsAbility>
        </div>
      </div>
      <div class=" px-[22px] mt-[40px]">
        <h1 class=" text-[36px] text-white flex items-end mb-[35px]">
          <span>{{item.name}}</span>
          <span class="ml-[6px] text-[#848282] text-[12px] border-b-[0.5px] border-[#848282] border-dashed pb-1 mb-2">View all cards</span>
        </h1>
        <div class=" grid grid-cols-1 lg:grid-cols-7 gap-x-[17px] text-white lg:text-[#848282] text-left">
          <PersonalDetail v-bind:key="'club'" :title="'Club'" :value="item.club"></PersonalDetail>
          <PersonalDetail v-bind:key="'League'" :title="'League'" :value="item.league"></PersonalDetail>
          <PersonalDetail v-bind:key="'Nation'" :title="'Nation'" :value="item.nation"></PersonalDetail>
          <PersonalDetail v-bind:key="'Strong Foot'" :title="'Strong Foot'" :value="item.strongFoot"></PersonalDetail>
          <PersonalDetail v-bind:key="'Age'" :title="'Age'" :value="item.age.substring(0,2)"></PersonalDetail>
          <PersonalDetail v-bind:key="'Height'" :title="'Height'" :value="item.height"></PersonalDetail>
          <PersonalDetail v-bind:key="'Workrates'" :title="'Workrates'" :value="`${item.workRatesAttacking} / ${item.workRatesDefensive}`" :customCss="`!border-r-0`"></PersonalDetail>
        </div>
      </div>
    </div>
    <p v-if="loading" class="text-base font-manrope text-center text-white py-16">Loading...</p>
  </div>
</template>
<script >
  import sanity from "../../client";
  import imageUrlBuilder from "@sanity/image-url";
  import PersonalDetail from "../../components/details/PersonalDetail.vue";

  const imageBuilder = imageUrlBuilder(sanity);

  export default {
    components: { PersonalDetail },
    data() {
      return {
        loading: true,
        item:{},
        query :`*[_type == "fifaCard" && _id=="${this.$route.params.details}"] `
      };
    },
    created() {
      this.fetchData();
    },
    methods: {
       imageUrlFor(source) {
        return imageBuilder.image(source);
      },
      fetchData() {
        this.error = this.item = null;
        this.loading = true;
        sanity.fetch(this.query).then(
          (fifaCard) => {
            this.loading = false;
            this.item = fifaCard[0];
            console.log(this.item)
          },
          (error) => {
            this.error = error;
          }
        );
      },
    },
  };
</script>
