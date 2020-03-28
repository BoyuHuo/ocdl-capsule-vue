<template>
  <section>
    <vue-canvas-nest :config="cavans_config"></vue-canvas-nest>
    <header-nav></header-nav>
    <second-nav @launchContainer="handleLaunchContainer"></second-nav>
    <side-nav></side-nav>
    <div style="margin-bottom: 20px;">
      <el-button size="small" @click="addTab(editableTabsValue)">add tab</el-button>
    </div>

    <el-row>
      <el-col :span="20" :offset="2">
        <el-tabs v-model="editableTabsValue" type="border-card" closable @tab-remove="removeTab">
          <el-tab-pane
            v-for="(item) in editableTabs"
            :key="item.name"
            :label="item.title"
            :name="item.name"
          >  <span v-html="item.content"></span></el-tab-pane>
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
          content: 'Tab 1 content'
        },
        {
          title: 'Tab 2',
          name: '2',
          content: 'Tab 2 content'
        }
      ],
      tabIndex: 2
    }
  },
  components: { HeaderNav, SecondNav, SideNav, vueCanvasNest },

  mounted() {
    console.log('123' + this.$store.getters.projectList)
  },

  methods: {
    addTab(targetName) {
      let newTabName = ++this.tabIndex + ''
      this.editableTabs.push({
        title: 'New Tab',
        name: newTabName,
        content: '<h1>hahaha</h1>'
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
    handleLaunchContainer() {

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