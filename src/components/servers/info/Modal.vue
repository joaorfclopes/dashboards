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
          <div class="modal-body">
            <div class="modal-title">
              <h1 v-if="showOhs1 == true">bvpr-dmsow01</h1>
              <h1 v-if="showOhs2 == true">bvpr-dmsow02</h1>
              <h1 v-if="showWc1 == true">bvpr-dmswc01</h1>
              <h1 v-if="showWc2 == true">bvpr-dmswc02</h1>
              <h1 v-if="showApp1 == true">bvpr-dmsapp01</h1>
              <h1 v-if="showApp2 == true">bvpr-dmsapp02</h1>
              <h1 v-if="showDb1 == true">bvpr-dmsdb01</h1>
              <h1 v-if="showDb2 == true">bvpr-dmsdb02</h1>
              <h1 v-if="showOid1 == true">bvpr-dmsodi01</h1>
              <h1 v-if="showOid2 == true">bvpr-dmsodi02</h1>
              <h1 v-if="showBi == true">bvpr-dmsbibd01</h1>
            </div>
            <div class="modal-content">
              <div class="topics">
                <h3>Size</h3>
                <h3>Used</h3>
                <h3>Available</h3>
                <h3>Used Percentage</h3>
                <h3>Mounted On</h3>
                <h3>Password Expires</h3>
              </div>
              <div style="width: 50%; float: right">
                <h3 v-if="showOhs1 == true">7.8G</h3>
                <h3 v-if="showOhs2 == true">7.8G</h3>
                <h3 v-if="showWc1 == true">7.8G</h3>
                <h3 v-if="showWc2 == true">9.7G</h3>
                <h3 v-if="showApp1 == true">7.8G</h3>
                <h3 v-if="showApp2 == true">7.8G</h3>
                <h3 v-if="showDb1 == true">996M</h3>
                <h3 v-if="showDb2 == true">9.8G</h3>
                <h3 v-if="showOid1 == true">108G</h3>
                <h3 v-if="showOid2 == true">5.0G</h3>
                <h3 v-if="showBi == true">7.8G</h3>

                <h3 v-if="showOhs1 == true">4.8G</h3>
                <h3 v-if="showOhs2 == true">4.9G</h3>
                <h3 v-if="showWc1 == true">968M</h3>
                <h3 v-if="showWc2 == true">151M</h3>
                <h3 v-if="showApp1 == true">2.5G</h3>
                <h3 v-if="showApp2 == true">525M</h3>
                <h3 v-if="showDb1 == true">78M</h3>
                <h3 v-if="showDb2 == true">0</h3>
                <h3 v-if="showOid1 == true">37G</h3>
                <h3 v-if="showOid2 == true">190M</h3>
                <h3 v-if="showBi == true">4.8G</h3>

                <h3 v-if="showOhs1 == true">2.6G</h3>
                <h3 v-if="showOhs2 == true">2.5G</h3>
                <h3 v-if="showWc1 == true">6.5G</h3>
                <h3 v-if="showWc2 == true">9.1G</h3>
                <h3 v-if="showApp1 == true">5.0G</h3>
                <h3 v-if="showApp2 == true">6.9G</h3>
                <h3 v-if="showDb1 == true">867M</h3>
                <h3 v-if="showDb2 == true">9.8G</h3>
                <h3 v-if="showOid1 == true">67G</h3>
                <h3 v-if="showOid2 == true">4.5G</h3>
                <h3 v-if="showBi == true">2.6G</h3>

                <h3 v-if="showOhs1 == true">66%</h3>
                <h3 v-if="showOhs2 == true">67%</h3>
                <h3 v-if="showWc1 == true">13%</h3>
                <h3 v-if="showWc2 == true">2%</h3>
                <h3 v-if="showApp1 == true">33%</h3>
                <h3 v-if="showApp2 == true">7%</h3>
                <h3 v-if="showDb1 == true">9%</h3>
                <h3 v-if="showDb2 == true">0%</h3>
                <h3 v-if="showOid1 == true">36%</h3>
                <h3 v-if="showOid2 == true">4%</h3>
                <h3 v-if="showBi == true">66%</h3>

                <h3 v-if="showOhs1 == true">/</h3>
                <h3 v-if="showOhs2 == true">/usr</h3>
                <h3 v-if="showWc1 == true">/var</h3>
                <h3 v-if="showWc2 == true">/var/crash</h3>
                <h3 v-if="showApp1 == true">/home</h3>
                <h3 v-if="showApp2 == true">/tmp</h3>
                <h3 v-if="showDb1 == true">/boot</h3>
                <h3 v-if="showDb2 == true">/dev/shm</h3>
                <h3 v-if="showOid1 == true">/app</h3>
                <h3 v-if="showOid2 == true">/oswatcher</h3>
                <h3 v-if="showBi == true">/</h3>

                <h3 v-if="showOhs1 == true">Jun 25, 2020</h3>
                <h3 v-if="showOhs2 == true">Jun 25, 2020</h3>
                <h3 v-if="showWc1 == true">Jun 25, 2020</h3>
                <h3 v-if="showWc2 == true">Jun 25, 2020</h3>
                <h3 v-if="showApp1 == true">Jun 25, 2020</h3>
                <h3 v-if="showApp2 == true">Jun 25, 2020</h3>
                <h3 v-if="showDb1 == true">Jun 25, 2020</h3>
                <h3 v-if="showDb2 == true">Jun 25, 2020</h3>
                <h3 v-if="showOid1 == true">Jun 25, 2020</h3>
                <h3 v-if="showOid2 == true">Jun 25, 2020</h3>
                <h3 v-if="showBi == true">Jun 25, 2020</h3>
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
    showOhs1: null,
    showOhs2: null,
    showWc1: null,
    showWc2: null,
    showApp1: null,
    showApp2: null,
    showDb1: null,
    showDb2: null,
    showOid1: null,
    showOid2: null,
    showBi: null
  }
};
</script>

<style scoped>
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
  color: #e60000;
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
.align-end,
.modal-title > h1 {
  color: white;
}
.modal-title {
  color: white;
  width: 100%;
  text-align: left;
  margin-bottom: 5%;
}
.modal-body {
  text-align: center;
}
.modal-content {
  height: 300px;
}
.topics {
  width: 50%;
  float: left;
}
h3 {
  color: white;
  margin-bottom: 8%;
}
</style>
