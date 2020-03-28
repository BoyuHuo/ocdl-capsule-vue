<template>
  <section>
    <header-nav></header-nav>
    <second-nav></second-nav>
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
          >{{item.content}}</el-tab-pane>
        </el-tabs>
      </el-col>
    </el-row>


  </section>
</template>
<script>
import HeaderNav from '@/components/HeaderNav'
import SecondNav from '@/components/SecondNav'
import SideNav from '@/components/SideNav'
export default {
  data() {
    return {
    
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
  components: { HeaderNav,SecondNav,SideNav },

  methods: {
    addTab(targetName) {
      let newTabName = ++this.tabIndex + ''
      this.editableTabs.push({
        title: 'New Tab',
        name: newTabName,
        content: 'New Tab content'
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


  }
}
</script>
<style scoped>
.el-menu-vertical-demo:not(.el-menu--collapse) {
  width: 200px;
  min-height: 400px;
}
</style>