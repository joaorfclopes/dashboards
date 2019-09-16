<template>
  <div id="home">
    <div id="welcome">
      <img src="../../assets/vodafone-logo.png" />
      <p>Welcome to your dashboards and monitoring!</p>
    </div>
  </div>
</template>

<style scoped>
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
</style>
