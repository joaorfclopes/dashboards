<template>
  <transition name="modal">
    <div class="modal-mask">
      <div class="modal-wrapper">
        <div class="modal-container">
          <div class="modal-header">
            <v-btn
              class="modal-default-button"
              @click="$emit('close')"
              fab
              dark
              small
              color="#2A2A2E"
            >
              <v-icon>close</v-icon>
            </v-btn>
          </div>
          <div class="modal-body" style="text-align: center;">
            <div id="modal-title" style="width: 100%; text-align: left; margin-bottom: 5%;">
              <h1 v-if="showOhs1 == true" style="color: white;">bvpr-dmsow01</h1>
              <h1 v-if="showOhs2 == true" style="color: white;">bvpr-dmsow02</h1>
              <h1 v-if="showWc1 == true" style="color: white;">bvpr-dmswc01</h1>
              <h1 v-if="showWc2 == true" style="color: white;">bvpr-dmswc02</h1>
              <h1 v-if="showApp1 == true" style="color: white;">bvpr-dmsapp01</h1>
              <h1 v-if="showApp2 == true" style="color: white;">bvpr-dmsapp02</h1>
              <h1 v-if="showDb1 == true" style="color: white;">bvpr-dmsdb01</h1>
              <h1 v-if="showDb2 == true" style="color: white;">bvpr-dmsdb02</h1>
              <h1 v-if="showOid1 == true" style="color: white;">bvpr-dmsodi01</h1>
              <h1 v-if="showOid2 == true" style="color: white;">bvpr-dmsodi02</h1>
              <h1 v-if="showBi == true" style="color: white;">bvpr-dmsbibd01</h1>
            </div>
            <div id="modal-content" style="height: 300px">
              <div id="topics" style="width: 50%; float: left;">
                <h3 style="color: white; margin-bottom: 8%;">Size</h3>
                <h3 style="color: white; margin-bottom: 8%;">Used</h3>
                <h3 style="color: white; margin-bottom: 8%;">Available</h3>
                <h3 style="color: white; margin-bottom: 8%;">Used Percentage</h3>
                <h3 style="color: white; margin-bottom: 8%;">Mounted On</h3>
                <h3 style="color: white; margin-bottom: 8%;">Password Expires</h3>
              </div>
              <div style="width: 50%; float: right">
                <h3 v-if="showOhs1 == true" style="color: white; margin-bottom: 8%;">7.8G</h3>
                <h3 v-if="showOhs2 == true" style="color: white; margin-bottom: 8%;">7.8G</h3>
                <h3 v-if="showWc1 == true" style="color: white; margin-bottom: 8%;">7.8G</h3>
                <h3 v-if="showWc2 == true" style="color: white; margin-bottom: 8%;">9.7G</h3>
                <h3 v-if="showApp1 == true" style="color: white; margin-bottom: 8%;">7.8G</h3>
                <h3 v-if="showApp2 == true" style="color: white; margin-bottom: 8%;">7.8G</h3>
                <h3 v-if="showDb1 == true" style="color: white; margin-bottom: 8%;">996M</h3>
                <h3 v-if="showDb2 == true" style="color: white; margin-bottom: 8%;">9.8G</h3>
                <h3 v-if="showOid1 == true" style="color: white; margin-bottom: 8%;">108G</h3>
                <h3 v-if="showOid2 == true" style="color: white; margin-bottom: 8%;">5.0G</h3>
                <h3 v-if="showBi == true" style="color: white; margin-bottom: 8%;">7.8G</h3>

                <h3 v-if="showOhs1 == true" style="color: white; margin-bottom: 8%;">4.8G</h3>
                <h3 v-if="showOhs2 == true" style="color: white; margin-bottom: 8%;">4.9G</h3>
                <h3 v-if="showWc1 == true" style="color: white; margin-bottom: 8%;">968M</h3>
                <h3 v-if="showWc2 == true" style="color: white; margin-bottom: 8%;">151M</h3>
                <h3 v-if="showApp1 == true" style="color: white; margin-bottom: 8%;">2.5G</h3>
                <h3 v-if="showApp2 == true" style="color: white; margin-bottom: 8%;">525M</h3>
                <h3 v-if="showDb1 == true" style="color: white; margin-bottom: 8%;">78M</h3>
                <h3 v-if="showDb2 == true" style="color: white; margin-bottom: 8%;">0</h3>
                <h3 v-if="showOid1 == true" style="color: white; margin-bottom: 8%;">37G</h3>
                <h3 v-if="showOid2 == true" style="color: white; margin-bottom: 8%;">190M</h3>
                <h3 v-if="showBi == true" style="color: white; margin-bottom: 8%;">4.8G</h3>

                <h3 v-if="showOhs1 == true" style="color: white; margin-bottom: 8%;">2.6G</h3>
                <h3 v-if="showOhs2 == true" style="color: white; margin-bottom: 8%;">2.5G</h3>
                <h3 v-if="showWc1 == true" style="color: white; margin-bottom: 8%;">6.5G</h3>
                <h3 v-if="showWc2 == true" style="color: white; margin-bottom: 8%;">9.1G</h3>
                <h3 v-if="showApp1 == true" style="color: white; margin-bottom: 8%;">5.0G</h3>
                <h3 v-if="showApp2 == true" style="color: white; margin-bottom: 8%;">6.9G</h3>
                <h3 v-if="showDb1 == true" style="color: white; margin-bottom: 8%;">867M</h3>
                <h3 v-if="showDb2 == true" style="color: white; margin-bottom: 8%;">9.8G</h3>
                <h3 v-if="showOid1 == true" style="color: white; margin-bottom: 8%;">67G</h3>
                <h3 v-if="showOid2 == true" style="color: white; margin-bottom: 8%;">4.5G</h3>
                <h3 v-if="showBi == true" style="color: white; margin-bottom: 8%;">2.6G</h3>

                <h3 v-if="showOhs1 == true" style="color: white; margin-bottom: 8%;">66%</h3>
                <h3 v-if="showOhs2 == true" style="color: white; margin-bottom: 8%;">67%</h3>
                <h3 v-if="showWc1 == true" style="color: white; margin-bottom: 8%;">13%</h3>
                <h3 v-if="showWc2 == true" style="color: white; margin-bottom: 8%;">2%</h3>
                <h3 v-if="showApp1 == true" style="color: white; margin-bottom: 8%;">33%</h3>
                <h3 v-if="showApp2 == true" style="color: white; margin-bottom: 8%;">7%</h3>
                <h3 v-if="showDb1 == true" style="color: white; margin-bottom: 8%;">9%</h3>
                <h3 v-if="showDb2 == true" style="color: white; margin-bottom: 8%;">0%</h3>
                <h3 v-if="showOid1 == true" style="color: white; margin-bottom: 8%;">36%</h3>
                <h3 v-if="showOid2 == true" style="color: white; margin-bottom: 8%;">4%</h3>
                <h3 v-if="showBi == true" style="color: white; margin-bottom: 8%;">66%</h3>

                <h3 v-if="showOhs1 == true" style="color: white; margin-bottom: 8%;">/</h3>
                <h3 v-if="showOhs2 == true" style="color: white; margin-bottom: 8%;">/usr</h3>
                <h3 v-if="showWc1 == true" style="color: white; margin-bottom: 8%;">/var</h3>
                <h3 v-if="showWc2 == true" style="color: white; margin-bottom: 8%;">/var/crash</h3>
                <h3 v-if="showApp1 == true" style="color: white; margin-bottom: 8%;">/home</h3>
                <h3 v-if="showApp2 == true" style="color: white; margin-bottom: 8%;">/tmp</h3>
                <h3 v-if="showDb1 == true" style="color: white; margin-bottom: 8%;">/boot</h3>
                <h3 v-if="showDb2 == true" style="color: white; margin-bottom: 8%;">/dev/shm</h3>
                <h3 v-if="showOid1 == true" style="color: white; margin-bottom: 8%;">/app</h3>
                <h3 v-if="showOid2 == true" style="color: white; margin-bottom: 8%;">/oswatcher</h3>
                <h3 v-if="showBi == true" style="color: white; margin-bottom: 8%;">/</h3>

                <h3 v-if="showOhs1 == true" style="color: white; margin-bottom: 8%;">Jun 25, 2020</h3>
                <h3 v-if="showOhs2 == true" style="color: white; margin-bottom: 8%;">Jun 25, 2020</h3>
                <h3 v-if="showWc1 == true" style="color: white; margin-bottom: 8%;">Jun 25, 2020</h3>
                <h3 v-if="showWc2 == true" style="color: white; margin-bottom: 8%;">Jun 25, 2020</h3>
                <h3 v-if="showApp1 == true" style="color: white; margin-bottom: 8%;">Jun 25, 2020</h3>
                <h3 v-if="showApp2 == true" style="color: white; margin-bottom: 8%;">Jun 25, 2020</h3>
                <h3 v-if="showDb1 == true" style="color: white; margin-bottom: 8%;">Jun 25, 2020</h3>
                <h3 v-if="showDb2 == true" style="color: white; margin-bottom: 8%;">Jun 25, 2020</h3>
                <h3 v-if="showOid1 == true" style="color: white; margin-bottom: 8%;">Jun 25, 2020</h3>
                <h3 v-if="showOid2 == true" style="color: white; margin-bottom: 8%;">Jun 25, 2020</h3>
                <h3 v-if="showBi == true" style="color: white; margin-bottom: 8%;">Jun 25, 2020</h3>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </transition>
