<template>
  <div id="app">
    <h1 style="text-align:center">Coronavirus no Brasil</h1>
    <!-- <p style="margin-bottom: 20px">Por Beto Cestari</p> -->

    <h2 style="margin-bottom: 20px; text-align:center">{{ latest.date }}</h2>

    <div>
      <div style="text-align:center;margin: 0 auto">
        <p>
          <strong style="font-size: 50px; color:yellow; line-height:1">{{
            latest.confirmed - brazilData[1].confirmed
          }}</strong>
          novos
        </p>
        <strong style="font-size: 30px; line-height:1">{{
          latest.confirmed.toLocaleString()
        }}</strong>
        total
      </div>

      <br />
    </div>

    <div>
      <div style="text-align:center; margin: 0 auto">
        <p>
          <strong style="font-size: 50px; color:yellow; line-height:1">{{
            latest.deaths - brazilData[1].deaths
          }}</strong>
          mortes no dia
        </p>

        <strong style="font-size: 30px; line-height:1">{{
          latest.deaths.toLocaleString()
        }}</strong>
        mortes - total
      </div>

      <br />
    </div>
    <h2></h2>
    <hr style="margin-top:20px" />
    <h2 style="text-align:center">Histórico</h2>
    <div
      style="margin-top: 20px; margin-bottom: 20px"
      v-for="(day, key) in brazilData"
      :key="key"
    >
      <strong style="font-size:20px">{{ day.date }}</strong>
      <p>
        Casos confirmados: <strong>{{ day.confirmed.toLocaleString() }}</strong>
      </p>
      <!-- {{keyPlusOne = key + 1}} -->
      <p>
        Casos no Dia:
        <strong>{{
          (
            day.confirmed -
            (brazilData[parseInt(key) + 1]
              ? brazilData[parseInt(key) + 1].confirmed
              : 0)
          ).toLocaleString()
        }}</strong>
      </p>
      <p>
        Mortes no Dia:
        <strong>{{
          (
            day.deaths -
            (brazilData[parseInt(key) + 1]
              ? brazilData[parseInt(key) + 1].deaths
              : 0)
          ).toLocaleString()
        }}</strong>
      </p>
    </div>
  </div>
</template>

<script>
import "./styles.css";
export default {
  data() {
    return {
      beto: "lala",
      latest: {},
      brazilData: {}
    };
  },

  mounted() {
    fetch("https://pomber.github.io/covid19/timeseries.json")
      .then(response => response.json())
      .then(data => {
        this.brazilData = data["Brazil"].reverse();
        this.latest = data["Brazil"][0];
      });
  }
};
</script>
