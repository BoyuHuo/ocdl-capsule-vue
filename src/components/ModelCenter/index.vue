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
                <el-button size="mini" type="success">Approve</el-button>
                <el-button
                  size="mini"
                  type="danger"
                  @click="deleteProject(scope.row.project)"
                >Reject</el-button>
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
            <el-table-column label="Operations" prop="operation" width="180">
              <template slot-scope="scope">
                <el-button size="mini" type="success">Approve</el-button>
                <el-button
                  size="mini"
                  type="danger"
                  @click="deleteProject(scope.row.project)"
                >Reject</el-button>
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
                <el-button size="mini" type="success">Approve</el-button>
                <el-button
                  size="mini"
                  type="danger"
                  @click="deleteProject(scope.row.project)"
                >Reject</el-button>
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
export default {
  name: 'modelCenter',
  mounted() {
    this.handleModelList()
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
      }
    }
  },
  methods: {
    handleModelList() {
      modelApi.getModelList(this.$requests.api, JSON.parse(this.$store.getters.project).project.ref_id).then(response => {
        this.modelList = response.data
        console.log(response.data)
      })
    }
  }
}
</script>
<style scoped>
</style>