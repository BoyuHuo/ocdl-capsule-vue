<template>
  <section>
    <el-menu class="el-menu-demo" mode="horizontal">
      <div class="logo-container">
        <img :src="require('../../assets/img/ocdl.png')" style="height:50px" />
      </div>

      <el-menu-item index="1" class="right-menu"></el-menu-item>
      <el-submenu index="3" class="right-menu">
        <template slot="title">
          <el-avatar
            src="https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png"
            fit="scale-down"
          ></el-avatar>&nbsp;Hi,
          <label style="color:#409EFF">{{name}}</label>
        </template>
        <el-menu-item index="3-1" @click="logout">
          <i class="el-icon-right"></i>Logout
        </el-menu-item>
      </el-submenu>
      <el-submenu index="2" class="right-menu">
        <template slot="title">Project: {{currentProject.project.name}}</template>
        <el-menu-item
          index="1"
          :key="k"
          v-for="(p,k) in projectList"
          @click="selectProject(p)"
        >{{p.project.name}}</el-menu-item>
        <el-menu-item index="1-99" style="color:#409EFF" @click="showNewProject=true">New</el-menu-item>
      </el-submenu>
    </el-menu>

    <!-- Create New Project -->
    <el-dialog title="New Project" :visible.sync="showNewProject" width="30%">
      <span>
        <el-input
          type="text"
          placeholder="Project Name"
          v-model="newProjectForm.name"
          prefix-icon="el-icon-menu"
          maxlength="100"
          show-word-limit
        ></el-input>
        <div style="margin: 20px 0;"></div>
        <el-input
          type="textarea"
          placeholder="Note"
          prefix-icon="el-icon-s-order"
          v-model="newProjectForm.description"
          maxlength="200"
          show-word-limit
        ></el-input>
      </span>
      <span slot="footer" class="dialog-footer">
        <el-button @click="showNewProject = false">Cancle</el-button>
        <el-button type="primary" @click="createNewProject">Create</el-button>
      </span>
    </el-dialog>
  </section>
</template>
<script>

import * as loginAPI from '@/api/login'
import * as projectApi from '@/api/project'
import Event from '../../main.js'

export default {
  name: 'headerNav',
  props: ['projectList'],
  data() {
    return {
      name: this.$store.getters.name,
      showNewProject: false,
      newProjectForm: {
        name: '',
        description: ''
      },

      currentProject: JSON.parse(this.$store.getters.project)
    }
  },

  mounted() {},
  methods: {
    createNewProject() {
      projectApi.saveProject(this.$requests.api, this.newProjectForm).then(response => {
        this.$message({
          message: 'Project Created Successful!',
          type: 'success'
        })
        this.showNewProject = false
        this.$emit('refreshProjectList', "")
      })
    },
    selectProject(project) {
      this.$store.commit('SET_PROJECT', project)
      this.currentProject = JSON.parse(this.$store.getters.project)
      this.$message({
        message: 'Switch to project - ' + project.project.name,
        type: 'success'
      })
       Event.$emit('refreshModels','')
    },

    logout() {
      loginAPI.logout(this.$requests.api).then(response => {
        this.$store.commit('LOG_OUT')
        this.$router.push('login')
      })
    },
  }
}
</script>
<style scoped>
.right-menu {
  float: right;
  height: 100%;
  font-size: 14px;
}
.logo-container {
  margin-left: 20px;
  display: inline-block;
  height: 50px;
  padding-top: 10px;
}
</style>