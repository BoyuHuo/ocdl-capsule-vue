<template>
  <section>
    <template>
      <el-table :data="tableData" style="width: 100%" stripe>
        <el-table-column type="expand">
          <template slot-scope="props">
            <el-row>
              <el-col :span="8" style="padding-right:5px">
                <el-card class="box-card"  shadow="hover">
                  <div slot="header" class="clearfix">
                    <span>Users</span>
                    <el-button style="float: right; padding: 3px 0" type="text">Invite</el-button>
                  </div>
                  <div v-for="o in props.row.user" :key="o" class="text item">{{ o }}</div>
                </el-card>
              </el-col>
              <el-col :span="8" style="padding-left:5px;padding-right:5px">
                <el-card class="box-card"  shadow="hover">
                  <div slot="header" class="clearfix">
                    <span>Algorithms</span>
                    <el-button style="float: right; padding: 3px 0" type="text">Add</el-button>
                  </div>
                  <div v-for="o in props.row.user" :key="o" class="text item">{{ o }}</div>
                </el-card>
              </el-col>
              <el-col :span="8" style="padding-left:5px">
                <el-card class="box-card"  shadow="hover">
                  <div slot="header" class="clearfix">
                    <span>Suffix List</span>
                    <el-button style="float: right; padding: 3px 0" type="text">Add</el-button>
                  </div>
                  <div v-for="o in props.row.user" :key="o" class="text item">{{ o }}</div>
                </el-card>
              </el-col>
            </el-row>
          </template>
        </el-table-column>
        <el-table-column label="Project Name" prop="project.name"></el-table-column>
        <el-table-column label="Reference ID" prop="project.ref_id"></el-table-column>
        <el-table-column label="User Number" prop="user.id" width="120"></el-table-column>
        <el-table-column label="Your Role" prop="role.name" width="120">
          <template slot-scope="scope">
            <el-tag
              :type="scope.row.role.name === 'manager' ? 'primary' : 'success'"
              disable-transitions
            >{{scope.row.role.name}}</el-tag>
          </template>
        </el-table-column>
        <el-table-column label="Created Time" prop="created_at">
          <template slot-scope="scope">
            <i class="el-icon-time"></i>
            <span style="margin-left: 10px">{{ scope.row.created_at |dateFilter }}</span>
          </template>
        </el-table-column>
        <el-table-column label="Operations" prop="operation">
          <template slot-scope="">
            <el-button size="mini" >Edit</el-button>
            <el-button size="mini" type="danger" >Remove</el-button>
          </template>
        </el-table-column>
      </el-table>
    </template>
  </section>
</template>
<script>
export default {
  name: 'projectSetting',
  data() {
    return {
      tableData: JSON.parse(this.$store.getters.projectList)
    }
  }
}
</script>
<style scoped>
</style>