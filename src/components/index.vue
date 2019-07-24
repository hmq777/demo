<template>
  <div class="allotdetal">
    <div class="process-position">
      <el-progress :percentage="percent" :stroke-width="18" color="red" :text-inside="true"></el-progress>
      <div class="process-vertical" :style="{left: left}"></div>
    </div>
    
    <el-button type="danger" size="mini" @click="add">添加分配</el-button>
    <!-- <el-button type="success" size="mini" plain @click="submit">保存更改</el-button> -->
    <el-table :data="tableList.list" stripe>
      <el-table-column label="编号" align="center">
      <template slot-scope="scope">
        {{ scope.$index + 1 }}
      </template>
    </el-table-column>
      <el-table-column prop="id" label="部门" align="center">
      </el-table-column>
      <el-table-column prop="moneytype" label="费用类型" align="center"></el-table-column>
    </el-table>
  </div>
</template>

<script>
  export default {
    data () {
      return {
        enableIndex: null,
        percent: null,
        left: '',
        index: 'ceshi',
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
    created() {
      this.percent = 80;
      this.left = '30%';
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
.process-position {
  position: relative;
  padding: 5px 0;
}
.process-vertical {
  position: absolute;
  background: red;
  top: 0;
  bottom: 0;
  width: 3px;
}
</style>
