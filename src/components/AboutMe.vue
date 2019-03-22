<template>
  <div class="container mt-5">
    <div class="container pt-2 text-center"></div>
    <br>
    <div class="container-fluid pt-2 animated fadeInLeftBig faster">
      <div class="row">
        <div class="col-sm-12 col-md-6">
          <h2>About Me</h2>
          <p class="paragraph rounded">
            &nbsp; Hi! My name is Polat Coban, and i am from Turkey. I moved into the US in May, 2013. Afterwards, I graduated from St. Mary's University
            with a masters in computer science degree. While in the college, learning aspects of computer science and related fields as electronical
            engineering was thrilling and inspiring to create systems for people for their need. Furthermore, I have been working as a software developer
            in Boerne, TX since my graduation. During my career, i have worked with wide range of platforms and languages. (C#, SQL, WCF, Windows Forms, UWP, XML, Java, JS, MangoDB, PostgreSQL)
            However, recently i have been focusing to be a Full Stack Engineer.(SQL,ExpressJS,Vue-CLI, NodeJS Stack). Along with these technologies, i have special interests in Machine Learning and Artificial Intelligence.
            <br>&nbsp; Aside from my carreer, I love being active, though i am a sucker for video games! I train martial arts to keep me in shape. Discipline and philosophy of training is something
            so valuable that i believe everyone has to taste it at some point in their lives. Lastly, I and my wife love to travel! Recently, we had a road trip in entire state of Colorado!
            What a beautiful natural state it was. Our favorite spot was Hanging Lake. It was a long climb, but it totally worth it!
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
