<template>
  <section>
    <el-collapse v-model="activeName" accordion>
      <el-collapse-item title="Pending Models" name="1">
        <div>
          <el-table :data="modelList.newModels.content" style="width: 100%">
            <el-table-column type="expand">
              <template
                slot-scope="props"
              >Comments: {{props.row.comments?props.row.comments:'None'}}</template>
            </el-table-column>
            <el-table-column prop="id" label="ID" width="60"></el-table-column>
            <el-table-column prop="name" label="Name"></el-table-column>
            <el-table-column prop="status" label="Status" width="100"></el-table-column>
            <el-table-column prop="owner.username" label="Owner"></el-table-column>
            <el-table-column prop="cachedVersion" label="Cached Version"></el-table-column>
            <el-table-column prop="releasedVersion" label="Released Version"></el-table-column>
            <el-table-column prop="lastOperator.username" label="Last Operator"></el-table-column>
            <el-table-column prop="updatedAt" label="Update Time">
              <template slot-scope="scope">{{scope.row.updatedAt | dateFilter}}</template>
            </el-table-column>
            <el-table-column prop="created_at" label="Create Time">
              <template slot-scope="scope">{{scope.row.created_at | dateFilter}}</template>
            </el-table-column>
            <el-table-column label="Operations" prop="operation" width="180">
              <template slot-scope="scope">
                <el-button size="mini" type="success" @click="openApprovalBox(scope.row)">Approve</el-button>
                <el-button size="mini" type="danger" @click="openRejectBox(scope.row)">Reject</el-button>

                <el-dialog title="Approve Panel" :visible.sync="approvalBoxVisible" width="30%">
                  <p>Model Name: {{selectModel.name}}</p>
                  <p>Owner: {{selectModel.owner.username}}</p>
                  <p>Created Time:{{selectModel.created_at|dateFilter}}</p>
                  <el-divider></el-divider>
                  <el-select
                    v-model="approvalForm.algorithm"
                    style="margin-bottom:20px"
                    placeholder="请选择"
                  >
                    <el-option
                      v-for="item in algorithms"
                      :key="item.id"
                      :label="item.name"
                      :value="item.id"
                    ></el-option>
                  </el-select>
                  <el-switch
                    style="display: block; margin-bottom:20px; margin-left:10px"
                    v-model="approvalForm.isCachedVersion"
                    active-color="#13ce66"
                    inactive-color="#ff4949"
                    active-text="Cached version"
                    inactive-text="Released version"
                  ></el-switch>
                  <el-input
                    type="textarea"
                    :rows="2"
                    placeholder="Your comments"
                    v-model="approvalForm.comment"
                  ></el-input>
                  <span slot="footer" class="dialog-footer">
                    <el-button @click="approvalBoxVisible = false">Cancel</el-button>
                    <el-button type="primary" @click="handleApprove">Confirm</el-button>
                  </span>
                </el-dialog>

                <el-dialog title="Reject Panel" :visible.sync="rejectBoxVisible" width="30%">
                  <p>Model Name: {{selectModel.name}}</p>
                  <p>Owner: {{selectModel.owner.username}}</p>
                  <p>Created Time:{{selectModel.created_at|dateFilter}}</p>
                  <el-divider></el-divider>
                  <el-input
                    type="textarea"
                    :rows="2"
                    placeholder="Your comments"
                    v-model="approvalForm.comment"
                  ></el-input>
                  <span slot="footer" class="dialog-footer">
                    <el-button @click="rejectBoxVisible = false">Cancel</el-button>
                    <el-button type="primary" @click="handleReject">Confirm</el-button>
                  </span>
                </el-dialog>
              </template>
            </el-table-column>
          </el-table>
        </div>
      </el-collapse-item>
      <el-collapse-item title="Approved Models" name="2">
        <div>
          <el-table :data="modelList.approvalModels.content" style="width: 100%">
            <el-table-column prop="id" label="ID" width="60"></el-table-column>
            <el-table-column prop="name" label="Name"></el-table-column>
            <el-table-column prop="status" label="Status" width="100"></el-table-column>
            <el-table-column prop="owner.username" label="Owner"></el-table-column>
            <el-table-column prop="cachedVersion" label="Cached Version"></el-table-column>
            <el-table-column prop="releasedVersion" label="Released Version"></el-table-column>
            <el-table-column prop="lastOperator.username" label="Last Operator"></el-table-column>
            <el-table-column prop="updatedAt" label="Update Time">
              <template slot-scope="scope">{{scope.row.updatedAt | dateFilter}}</template>
            </el-table-column>
            <el-table-column prop="created_at" label="Create Time">
              <template slot-scope="scope">{{scope.row.created_at | dateFilter}}</template>
            </el-table-column>
            <el-table-column label="Operations" prop="operation" width="200">
              <template slot-scope="scope">
                <div v-if="!scope.row.isReleased">
                  <el-button size="mini" type="success" @click="handleRelease(scope.row)">Release</el-button>
                  <el-button size="mini" type="danger" @click="handleRollback(scope.row)">Rollback</el-button>
                </div>
                <p v-if="scope.row.isReleased">Model has been published!</p>
              </template>
            </el-table-column>
          </el-table>
        </div>
      </el-collapse-item>
      <el-collapse-item title="Rejected Models" name="3">
        <div>
          <el-table :data="modelList.rejectedModels.content" style="width: 100%">
            <el-table-column prop="id" label="ID" width="60"></el-table-column>
            <el-table-column prop="name" label="Name"></el-table-column>
            <el-table-column prop="status" label="Status" width="100"></el-table-column>
            <el-table-column prop="owner.username" label="Owner"></el-table-column>
            <el-table-column prop="cachedVersion" label="Cached Version"></el-table-column>
            <el-table-column prop="releasedVersion" label="Released Version"></el-table-column>
            <el-table-column prop="lastOperator.username" label="Last Operator"></el-table-column>
            <el-table-column prop="updatedAt" label="Update Time">
              <template slot-scope="scope">{{scope.row.updatedAt | dateFilter}}</template>
            </el-table-column>
            <el-table-column prop="created_at" label="Create Time">
              <template slot-scope="scope">{{scope.row.created_at | dateFilter}}</template>
            </el-table-column>
            <el-table-column label="Operations" prop="operation" width="180">
              <template slot-scope="scope">
                <el-button size="mini" type="success" @click="handleRollback(scope.row)">Rollback</el-button>
              </template>
            </el-table-column>
          </el-table>
        </div>
      </el-collapse-item>
    </el-collapse>
  </section>
