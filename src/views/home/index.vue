<template>
  <section>
    <vue-canvas-nest :config="cavans_config"></vue-canvas-nest>
    <header-nav :projectList="projectList" @refreshProjectList="handleProjectList"></header-nav>
    <second-nav
      @launchContainer="handleLaunchContainer"
      @openProjectManagement="openProjectSetting"
      @openModelCenter="openModelCenter"
    ></second-nav>
    <side-nav @projectSetting="handleProjectSetting"></side-nav>

    <el-row style="margin-top: 20px;">
      <el-col :span="20" :offset="2">
        <el-tabs
          v-model="editableTabsValue"
          type="border-card"
          closable
          @tab-remove="removeTab"
          style="overflow :auto"
        >
          <el-tab-pane
            key="welcome"
            :index="1"
            label="Welcome"
            name="welcome"
            style="height:600px; overflow :auto"
            :closable="false"
          >
            <div class="markdown" style="padding-left:15rem;padding-right:15rem">
              <markdown></markdown>
            </div>
          </el-tab-pane>

          <el-tab-pane
            v-for="(item) in editableTabs"
            :key="item.name"
            :label="item.title"
            :name="item.name"
            style="height:600px; overflow :auto"
          >
            <el-popover
              v-if="item.type=='notebook'"
              placement="right"
              trigger="hover"
              style="position:fixed; margin-top:550px; margin-left:10px "
            >
              <el-button-group>
                <el-button type="primary">Open In A New Browser</el-button>
                <el-button type="primary" @click="handleStaging">Stage Models</el-button>
                <el-button type="primary">Release Resources</el-button>
              </el-button-group>
              <el-button slot="reference" type="warning" plain>
                Operations
                <i class="el-icon-arrow-right el-icon--right"></i>
              </el-button>
            </el-popover>
            <span v-html="item.content"></span>
          </el-tab-pane>
        </el-tabs>
      </el-col>
    </el-row>

    <el-dialog
      title="Project Management"
      :visible.sync="isProjectSettingShow"
      @open="handleProjectList"
      width="80%"
    >
      <project-setting :projectList="projectList"></project-setting>
      <span slot="footer" class="dialog-footer">
        <el-button @click="isProjectSettingShow = false">Close</el-button>
        <el-button type="primary" @click="isProjectSettingShow = false">OK</el-button>
      </span>
    </el-dialog>

    <el-dialog
      title="Model Center"
      :visible.sync="isModelCenterShow"
      @open="handleProjectList"
      width="80%"
    >
      <model-center></model-center>
      <span slot="footer" class="dialog-footer">
        <el-button @click="isModelCenterShow = false">Close</el-button>
        <el-button type="primary" @click="isModelCenterShow = false">OK</el-button>
      </span>
    </el-dialog>
  </section>
</template>
<script>
import HeaderNav from '@/components/HeaderNav'
import SecondNav from '@/components/SecondNav'
import SideNav from '@/components/SideNav'
import vueCanvasNest from 'vue-canvas-nest'
import ProjectSetting from '@/components/ProjectSetting'
import ModelCenter from '@/components/ModelCenter'
import Markdown from '@/components/Markdown'

import * as modelApi from '@/api/model'
import * as projectAPI from '@/api/project'
export default {
  data() {
    return {
      cavans_config: {
        color: '0,0,255',
        opacity: 0.7,
        zIndex: -2,
        count: 120
      },
      isProjectSettingShow: false,
      isModelCenterShow: false,
      isCollapse: true,
      editableTabsValue: 'welcome',
      editableTabs: [],
      tabIndex: 0,
      projectList: JSON.parse(this.$store.getters.projectList)
    }
  },
  components: { HeaderNav, SecondNav, SideNav, vueCanvasNest, ProjectSetting, ModelCenter, Markdown },

  mounted() {},

  methods: {
    addResourceTab(title, url) {
      let newTabName = ++this.tabIndex + ''
      var t = setTimeout(() => {
        this.editableTabs.push({
          title: title,
          name: newTabName,
          content: '<iframe src=http://' + url + ' style="width:100%; height:100%"></iframe>',
          type: 'notebook',
          url: url
        })
        this.editableTabsValue = newTabName
        this.$store.commit('SET_TERMINAL_STATUS', 'Connected')
      }, 10000)
    },

    openProjectSetting() {
      this.isProjectSettingShow = true
    },
    openModelCenter() {
      this.isModelCenterShow = true
    },
    removeTab(targetName) {
      let tabs = this.editableTabs
      let activeName = this.editableTabsValue
      if (activeName === targetName) {
        tabs.forEach((tab, index) => {
          if (tab.name === targetName) {
            let nextTab = tabs[index + 1] || tabs[index - 1]
            if (nextTab) {
              activeName = nextTab.name
            }
          }
        })
      }
      this.editableTabsValue = activeName
      this.editableTabs = tabs.filter(tab => tab.name !== targetName)
    },
    openNotebookInNewBroser(url) {
      window.open('http://' + url, '_blank', 'toolbar=yes, width=1300, height=900')
    },
    handleLaunchContainer(data) {
      this.addResourceTab('Jupyter Notebook', data.url)
    },
    handleStaging() {
      modelApi.initModelToStage(this.$requests.api, JSON.parse(this.$store.getters.project).project.ref_id).then(response => {
        this.$message({
          message: 'Models have been submited successful!',
          type: 'success'
        })
      })
    },
    handleProjectList() {
      projectAPI.getProject(this.$requests.api).then(response => {
        this.$store.commit('SET_PROJECTLIST', response.data)
        this.projectList = response.data
      })
    },
    handleProjectSetting(data) {
      this.addProjectSettingTab('Projects Center')
    }
  }
}
</script>
<style scoped>
.el-menu-vertical-demo:not(.el-menu--collapse) {
  width: 200px;
  min-height: 400px;
}
</style>