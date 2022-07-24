<template>
  <div>
    <div v-if="!loading" class="overflow-x-auto py-[50px] ">
        <table class=" text-white w-full text-sm">
          <thead>
            <tr class=" h-[44px] text-left font-[400] font-manrope">
              <th class=" pl-[34px] lg:pl-[126px] pr-[17px] font-[400] ">
                <div class=" w-full flex items-center justify-between space-x-3">
                  <span>Name</span>
                  <svg width="10" height="12" viewBox="0 0 10 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M4.71468 0.227171L0.4788 4.7051C0.297879 4.89636 0.433467 5.21127 0.69674 5.21127H9.28953C9.55483 5.21127 9.68956 4.8922 9.50455 4.70206L5.14764 0.224124C5.0287 0.101876 4.8319 0.103261 4.71468 0.227171Z" fill="white"/>
                    <path d="M5.35416 11.2497L9.5295 6.77184C9.70835 6.58004 9.57234 6.26725 9.31009 6.26725L0.717359 6.26725C0.45107 6.26725 0.316779 6.58836 0.503788 6.77793L4.92118 11.2558C5.04099 11.3773 5.23782 11.3745 5.35416 11.2497Z" fill="white"/>
                  </svg>
                </div>

              </th>
              <th class=" px-[17px] font-[400] ">
                <div class=" w-full flex items-center justify-between space-x-3">
                  <span>OVR</span>
                  <svg width="10" height="12" viewBox="0 0 10 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M4.71468 0.227171L0.4788 4.7051C0.297879 4.89636 0.433467 5.21127 0.69674 5.21127H9.28953C9.55483 5.21127 9.68956 4.8922 9.50455 4.70206L5.14764 0.224124C5.0287 0.101876 4.8319 0.103261 4.71468 0.227171Z" fill="white"/>
                    <path d="M5.35416 11.2497L9.5295 6.77184C9.70835 6.58004 9.57234 6.26725 9.31009 6.26725L0.717359 6.26725C0.45107 6.26725 0.316779 6.58836 0.503788 6.77793L4.92118 11.2558C5.04099 11.3773 5.23782 11.3745 5.35416 11.2497Z" fill="white"/>
                  </svg>
                </div>
              </th>
              <th class=" px-[17px] font-[400]">
                <div class=" w-full flex items-center justify-between space-x-3">
                  <span>POS</span>
                  <svg width="10" height="12" viewBox="0 0 10 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M4.71468 0.227171L0.4788 4.7051C0.297879 4.89636 0.433467 5.21127 0.69674 5.21127H9.28953C9.55483 5.21127 9.68956 4.8922 9.50455 4.70206L5.14764 0.224124C5.0287 0.101876 4.8319 0.103261 4.71468 0.227171Z" fill="white"/>
                    <path d="M5.35416 11.2497L9.5295 6.77184C9.70835 6.58004 9.57234 6.26725 9.31009 6.26725L0.717359 6.26725C0.45107 6.26725 0.316779 6.58836 0.503788 6.77793L4.92118 11.2558C5.04099 11.3773 5.23782 11.3745 5.35416 11.2497Z" fill="white"/>
                  </svg>
                </div>
              </th>
              <th class=" px-[17px] font-[400]">
                <div class=" w-full flex items-center justify-between space-x-3">
                  <span>Type</span>
                  <svg width="10" height="12" viewBox="0 0 10 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M4.71468 0.227171L0.4788 4.7051C0.297879 4.89636 0.433467 5.21127 0.69674 5.21127H9.28953C9.55483 5.21127 9.68956 4.8922 9.50455 4.70206L5.14764 0.224124C5.0287 0.101876 4.8319 0.103261 4.71468 0.227171Z" fill="white"/>
                    <path d="M5.35416 11.2497L9.5295 6.77184C9.70835 6.58004 9.57234 6.26725 9.31009 6.26725L0.717359 6.26725C0.45107 6.26725 0.316779 6.58836 0.503788 6.77793L4.92118 11.2558C5.04099 11.3773 5.23782 11.3745 5.35416 11.2497Z" fill="white"/>
                  </svg>
                </div>
              </th>
              <th class=" px-[17px] font-[400]">
                <div class=" w-full flex items-center justify-between space-x-3">
                  <span>PAC</span>
                  <svg width="10" height="12" viewBox="0 0 10 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M4.71468 0.227171L0.4788 4.7051C0.297879 4.89636 0.433467 5.21127 0.69674 5.21127H9.28953C9.55483 5.21127 9.68956 4.8922 9.50455 4.70206L5.14764 0.224124C5.0287 0.101876 4.8319 0.103261 4.71468 0.227171Z" fill="white"/>
                    <path d="M5.35416 11.2497L9.5295 6.77184C9.70835 6.58004 9.57234 6.26725 9.31009 6.26725L0.717359 6.26725C0.45107 6.26725 0.316779 6.58836 0.503788 6.77793L4.92118 11.2558C5.04099 11.3773 5.23782 11.3745 5.35416 11.2497Z" fill="white"/>
                  </svg>
                </div>
              </th>
              <th class=" px-[17px] font-[400]">
                <div class=" w-full flex items-center justify-between space-x-3">
                  <span>SHO</span>
                  <svg width="10" height="12" viewBox="0 0 10 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M4.71468 0.227171L0.4788 4.7051C0.297879 4.89636 0.433467 5.21127 0.69674 5.21127H9.28953C9.55483 5.21127 9.68956 4.8922 9.50455 4.70206L5.14764 0.224124C5.0287 0.101876 4.8319 0.103261 4.71468 0.227171Z" fill="white"/>
                    <path d="M5.35416 11.2497L9.5295 6.77184C9.70835 6.58004 9.57234 6.26725 9.31009 6.26725L0.717359 6.26725C0.45107 6.26725 0.316779 6.58836 0.503788 6.77793L4.92118 11.2558C5.04099 11.3773 5.23782 11.3745 5.35416 11.2497Z" fill="white"/>
                  </svg>
                </div>
              </th>
              <th class=" px-[17px] font-[400]">



                <div class=" w-full flex items-center justify-between space-x-3">
                  <span>PAS</span>
                  <svg width="10" height="12" viewBox="0 0 10 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M4.71468 0.227171L0.4788 4.7051C0.297879 4.89636 0.433467 5.21127 0.69674 5.21127H9.28953C9.55483 5.21127 9.68956 4.8922 9.50455 4.70206L5.14764 0.224124C5.0287 0.101876 4.8319 0.103261 4.71468 0.227171Z" fill="white"/>
                    <path d="M5.35416 11.2497L9.5295 6.77184C9.70835 6.58004 9.57234 6.26725 9.31009 6.26725L0.717359 6.26725C0.45107 6.26725 0.316779 6.58836 0.503788 6.77793L4.92118 11.2558C5.04099 11.3773 5.23782 11.3745 5.35416 11.2497Z" fill="white"/>
                  </svg>
                </div>
              </th>
              <th class=" px-[17px] font-[400]">
                <div class=" w-full flex items-center justify-between space-x-3">
                  <span>DRI</span>
                  <svg width="10" height="12" viewBox="0 0 10 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M4.71468 0.227171L0.4788 4.7051C0.297879 4.89636 0.433467 5.21127 0.69674 5.21127H9.28953C9.55483 5.21127 9.68956 4.8922 9.50455 4.70206L5.14764 0.224124C5.0287 0.101876 4.8319 0.103261 4.71468 0.227171Z" fill="white"/>
                    <path d="M5.35416 11.2497L9.5295 6.77184C9.70835 6.58004 9.57234 6.26725 9.31009 6.26725L0.717359 6.26725C0.45107 6.26725 0.316779 6.58836 0.503788 6.77793L4.92118 11.2558C5.04099 11.3773 5.23782 11.3745 5.35416 11.2497Z" fill="white"/>
                  </svg>
                </div>
              </th>
              <th class=" px-[17px] font-[400]">
                <div class=" w-full flex items-center justify-between space-x-3">
                  <span>DEF</span>
                  <svg width="10" height="12" viewBox="0 0 10 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M4.71468 0.227171L0.4788 4.7051C0.297879 4.89636 0.433467 5.21127 0.69674 5.21127H9.28953C9.55483 5.21127 9.68956 4.8922 9.50455 4.70206L5.14764 0.224124C5.0287 0.101876 4.8319 0.103261 4.71468 0.227171Z" fill="white"/>
                    <path d="M5.35416 11.2497L9.5295 6.77184C9.70835 6.58004 9.57234 6.26725 9.31009 6.26725L0.717359 6.26725C0.45107 6.26725 0.316779 6.58836 0.503788 6.77793L4.92118 11.2558C5.04099 11.3773 5.23782 11.3745 5.35416 11.2497Z" fill="white"/>
                  </svg>
                </div>
              </th>
              <th class=" px-[17px]font-[400]">
                <div class=" w-full flex items-center justify-between space-x-3">
                  <span>PHY</span>
                  <svg width="10" height="12" viewBox="0 0 10 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M4.71468 0.227171L0.4788 4.7051C0.297879 4.89636 0.433467 5.21127 0.69674 5.21127H9.28953C9.55483 5.21127 9.68956 4.8922 9.50455 4.70206L5.14764 0.224124C5.0287 0.101876 4.8319 0.103261 4.71468 0.227171Z" fill="white"/>
                    <path d="M5.35416 11.2497L9.5295 6.77184C9.70835 6.58004 9.57234 6.26725 9.31009 6.26725L0.717359 6.26725C0.45107 6.26725 0.316779 6.58836 0.503788 6.77793L4.92118 11.2558C5.04099 11.3773 5.23782 11.3745 5.35416 11.2497Z" fill="white"/>
                  </svg>
                </div>
              </th>
              <th class=" pl-[17px] lg:pr-[126px] pr-[34px] font-[400]">
                <div class=" w-full flex items-center justify-between space-x-3">
                  <span>WR</span>
                  <svg width="10" height="12" viewBox="0 0 10 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M4.71468 0.227171L0.4788 4.7051C0.297879 4.89636 0.433467 5.21127 0.69674 5.21127H9.28953C9.55483 5.21127 9.68956 4.8922 9.50455 4.70206L5.14764 0.224124C5.0287 0.101876 4.8319 0.103261 4.71468 0.227171Z" fill="white"/>
                    <path d="M5.35416 11.2497L9.5295 6.77184C9.70835 6.58004 9.57234 6.26725 9.31009 6.26725L0.717359 6.26725C0.45107 6.26725 0.316779 6.58836 0.503788 6.77793L4.92118 11.2558C5.04099 11.3773 5.23782 11.3745 5.35416 11.2497Z" fill="white"/>
                  </svg>
                </div>
              </th>
            </tr>
          </thead>
          <tbody class=" uppercase text-[10px] font-manrope">
            <tr v-for="fifaCard in fifaCards" v-bind:key="fifaCard._id" @click="$router.push(`/details/${fifaCard._id}`)" class="bg-[#101010] border-b border-[#000000]">
              <td class=" pl-[34px] lg:pl-[126px] pr-[17px]">{{fifaCard.name}}</td>

              <td class=" px-[17px] py-[13px]">
                <div class=" bg-white w-[46px] h-[31px] rounded text-black flex items-center justify-center">
                  <span>{{fifaCard.rating}}</span>
                </div>
              </td>

              <td class=" px-[17px] py-[13px]">
                <div class=" bg-black w-[46px] h-[31px] rounded text-white flex items-center justify-center">
                  <span>{{fifaCard.position}}</span>
                </div>
              </td>

              <td class=" px-[17px] py-[13px]">
                <div class=" bg-black w-[46px] h-[31px] rounded text-white flex items-center justify-center">
                  <span>{{fifaCard.cardType}}</span>
                </div>
              </td>

              <td class=" px-[17px] py-[13px]">
                <div class=" bg-black w-[46px] h-[31px] rounded text-white flex items-center justify-center border border-white">
                  <span>{{fifaCard.statistics.pace.average}}</span>
                </div>
              </td>

              <td class=" px-[17px] py-[13px]">
                <div class=" bg-black w-[46px] h-[31px] rounded text-white flex items-center justify-center border border-white">
                  <span>{{fifaCard.statistics.shooting.average}}</span>
                </div>
              </td>

              <td class=" px-[17px] py-[13px]">
                <div class=" bg-black w-[46px] h-[31px] rounded text-white flex items-center justify-center border border-white">
                  <span>{{fifaCard.statistics.passing.average}}</span>
                </div>
              </td>

              <td class=" px-[17px] py-[13px]">
                <div class=" bg-black w-[46px] h-[31px] rounded text-white flex items-center justify-center border border-white">
                  <span>{{fifaCard.statistics.dribbling.average}}</span>
                </div>
              </td>
              <td class=" px-[17px] py-[13px]">
                <div class=" bg-black w-[46px] h-[31px] rounded text-white flex items-center justify-center border border-white">
                  <span>{{fifaCard.statistics.defense.average}}</span>
                </div>
              </td>

              <td class=" px-[17px] py-[13px]">
                <div class=" bg-black w-[46px] h-[31px] rounded text-white flex items-center justify-center border border-white">
                  <span>{{fifaCard.statistics.physical.average}}</span>
                </div>
              </td>

              <td class=" px-[17px] py-[13px]">
                <div class=" bg-black w-[46px] h-[31px] rounded text-white flex items-center justify-center">
                  <span>{{fifaCard.workRatesAttacking.substring(0,1)}}/{{fifaCard.workRatesDefensive.substring(0,1)}}</span>
                </div>
              </td>
            </tr>

          </tbody>
        </table>
    </div>
    <p v-if="loading" class="text-base font-manrope text-center text-white py-16">Loading...</p>
  </div>
</template>
<script >
  import sanity from "../client";

  export default {
    name: "Listing",
    data() {
      return {
        loading: true,
        fifaCards: [],
        query : `*[_type == "fifaCard"]`
      };
    },
    created() {
      this.fetchData();
    },
    methods: {
      fetchData() {
        this.error = this.fifaCards = null;
        this.loading = true;
        sanity.fetch(this.query).then(
          (fifaCard) => {
            this.loading = false;
            this.fifaCards = fifaCard;
            console.log(this.fifaCards)
          },
          (error) => {
            this.error = error;
          }
        );
      },
    },
  };
</script>