</template>
<script>
import * as modelApi from '@/api/model'
import Event from '../../main.js'
export default {
  name: 'modelCenter',
  mounted() {
    this.handleModelList()
    /*监听事件*/
    Event.$on('refreshModels', val => {
      this.handleModelList()
    })
  },
  data() {
    return {
      activeName: '1',
      modelList: {
        rejectedModels: {
          content: []
        },
        newModels: {
          content: []
        },
        approvalModels: {
          content: []
        }
      },
      algorithms: [],
      selectModel: { name: '', owner: { username: '' }, created_at: '' },
      approvalForm: {
        isCachedVersion: true,
        comment: ''
      },
      rejectForm: {
        comment: ''
      },
      approvalBoxVisible: false,
      rejectBoxVisible: false,
      releaseBoxVisible: false
    }
  },
  methods: {
    handleModelList() {
      modelApi.getModelList(this.$requests.api, JSON.parse(this.$store.getters.project).project.ref_id).then(response => {
        this.modelList = response.data
        console.log(response.data)
      })
    },
    handleApprove() {
      //Version handle
      if (!this.selectModel.cachedVersion) {
        this.selectModel.cachedVersion = 0
      }
      if (!this.selectModel.releasedVersion) {
        this.selectModel.releasedVersion = 0
      }
      if (this.approvalForm.isCachedVersion) {
        this.selectModel.cachedVersion++
      } else {
        this.selectModel.releasedVersion++
      }

      //Comments handle
      if (this.approvalForm.comment != '') {
        this.approvalForm.comment = this.$store.getters.name + ' :' + this.approvalForm.comment
        this.selectModel.comment = this.selectModel.comment
          ? this.selectModel.comment + '<br/>' + this.approvalForm.comment
          : this.approvalForm.comment
      }

      this.selectModel.status = 'APPROVED'

      let data = {
        id: this.selectModel.id,
        name: this.selectModel.name,
        status: 'APPROVED',
        comments: this.approvalForm.comment,
        refId: this.selectModel.refId,
        cachedVersion: this.selectModel.cachedVersion,
        releasedVersion: this.selectModel.releasedVersion,
        updatedAt: new Date().getTime(),
        algorithm: { id: this.approvalForm.algorithm },
        suffix: this.selectModel.suffix,
        project: { id: this.selectModel.project.id },
        isReleased: false,
        created_at: this.selectModel.created_at,
        deleted_at: null,
        is_deleted: false
      }

      //Push decision
      modelApi.pushDecision(this.$requests.api, data, JSON.parse(this.$store.getters.project).project.ref_id).then(response => {
        this.handleModelList()
        this.$message({
          message: 'Model has been approved!',
          type: 'success'
        })
        this.approvalBoxVisible = false
      })
    },

    handleReject() {
      //Comments handle
      if (this.rejectForm.comment != '') {
        this.rejectForm.comment = this.$store.getters.name + ' :' + this.rejectForm.comment
        this.selectModel.comment = this.selectModel.comment ? this.selectModel.comment + '<br/>' + this.rejectForm.comment : this.rejectForm.comment
      }

      let data = {
        id: this.selectModel.id,
        name: this.selectModel.name,
        status: 'REJECTED',
        comments: this.rejectForm.comment,
        refId: this.selectModel.refId,
        cachedVersion: this.selectModel.cachedVersion,
        releasedVersion: this.selectModel.releasedVersion,
        updatedAt: new Date().getTime(),
        suffix: this.selectModel.suffix,
        project: { id: this.selectModel.project.id },
        isReleased: false,
        created_at: this.selectModel.created_at,
        deleted_at: null,
        is_deleted: false
      }

      //Push decision
      modelApi.pushDecision(this.$requests.api, data, JSON.parse(this.$store.getters.project).project.ref_id).then(response => {
        this.handleModelList()
        this.$message({
          message: 'Model has been rejected!',
          type: 'success'
        })
        this.rejectBoxVisible = false
      })
    },

    handleRollback(model) {
      let data = {
        id: model.id,
        name: model.name,
        status: 'NEW',
        comments: null,
        refId: model.refId,
        cachedVersion: model.cachedVersion,
        releasedVersion: model.releasedVersion,
        updatedAt: new Date().getTime(),
        algorithm: model.algorithm,
        suffix: model.suffix,
        project: { id: model.project.id },
        isReleased: true,
        created_at: model.created_at,
        deleted_at: null,
        is_deleted: false
      }

      //Push decision
      modelApi.pushDecision(this.$requests.api, data, JSON.parse(this.$store.getters.project).project.ref_id).then(response => {
        this.handleModelList()
        this.$message({
          message: 'Model has been rollback!',
          type: 'success'
        })
      })
    },

    handleRelease(model) {
      let data = {
        id: model.id,
        name: model.name,
        status: 'APPROVED',
        comments: null,
        refId: model.refId,
        cachedVersion: model.cachedVersion,
        releasedVersion: model.releasedVersion,
        updatedAt: new Date().getTime(),
        algorithm: model.algorithm,
        suffix: model.suffix,
        project: { id: model.project.id },
        isReleased: false,
        created_at: model.created_at,
        deleted_at: null,
        is_deleted: false
      }
      //Push decision
      modelApi.release(this.$requests.api, data, JSON.parse(this.$store.getters.project).project.ref_id).then(response => {
        this.handleModelList()
        this.$message({
          message: 'Model has been released!',
          type: 'success'
        })
      })
    },
    openApprovalBox(model) {
      this.algorithms = JSON.parse(this.$store.getters.project).project.algorithm_list
      this.approvalBoxVisible = true
      this.selectModel = model
    },
    openRejectBox(model) {
      this.rejectBoxVisible = true
      this.selectModel = model
    }
  }
}
</script>
<style scoped>
</style>