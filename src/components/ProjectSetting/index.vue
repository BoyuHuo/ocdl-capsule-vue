<template>
  <section>
    <template>
      <el-table :data="projectList" style="width: 100%" stripe>
        <el-table-column type="expand">
          <template slot-scope="props">
            <el-row>
              <el-col :span="8" style="padding-right:5px">
                <el-card class="box-card" shadow="hover">
                  <div slot="header" class="clearfix">
                    <span>Users</span>
                    <el-button
                      style="float: right; padding: 3px 0"
                      type="text"
                      @click="openInvite(props.row.project)"
                    >Invite</el-button>
                  </div>
                  <div v-for="(o,k) in props.row.project.user_roles" :key="k" class="text item">
                    <p>
                      <el-row>
                        <el-col :span="6">{{ o.user.username }}</el-col>
                        <el-col :span="10">{{ o.user.email }}</el-col>
                        <el-col :span="4">{{ o.role.name }}</el-col>
                        <el-col :span="4" style="text-align:right">
                          <a
                            href="javascript:void(0);"
                            @click="alert(123)"
                            style="color:#409EFF"
                          >Delete</a>
                        </el-col>
                      </el-row>
                    </p>
                  </div>
                  <div v-if="props.row.project.user_roles.length==0">No Users</div>
                </el-card>
              </el-col>
              <el-col :span="8" style="padding-left:5px;padding-right:5px">
                <el-card class="box-card" shadow="hover">
                  <div slot="header" class="clearfix">
                    <span>Algorithms</span>
                    <el-button
                      style="float: right; padding: 3px 0"
                      type="text"
                      @click="openNewAlgorithm(props.row.project)"
                    >Add</el-button>
                  </div>
                  <div v-for="(o,k) in props.row.project.algorithm_list" :key="k" class="text item">
                    <p>
                      <el-row>
                        <el-col :span="6">{{ o.name }}</el-col>
                        <el-col
                          :span="4"
                        >v{{ o.current_cached_version }}.{{ o.current_released_version }}</el-col>
                        <el-col :span="4">{{o.kafka_topic?o.kafka_topic:"None"}}</el-col>
                        <el-col :span="6">{{ o.description }}</el-col>
                        <el-col :span="4" style="text-align:right">
                          <a
                            href="javascript:void(0);"
                            @click="deleteAlgorithm(o.id)"
                            style="color:#409EFF"
                          >Delete</a>
                        </el-col>
                      </el-row>
                    </p>
                  </div>
                  <div v-if="props.row.project.algorithm_list.length==0">No algorithms</div>
                </el-card>
              </el-col>
              <el-col :span="8" style="padding-left:5px">
                <el-card class="box-card" shadow="hover">
                  <div slot="header" class="clearfix">
                    <span>Suffix List</span>
                    <el-button
                      style="float: right; padding: 3px 0"
                      type="text"
                      @click="openNewSuffix(props.row.project)"
                    >Add</el-button>
                  </div>
                  <div v-for="(o,k) in props.row.project.suffix_list" :key="k" class="text item">
                    <p>
                      <el-row>
                        <el-col :span="6">*.{{ o.name }}</el-col>
                        <el-col :span="10">{{ o.created_at|dateFilter }}</el-col>
                        <el-col :span="4" style="text-align:right">
                          <a
                            href="javascript:void(0);"
                            @click="deleteSuffix(o.id)"
                            style="color:#409EFF"
                          >Delete</a>
                        </el-col>
                      </el-row>
                    </p>
                  </div>
                  <div v-if="props.row.project.suffix_list.length==0">No suffixs defined</div>
                </el-card>
              </el-col>
            </el-row>
          </template>
        </el-table-column>
        <el-table-column label="Project Name" prop="project.name"></el-table-column>
        <el-table-column label="Reference ID" prop="project.ref_id"></el-table-column>
        <el-table-column label="User Number" prop="project.user_roles.length" width="120"></el-table-column>
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
          <template slot-scope="scope">
            <el-button size="mini">Edit</el-button>
            <el-button size="mini" type="danger" @click="deleteProject(scope.row.project)">Remove</el-button>
          </template>
        </el-table-column>
      </el-table>

      <!-- Invite dialog -->

      <el-dialog title="Invite" :visible.sync="isInviteUserShow" width="30%">
        <span slot="footer" class="dialog-footer">
          <el-button @click="isInviteUserShow = false">Cancel</el-button>
          <el-button type="primary" @click="isInviteUserShow = false">Confirm</el-button>
        </span>
      </el-dialog>

      <!-- Algorithm dialog -->

      <el-dialog title="New Algorithm" :visible.sync="isNewAlgorithmShow" width="30%">
        <el-input v-model="newAlgorithm.name" placeholder="Name" style="padding:5px"></el-input>
        <el-input
          v-model="newAlgorithm.kafka_topic"
          placeholder="Kafka Channel"
          style="padding:5px"
        ></el-input>
        <el-input
          style="padding:5px"
          type="textarea"
          autosize
          placeholder="Descripttion"
          v-model="newAlgorithm.description"
        ></el-input>
        <span slot="footer" class="dialog-footer">
          <el-button @click="isNewAlgorithmShow = false">Cancel</el-button>
          <el-button type="primary" @click="addAlgorithm">Confirm</el-button>
        </span>
      </el-dialog>

      <!-- Suffix dialog -->

      <el-dialog title="Add Suffix" :visible.sync="isNewSuffixShow" width="30%">
        <el-input v-model="newSuffix.name" placeholder="Suffix(eg. *.model)" style="padding:5px"></el-input>
        <span slot="footer" class="dialog-footer">
          <el-button @click="isNewSuffixShow = false">cancel</el-button>
          <el-button type="primary" @click="addSuffix">Confirm</el-button>
        </span>
      </el-dialog>
    </template>
  </section>
