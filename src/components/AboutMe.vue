<template>
  <div class="container mt-5">
    <div class="container pt-2 text-center"></div>
    <br>
    <div class="container-fluid pt-2 animated fadeInLeftBig faster">
      <div class="row">
        <div class="col-sm-12 col-md-6">
          <h2>About Me</h2>
          <p class="paragraph rounded">
            &nbsp; My name is Polat Coban, and I am from Turkey.
            I moved to the United States to obtain my masters degree
            in computer science from St. Mary’s University.
            My passion is to create systems to enable people to
            fulfill their needs. While in college,
            i found learning aspects of computer science
            and related fields, such as electrical engineering,
            thrilling and inspiring. Since graduation,
            I have been working as a software developer in Boerne, TX.
            During my career, i have worked with a wide range of
            platforms and languages (C#, SQL, WCF, Windows Forms,
            UWP, XML, Java, JS, MangoDB, PostgreSQL).Recently,
            i have been focusing on becoming a Full Stack Engineer
            using systems such as SQL,ExpressJS,Vue-CLI, and
            NodeJS Stack. Along with these technologies, i
            have special interests in Machine Learning
            and Artificial Intelligence.
            <br>&nbsp; Aside from my career,
            I love being active as well as enjoy video games.
            I train martial arts to keep me in shape.
            Discipline and philosophy of training is
            something so valuable that i believe
            everyone has to taste it at some point in their lives.
            Lastly, my wife and I love to travel.
            Recently, we embarked on a road trip through Colorado.
            Our favorite spot was Hanging Lake. It was a long climb,
            but it totally worth it. Our small family includes
            an elderly puppy retriever, Charlie, and our new puppy, Maximus.
          </p>
        </div>
        <div class="col-md-6" style="background-color:white">
          <br>
          <AboutMeCarousel/>
        </div>
      </div>
    </div>
    <br>
  </div>
</template>

<script>
import AboutMeCarousel from "./LayoutComponents/Carousel-AboutMe.vue";
export default {
  components: {
    AboutMeCarousel
  },
  data() {
    return {};
  }
};
</script>

<style>
.paragraph {
  font-size: 15px;
  line-height: 200%;
}
</style>
