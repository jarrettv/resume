<script setup lang="ts">

</script>

<template>

<header>
  <h1>Jarrett E. S. Vance</h1>
  <h2>Senior Software Architect</h2>
  <address>Vestavia Hills, AL 35216<br/>
  <a href="mailto:jarrettv@gmail.com">jarrettv@gmail.com</a></address>
</header>

<main>
  <section style="margin-right:4rem">
    <h3>About</h3>
    <p>Jarrett has twenty years of experience in software engineering including QA, BI, machine vision, desktop, mobile, IoT, and web. However, he prefers building enterprise web applications using the latest in web and cloud technologies. He has experience building scalable solutions for both AWS and Azure.</p>
    <p>Jarrett is unique in his ability to both engineer and design great user experiences.</p>
    <p>Jarrett speaks at user groups and technical conferences across the southeast. He has also taught classes at UAB and run foundation training for junior engineers.</p>

    <h3>Education</h3>
    <article>
      <svg width="48" height="48"><use href="#icon-auburn"/></svg>
      <div>
        <strong>Auburn University</strong>
        <div>BSCS, Computer Science</div>
        <div style="font-size:0.8rem;opacity:0.8">1999-2003</div>
      </div>
    </article>

    <h3>Experience</h3>
    <article>
      <svg width="48" height="48"><use href="#icon-illumicare"/></svg>
      <div>
        <strong>IllumiCare, Inc.</strong>
        <div>Senior Architect</div>
      </div>
      <address>
        <div>Birmingham, AL</div>
        <div class="sub">Nov 2017 - Present</div>
      </address>
    </article>
    <ul>
      <li>Architect solutions targeting AWS and Citrix</li>
      <li>Lead UX designer</li>
      <li>Develop best practices</li>
      <li>DynamoDB, Lambda, Fargate, ECS, SQS, S3, etc.</li>
    </ul>

    <article>
      <svg width="48" height="48"><use href="#icon-cgi"/></svg>
      <div>
        <strong>CGI</strong>
        <div>Senior Consultant</div>
      </div>
      <address>
        <div>Birmingham, AL</div>
        <div class="sub">May 2017 - Oct 2017</div>
      </address>
    </article>
    <ul>
      <li>Introduced southeast region to Cloud Foundry</li>
      <li>Establish enterprise architecture standards</li>
      <li>Apply 12 factor methodology to existing projects</li>
    </ul>
    
    <article>
      <svg width="48" height="48"><use href="#icon-cts"/></svg>
      <div>
        <strong>Computer Technology Solutions, Inc.</strong>
        <div>Architect <small style="opacity:0.8">(+3 more)</small></div>
      </div>
      <address>
        <div>Birmingham, AL</div>
        <div class="sub">Jan 2004 - May 2017</div>
      </address>
    </article>
    <ul>
      <li>Gained over 13 years of consulting experience</li>
      <li>Presented new technologies to leadership team</li>
      <li>Built and led bootcamps for new engineers</li>
      <li>Evaluated new technologies as part of R&D team</li>
      <li>Architect large modular solutions utilizing DDD</li>
      <li>Lead multiple UX focused engagements</li>
      <li>Provide rapid business value with agile methodology</li>
      <li>Modernized solutions to update mainframe backend</li>
      <li>Broad and deep experience building web-based solutions</li>
      <li>Created reusable design guidance <small style="opacity:0.9">(still in use today)</small></li>
      <li>Lead conversion for massive 4 year effort, SSIS</li>
      <li>Introduced messaging solutions for large clients, NServiceBus</li>
      <li>Pioneered large BI solution, BizTalk</li>
      <li>Lead engineer on machine vision solution</li>
      <li>Setup extensive automated testing solution, IBM Rational</li>
    </ul>

    <article>
      <svg width="48" height="48"><use href="#icon-auburn"/></svg>
      <div>
        <strong>Auburn University Libraries</strong>
        <div>IT Specialist</div>
      </div>
      <address>
        <div>Auburn, AL</div>
        <div class="sub">1999 - 2003</div>
      </address>
    </article>
    <ul>
      <li>Designed novel digital cataloging methods</li>
      <li>Designed AubieCat card catalog</li>
    </ul>
  </section>
  <section>
    <div class="links">
      <a href="https://github.com/jarrettv"><svg width="20" height="20"><use href="#icon-github"/></svg>jarrettv</a>
      <a href="https://www.linkedin.com/in/jarrettv"><svg width="20" height="20"><use href="#icon-linkedin"/></svg>jarrettv</a>
      <a href="https://twitter.com/jarrettv"><svg width="20" height="20"><use href="#icon-twitter"/></svg>jarrettv</a>
    </div>
    <h3>Specialties</h3>
    <ul>
      <li>agile</li>
      <li>service oriented architecture</li>
      <li>domain driven design</li>
      <li>UX design (wireframes/mockups)</li>
      <li>enterprise applications</li>
      <li>microservices</li>
      <li>event driven architecture</li>
      <li>data integration</li>
    </ul>
    <h3>Technologies</h3>
    <ul>
      <li>VueJS, React, Typescript</li>
      <li>C#, .NET, Python, NodeJS</li>
      <li>SQL, Mongo, Cosmos</li>
      <li>REST, gRPC, GraphQL</li>
      <li>Arduino, MQTT, esphome</li>
      <li><small style="opacity:0.8">+ many more</small></li>
    </ul>
    <h3>Industries</h3>
    <ul>
      <li>healthcare</li>
      <li>IoT, embedded platforms</li>
      <li>financial services</li>
      <li>energy and utilities</li>
      <li>business intelligence</li>
      <li>professional services</li>
    </ul>
  </section>
</main>





</template>

<style>
html {
  background-color: #888;
}
body {
  max-width: 8in;
  padding: .25in;
  margin: 0 auto;
  background-color: #fff;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}

header {
  text-align: center;
}
header>address {
  margin-top:-0.2rem;
  font-style:normal;
}
header>h1 {
  line-height: 1rem;
  margin-bottom: 0;
}
header>h2 {
  margin:0.2rem 0;
}
main {
  display:flex;
}
article {
  display:flex;
}
article>svg {
  vertical-align: middle;
  margin-right: 1rem;
}
article>div, article>address {
  margin-top:0.4rem
}
article>div {
  flex:1;
}
article>address {
  text-align: right;
  font-style: normal
}
.links {display:flex;flex-direction: column;text-align: center;}
.links>a{
text-decoration: none;
margin-bottom: 0.2rem;
}
.links>a:visited { color:blue}
.links>a>svg {
  color:#2c3e50;
  margin-right:0.3rem;vertical-align: middle;
}
.sub {
  font-size:0.8rem;
  opacity: 0.8;
}
</style>
