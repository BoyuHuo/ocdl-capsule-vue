<template>
  <section>
    <vue-canvas-nest :config="cavans_config"></vue-canvas-nest>
    <header-nav></header-nav>
    <second-nav @launchContainer="handleLaunchContainer"></second-nav>
    <side-nav></side-nav>

    <el-row style="margin-top: 20px;">
      <el-col :span="20" :offset="2">
        <el-tabs v-model="editableTabsValue" type="border-card" closable @tab-remove="removeTab">
          <el-tab-pane
            v-for="(item) in editableTabs"
            :key="item.name"
            :label="item.title"
            :name="item.name"
            style="height:600px"
          >
            <el-popover
              v-if="item.type=='notebook'"
              placement="right"
              trigger="hover"
              style="position:fixed; margin-top:550px; margin-left:10px "
            >
              <el-button-group>
                <el-button type="primary">Open In A New Browser</el-button>
                <el-button type="primary">Stage Models</el-button>
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
  </section>
</template>
<script>
import HeaderNav from '@/components/HeaderNav'
import SecondNav from '@/components/SecondNav'
import SideNav from '@/components/SideNav'
import vueCanvasNest from 'vue-canvas-nest'
export default {
  data() {
    return {
      cavans_config: {
        color: '0,0,255',
        opacity: 0.7,
        zIndex: -2,
        count: 120
      },
      isCollapse: true,
      editableTabsValue: '2',
      editableTabs: [
        {
          title: 'Tab 1',
          name: '1',
          content: 'Tab 1 content',
          type: 'xxx'
        }
      ],
      tabIndex: 2
    }
  },
  components: { HeaderNav, SecondNav, SideNav, vueCanvasNest },

  mounted() {},

  methods: {
    addResource(title, url) {
      let newTabName = ++this.tabIndex + ''
      this.editableTabs.push({
        title: title,
        name: newTabName,
        content: '<iframe src=http://' + url + ' style="width:100%; height:100%"></iframe>',
        type: 'notebook'
      })
      this.editableTabsValue = newTabName
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
    handleLaunchContainer(data) {
      console.log(data)
      this.addResource('Juyter Notebook', data.url)
    },
    handleStaging() {}
  }
}
</script>
<style scoped>
.el-menu-vertical-demo:not(.el-menu--collapse) {
  width: 200px;
  min-height: 400px;
}
</style>