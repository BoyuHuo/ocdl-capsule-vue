<template>
  <section>
    <el-menu
      class="el-menu-demo"
      mode="horizontal"
      background-color="#409EFF"
      text-color="#fff"
      active-text-color="#ffffff"
    >
      <el-menu-item index="1" @click="$emit('openProjectManagement','')">PROJECT MANAGEMENT</el-menu-item>
      <el-menu-item index="2" @click="$emit('openModelCenter','')">MODEL CENTER</el-menu-item>
      <el-menu-item index="3" disabled>MY EVENT</el-menu-item>
      <el-menu-item index="4">
        <a href="https://www.ele.me" target="_blank">HELP</a>
      </el-menu-item>

      <transition
        enter-active-class="animated slideInRight"
        leave-active-class="animated slideOutRight"
        mode="out-in"
      >
        <div class="launch-controler" v-if="showLaunchController" key="controler">
          <el-switch
            style="display: block"
            v-model="useGPU"
            active-color="#13ce66"
            inactive-color="#ff4949"
            active-text="GPU"
            inactive-text="CPU"
          ></el-switch>
          <el-button type="primary" plain style="margin-left:20px" @click="launchContainer">Launch</el-button>
        </div>

        <el-menu-item
          v-else
          key="button"
          index="3"
          class="right-menu"
          style="float:right"
          @click="showLaunchController=!showLaunchController"
        >
          <i style="color:white" class="el-icon-s-promotion"></i>Launch Notebook
        </el-menu-item>
      </transition>

      <div
        key="button"
        index="3"
        class="right-menu terminal"
        :class="{'connecting':terminal.connectingFlag}"
        style="float:right; color:white"
      >
        <el-form ref="form" label-width="80px" style="color:white">
          <el-form-item style="margin-bottom:0">
            <span slot="label" style="color:white">Status:</span>
            {{$store.getters.terminalStatus}}
          </el-form-item>
          <el-form-item style="margin-bottom:0">
            <span slot="label" style="color:white">Resource:</span>
            {{$store.getters.terminalResource}}
          </el-form-item>
        </el-form>
      </div>
    </el-menu>
  </section>
</template>
<script>
import * as containerApi from '@/api/container'
import { connect } from 'echarts/lib/echarts'
export default {
  name: 'secondName',
  data() {
    return {
      useGPU: true,
      showLaunchController: false,
      terminal: {
        connectingFlag: false
      }
    }
  },
  watch: {
    '$store.getters.terminalStatus': function(newVal, oldVal) {
      if (newVal == 'Connecting...') {
        this.terminal.connectingFlag = true
      } else {
        this.terminal.connectingFlag = false
      }
    }
  },
  methods: {
    launchContainer: function() {
      let resType = this.useGPU ? 'gpu' : 'cpu'

      containerApi.getContainer(this.$requests.api, resType).then(response => {
        this.$store.commit('SET_TERMINAL_STATUS', 'Connecting...')
        this.$store.commit('SET_TERMINAL_RESOURCE', this.useGPU ? 'GPU' : 'CPU')
        this.$emit('launchContainer', response.data)
        this.showLaunchController = !this.showLaunchController
      })
    }
  }
}
</script>
<style scoped>
.launch-controler {
  width: 300px;
  float: right;
  height: 60px;
  line-height: 60px;
  margin: 0;
  color: #ffffff;
  background-color: #ffffff;
  vertical-align: middle;
  padding: 0 20px;

  display: -webkit-box;
  -webkit-box-orient: horizontal;
  -webkit-box-pack: center;
  -webkit-box-align: center;

  display: -moz-box;
  -moz-box-orient: horizontal;
  -moz-box-pack: center;
  -moz-box-align: center;

  display: -o-box;
  -o-box-orient: horizontal;
  -o-box-pack: center;
  -o-box-align: center;

  display: -ms-box;
  -ms-box-orient: horizontal;
  -ms-box-pack: center;
  -ms-box-align: center;

  display: box;
  box-orient: horizontal;
  box-pack: center;
  box-align: center;
}
.terminal {
  width: 230px;
  float: right;
  height: 60px;
  line-height: 25px;
  margin: 0;
  color: yellow;
  background-color: #16579a;
  vertical-align: middle;
  padding: 0 20px;

  font-size: 12px;
}
.connecting {
  background: linear-gradient(90deg, #16579a, rgb(90, 167, 245), #16579a);
  background-size: 1000% 100%;
  animation: dynamics 5s ease infinite;
  -webkit-animation: dynamics 5s ease infinite;
  -moz-animation: dynamics 5s ease infinite;
}

@keyframes dynamics {
  0% {
    background-position: 0% 0%;
  }

  50% {
    background-position: 50% 100%;
  }

  100% {
    background-position: 100% 0%;
  }
}
</style>