const app = Vue.createApp({
  data() {
    return {
      courseGoal: "Finish the course and learn vue!",
      courseGoalA: "Finish the course and learn vue!",
      courseGoalB: "Master Vue course and build amazing apps!",
      courseGoalC: "<h1>Master Vue course and build amazing apps!</h1>",
      vueLink: "https://vuejs.org/",
    };
  },
  methods: {
    outputGoal() {
      const randomNumber = Math.random();
      if (randomNumber < 0.5) {
        // return "Learn Vue!";
        return this.courseGoalA;
      } else {
        // return "Master Vue";
        return this.courseGoalB;
      }
    },
  },
});

app.mount("#user-goal");
