<template>
  <div class="bg-main-black summary">
  
    <div class="summary-view">
      <div class="clash-card barbarian">
        <div class="clash-card__image clash-card__image--barbarian">
          
        </div>
        <h3 class="px-6 py-2 text-left text-gray-700">SUMMARY</h3>
        <div class="flex items-center justify-around pt-6 pb-8">
          <section class="arc">
            <vep 
            :data="data"                    
            :angle="-90"                 
            :size="150"
            :thickness="10"
            emptyThickness="10%"
            lineMode="normal"
            :legend="true"
            :noData="false"
            :loading="false"                      
            :half="false"
          />
          </section>
          <section class="indicators text-gray-700">
            <label class="my-4" for="">
              <span class="flex">
                <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-circle" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
                  <path stroke="none" d="M0 0h24v24H0z"/>
                  <circle cx="12" cy="12" r="9"/>
                </svg>
                <p>Correct</p>
              </span>
              <p class="block">{{numCorrectData}}</p>
            </label>

            <label class="my-4" for="">
              <span class="flex">
                <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-circle" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
                  <path stroke="none" d="M0 0h24v24H0z"/>
                  <circle cx="12" cy="12" r="9"/>
                </svg>
                <p>Missed</p>
              </span>
              <p>{{numIncorrectData}}</p>
            </label>

            <label class="my-4" for="">
              <span class="flex">
                <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-circle" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
                  <path stroke="none" d="M0 0h24v24H0z"/>
                  <circle cx="12" cy="12" r="9"/>
                </svg>
                <p>Skipped</p>
              </span>
              <p>{{numUnansweredData}}</p>
            </label>
          </section>
        </div>
      </div> <!-- end clash-card barbarian-->
    </div> <!-- end wrapper -->

    
    <div class="score-view">
      <div class="clash-card archer">
        <div class="clash-card__image clash-card__image--archer">
          
        </div>
        <h3 class="px-6 py-2 text-left text-gray-700">SCORE</h3>
        <div class="flex justify-center items-center flex-col p-8">
          <div class="total-answered">
            <p>{{numCorrectData + numIncorrectData}}</p>
          </div>
          <div class="total-questions">
            <p>from {{total}} questions</p>
          </div>
        </div>
      </div> <!-- end clash-card archer-->
    </div> <!-- end wrapper -->

    <div class="points-view">
      <div class="clash-card archer">
        <div class="clash-card__image clash-card__image--archer">
          
        </div>
        <h3 class="px-6 py-2 text-left text-gray-700">POINTS</h3>
        <div class="flex justify-center items-center flex-col p-8">
          <div class="total-points">
            <p>{{numTotalPoints}}.00</p>
          </div>
          <div class="overall-points">
            <p>from {{overAllPointsData}}.00 points</p>
          </div>
        </div>
      </div> <!-- end clash-card archer-->
    </div> <!-- end wrapper -->

  </div>
</template>

<script>
  import { mapGetters } from "vuex";
  export default {
    name: "summary_view",
      computed:{
      ...mapGetters([
        'numQuestionsData','numTotalPoints', 
        'numUnansweredData', 'numIncorrectData', 
        'numCorrectData', 'overAllPointsData'
      ]),
      total(){
        return this.numIncorrectData + this.numCorrectData + this.numUnansweredData;
      }
    },
    data(){
      return{
        data: [
          { 
            progress: this.numCorrectData* 100 / this.total, // required for each circle
            // animation: "rs 1500 500", 
            color: "green;",  // will overwrite global progress color
            emptyColor:"#8ec5fc",
          },
          { 
            progress:this.numIncorrectData* 100 / this.total, // required for each circle
            // animation: "rs 1500 500", 
            color: "red",  // will overwrite global progress color
            emptyColor:"#8ec5fc",
          },
          { 
            progress: this.numUnansweredData* 100 / this.total, // required for each circle
            // animation: "rs 1500 500",  // you can set almost any option that will be specific to this circle
            color: "gray",
            emptyColor:"#8ec5fc",
          },
          
        ]
      }
    }
  }
</script>

<style lang="scss" scoped>
  @import url(https://fonts.googleapis.com/css?family=Lato:400,700,900);

$border-radius-size: 14px;
$barbarian: #EC9B3B;
$archer: #EE5487;

.summary{
  display: flex;
  flex-wrap: wrap;
  justify-content: space-evenly;
  align-items: center;
}

.clash-card {
  background: white;
  width: 300px;
  display: inline-block;
  margin: auto;
  border-radius: $border-radius-size + 5;
  position: relative;
  text-align: center;
  box-shadow: -1px 15px 30px -12px black;
  z-index: 9999;
}

.clash-card__level {
  text-transform: uppercase;
  font-size: 12px;
  font-weight: 700;
  margin-bottom: 3px;
}
div.total-answered, div.total-points{
  &>p{
    font-size: 5rem;
  }
}

div.total-questions, div.overall-points{
  &>p{
    font-size: 1.5rem;
  }
}
.score-view, .points-view{
  color: #0c252f;
}
</style>