</template>

<script>
export default {
  props: {
    showOhs1: false,
    showOhs2: false,
    showWc1: false,
    showWc2: false,
    showApp1: false,
    showApp2: false,
    showDb1: false,
    showDb2: false,
    showOid1: false,
    showOid2: false,
    showBi: false
  }
};
</script>


<style>
@keyframes zoomIn {
  from {
    opacity: 0;
    -webkit-transform: scale3d(0.3, 0.3, 0.3);
    transform: scale3d(0.3, 0.3, 0.3);
  }

  50% {
    opacity: 1;
  }
}
.modal-wrapper {
  animation-name: zoomIn;
  animation-duration: 1s;
  animation-fill-mode: forwards;
}
.modal-mask {
  position: fixed;
  z-index: 9998;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: table;
  transition: opacity 0.3s ease;
}

.modal-wrapper {
  display: table-cell;
  vertical-align: middle;
}

.modal-container {
  width: 50%;
  margin: 0px auto;
  padding: 20px 30px;
  background-color: #1e1e21;
  border-radius: 2px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.33);
  transition: all 0.3s ease;
  font-family: Helvetica, Arial, sans-serif;
}

.modal-header h3 {
  margin-top: 0;
  color: #E60000;
}

.modal-body {
  margin: 20px 0;
}

.modal-default-button {
  float: right;
}

.modal-enter {
  opacity: 0;
}

.modal-leave-active {
  opacity: 0;
}

.modal-enter .modal-container,
.modal-leave-active .modal-container {
  -webkit-transform: scale(1.1);
  transform: scale(1.1);
}
.align-end {
  color: white;
}
.modal-title {
  color: white;
}
</style>
