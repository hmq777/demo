<template>
  <div class="allotdetal">
    <el-button type="danger" size="mini" @click="add">添加分配</el-button>
    <!-- <el-button type="success" size="mini" plain @click="submit">保存更改</el-button> -->
    <el-table :data="tableList.list" stripe>
      <el-table-column label="编号" >
      <template slot-scope="scope">
        {{ scope.$index + 1 }}
      </template>
    </el-table-column>
      <el-table-column prop="id" label="部门" >
      </el-table-column>
      <el-table-column label="费用类型" >
        <template slot-scope="scope">
          {{ scope.$index + 1 }}
        </template>
      </el-table-column>
    </el-table>
    <table class="tablelist">
      <thead>
      <tr>
        <th>编号</th>
        <th>部门</th>
        <th>费用类型</th>
        <th>分配费用</th>
        <th>操作</th>
      </tr>
      </thead>
      <tbody>
      <tr v-for="(item,index) in msg" :key="item.id" :class="bgstyle">
        <td>{{index+1}}</td>
        <td>
          <el-select v-model="item.departid" clearable placeholder="请选择" v-if="edi===index">
            <el-option v-for = "items in msg" :key="items.id" :value="items.id" :label="items.departid"></el-option>
          </el-select>
          <div v-else >{{item.departid}}</div>
        </td>
        <td>
          <input type="text" v-model="item.moneytype" v-if="edi===index" placeholder="请输入费用类型">
          <span v-else>{{item.moneytype}}</span>
        </td>
        <td>
          <input type="text" v-model="item.money" v-if="edi===index" placeholder="请输入金额">
          <span v-else>￥{{item.money}}</span>
        </td>
        <td>
          <el-button type="warning" size="mini" v-show="changeappear" @click="change(index)">修改</el-button>
          <el-button type="success" size="mini" v-show="confirmappear" @click="save(index)">确定</el-button>
          <el-button type="info" size="mini" v-show="delappear" @click="del(index)">删除</el-button>
        </td>
      </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
  export default {
    data () {
      return {
        enableIndex: null,
        tableList: {
          total: 12,
          list: [
            { id: 1, moneytype: '员工关系费，团建费', money: 1000 },
            { id: 2, moneytype: '团建费', money: 1780 },
            { id: 3, moneytype: '交通费', money: 2345 },
            { id: 4, moneytype: '餐补', money: 33 }
          ]
        },
        optionList: [
          { value: 1, name: '研发一部' },
          { value: 2, name: '研发二部' },
          { value: 3, name: '研发三部' }
        ]
      }
    },
    methods: {
      // 更改数据
      change(index) {

      },
      //  删除数据
      del (index) {
        let list = this.tableList.list;
        list.splice(index, 1);
      },
      //  保存数据
      save(index) {
        this.enableIndex = !index;

      },
      //  添加数据
      add() {
        let list = this.tableList.list;
        list.push({});
        this.enableIndex = list.length - 1;
      },

    }
  }
</script>

<style lang="scss">

</style>
