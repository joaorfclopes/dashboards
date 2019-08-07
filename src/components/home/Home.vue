<template>
  <div id="home">
    <div id="celfocus">
      <img src="../../assets/celfocus-logo.png" />
      <p>powered by Celfocus</p>
    </div>
    <div id="welcome">
      <img src="../../assets/vodafone-logo.png" />
      <p>Welcome to your dashboards and monitoring!</p>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
#celfocus {
  position: absolute;
  top: 0;
  right: 0;
}
#celfocus > img {
  margin-left: 0.5%;
  margin-right: 1%;
  float: right;
  width: 10%;
  opacity: 0;
  animation-name: zoomInRight, fade;
  animation-fill-mode: forwards;
  animation-delay: 1.5s;
  animation-duration: 1s;
}
#celfocus > p {
  color: whitesmoke;
  font-size: 90%;
  float: right;
  opacity: 0;
  animation-name: zoomInLeft, fade;
  animation-fill-mode: forwards;
  animation-delay: 1.5s;
  animation-duration: 1s;
}
#welcome > p {
  font-size: 3rem;
  font-weight: lighter;
  opacity: 0;
  animation-fill-mode: forwards;
  animation-name: bounceInUp, fade;
  animation-duration: 1s;
  animation-delay: 1s;
  color: whitesmoke;
}

#welcome > img {
  width: 30%;
  animation-name: fade;
  animation-duration: 1s;
  opacity: 0;
  animation-fill-mode: forwards;
}
@keyframes fade {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}
@keyframes bounceInUp {
  from,
  60%,
  75%,
  90%,
  to {
    -webkit-animation-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);
    animation-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);
  }

  from {
    opacity: 0;
    -webkit-transform: translate3d(0, 3000px, 0);
    transform: translate3d(0, 3000px, 0);
  }

  60% {
    opacity: 1;
    -webkit-transform: translate3d(0, -20px, 0);
    transform: translate3d(0, -20px, 0);
  }

  75% {
    -webkit-transform: translate3d(0, 10px, 0);
    transform: translate3d(0, 10px, 0);
  }

  90% {
    -webkit-transform: translate3d(0, -5px, 0);
    transform: translate3d(0, -5px, 0);
  }

  to {
    -webkit-transform: translate3d(0, 0, 0);
    transform: translate3d(0, 0, 0);
  }
}
@keyframes zoomInLeft {
  from {
    opacity: 0;
    -webkit-transform: scale3d(0.1, 0.1, 0.1) translate3d(-1000px, 0, 0);
    transform: scale3d(0.1, 0.1, 0.1) translate3d(-1000px, 0, 0);
    -webkit-animation-timing-function: cubic-bezier(0.55, 0.055, 0.675, 0.19);
    animation-timing-function: cubic-bezier(0.55, 0.055, 0.675, 0.19);
  }

  60% {
    opacity: 1;
    -webkit-transform: scale3d(0.475, 0.475, 0.475) translate3d(10px, 0, 0);
    transform: scale3d(0.475, 0.475, 0.475) translate3d(10px, 0, 0);
    -webkit-animation-timing-function: cubic-bezier(0.175, 0.885, 0.32, 1);
    animation-timing-function: cubic-bezier(0.175, 0.885, 0.32, 1);
  }
}
@keyframes zoomInRight {
  from {
    opacity: 0;
    -webkit-transform: scale3d(0.1, 0.1, 0.1) translate3d(1000px, 0, 0);
    transform: scale3d(0.1, 0.1, 0.1) translate3d(1000px, 0, 0);
    -webkit-animation-timing-function: cubic-bezier(0.55, 0.055, 0.675, 0.19);
    animation-timing-function: cubic-bezier(0.55, 0.055, 0.675, 0.19);
  }

  60% {
    opacity: 1;
    -webkit-transform: scale3d(0.475, 0.475, 0.475) translate3d(-10px, 0, 0);
    transform: scale3d(0.475, 0.475, 0.475) translate3d(-10px, 0, 0);
    -webkit-animation-timing-function: cubic-bezier(0.175, 0.885, 0.32, 1);
    animation-timing-function: cubic-bezier(0.175, 0.885, 0.32, 1);
  }
}
</style>
