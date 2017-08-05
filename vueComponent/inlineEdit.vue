<template>
	<div>
		<el-table
			border
			:width="600"
			:data="tableData">
			<el-table-column
				label="id"
				:width="90"
				heade-align=center
				align=center
				prop="id">
			</el-table-column>
			<el-table-column
				label="type1"
				:width="150"
				header-align="center"
				align="center"
				prop="type1"
			></el-table-column>
			<el-table-column
				label="type2"
				:width="150"
				header-align="center"
				align="center"
				prop="type2"
			></el-table-column>
			<el-table-column
				label="type3"
				:width="150"
				header-align="center"
				align="center"
				prop="type3"
			></el-table-column>
			<el-table-column
				label="type4"
				:width="150"
				header-align="center"
				align="center"
				prop="type4"
			></el-table-column>
			<el-table-column
				label="type5"
				:width="200"
				prop="type5"
			>
				<template scope="scope">
					<span v-if="scope.row.edit" @click="scope.row.edit=!scope.row.edit">{{scope.row.type5}}</span>
					<el-input v-else="scope.row.edit" @keyup.native="handleKeyup($event, scope.row)" v-model="scope.row.type5" style="text-align:center;"></el-input>
				</template>
			</el-table-column>
			<el-table-column
				:width="200"
				header-align="center"
				align="center"
				prop="edit"
				label="operate">
				<template scope="scope">
					<el-button v-if="scope.row.edit"type="primary" icon="edit" size="small" @click="scope.row.edit=!scope.row.edit">编辑</el-button>
					<el-button v-else="scope.row.edit" type="success" icon="check" size="small" @click="scope.row.edit=!scope.row.edit">完成</el-button>
					<el-button type="danger" @click="deleteRow(scope.row)">删除</el-button>
				</template>
			</el-table-column>
		</el-table>
	</div>
</template>

<script type="text/ecmascript-6">
	import Mock from 'mockjs'
	import api from './api'
	export default {
		data () {
			return {
				tableData: [],
			}
		},
		created () {
			api.getCate({})
				.then(res => {
					if (res.success) {
						this.tableData = res.rows;
					}
				})
				.catch(() => {
					this.$message.error('get list data error!');
				});
		},
		methods: {
			handleKeyup(row) {
				if (e.keyCode === 13) {
					row.edit = true
					this.tableData.some((item, index) => {
						if (item.id === row.id) {
							this.tableData.splice(index, 1, {...row});
							return true;
						} else {
							return false;
						}
					});
				}
			},
			deleteRow(row) {
				this.tableData.some((item, index) => {
					if (item.id === row.id) {
						this.tableData.splice(index, 1);
						return true;
					} else {
						return false;
					}
				});
			},
		},
	}
</script>

<style rel="stylesheet/css">


</style>