</template>
<script>
import * as projectApi from '@/api/project'
export default {
  name: 'projectSetting',
  props: ['projectList'],
  mounted() {},
  data() {
    return {
      //Visiable Flag
      isNewAlgorithmShow: false,
      isInviteUserShow: false,
      isNewSuffixShow: false,

      //Form
      newAlgorithm: {},
      newUser: {},
      newSuffix: {},

      //Current Selection
      currentSelectProject: {}
    }
  },
  methods: {
    deleteProject: function(project) {
      projectApi.deleteProject(this.$requests.api, project).then(response => {
        this.$message({
          message: 'Delete successful!',
          type: 'success'
        })
        this.$emit('refreshProjectList', '')
      })
    },
    addAlgorithm: function() {
      this.newAlgorithm.project = { id: this.currentSelectProject.id }

      projectApi.saveAlgorithm(this.$requests.api, this.newAlgorithm, JSON.parse(this.$store.getters.project)).then(response => {
        this.$message({
          message: 'Algorithm created successful!',
          type: 'success'
        })
        this.isNewAlgorithmShow = false
        this.$emit('refreshProjectList', '')
        this.newAlgorithm = {}
      })
    },
    deleteAlgorithm: function(id) {
      projectApi.batchDeleteAlgorithm(this.$requests.api, [{ id: id }], JSON.parse(this.$store.getters.project)).then(response => {
        this.$message({
          message: 'Algorithm delete successful!',
          type: 'success'
        })
        this.$emit('refreshProjectList', '')
      })
    },
    addSuffix: function() {
      this.newSuffix.project = { id: this.currentSelectProject.id }

      projectApi.createSuffix(this.$requests.api, this.newSuffix, JSON.parse(this.$store.getters.project)).then(response => {
        this.$message({
          message: 'Suffix add successful!',
          type: 'success'
        })
        this.isNewSuffixShow = false
        this.$emit('refreshProjectList', '')
        this.newSuffix = {}
      })
    },
    deleteSuffix: function(id) {
      projectApi.batchDeleteSuffix(this.$requests.api, [{ id: id }], JSON.parse(this.$store.getters.project)).then(response => {
        this.$message({
          message: 'Suffix delete successful!',
          type: 'success'
        })
        this.$emit('refreshProjectList', '')
      })
    },
    openInvite: function(project) {
      this.currentSelectProject = project
      this.isInviteUserShow = true
    },
    openNewAlgorithm: function(project) {
      this.currentSelectProject = project
      this.isNewAlgorithmShow = true
    },
    openNewSuffix: function(project) {
      this.currentSelectProject = project
      this.isNewSuffixShow = true
    }
  }
}
</script>
<style scoped>
</style>