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
				prop="type2">
			</el-table-column>
			<el-table-column
				label="type3"
				:width="150"
				header-align="center"
				align="center"
				prop="type3">
			</el-table-column>
			<el-table-column
				label="type4"
				:width="150"
				header-align="center"
				align="center"
				prop="type4">
			</el-table-column>
			<el-table-column
				label="type5"
				:width="200"
				prop="type5">
			</el-table-column>
			<el-table-column
				:width="200"
				header-align="center"
				align="center"
				prop="edit"
				label="operate">
				<template scope="scope">
					<el-button type="primary" icon="edit" size="small"
						@click="edit(scope.row)">编辑
					</el-button>
					<el-button type="danger" icon="delete" @click="deleteRow(scope.row)">删除</el-button>
				</template>
			</el-table-column>
		</el-table>
		<el-dialog
			title="编辑"
			size="tiny"
			v-model="showDialog">
			<el-form
				label-width="100px"
				label-position="right"
				label-suffix=" :"
			>
				<el-form-item
					label="type1">
					<el-input v-model="dialogForm.type1"
						autofocus></el-input>
				</el-form-item>
				<el-form-item
					label="type2sdfasf">
					<el-input v-model="dialogForm.type2"></el-input>
				</el-form-item>
				<el-form-item
					label="type3">
					<el-input v-model="dialogForm.type3"></el-input>
				</el-form-item>
				<el-form-item
					label="type4">
					<el-input v-model="dialogForm.type4"></el-input>
				</el-form-item>
				<el-form-item
					label="type5">
					<el-input v-model="dialogForm.type5"></el-input>
				</el-form-item>
			</el-form>
			<div slot="footer">
				<el-button type="default" @click="showDialog=false">取消</el-button>
				<el-button type="primary" @click="sure">确定</el-button>
			</div>
		</el-dialog>
	</div>
</template>

<script type="text/ecmascript-6">
	import Mock from 'mockjs'
	import api from './api'
	export default {
		data () {
			return {
				tableData: [],
				showDialog: false,
				dialogForm: {
					id: 1,
					type1: '',
					type2: '',
					type3: '',
					type4: '',
					type5: '',
				}
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
			edit(row) {
				this.showDialog = true;
				this.dialogForm = {...row};
			},
			sure() {
				this.showDialog = false;
				this.tableData.some((item, index) => {
					if (item.id === this.dialogForm.id) {
						this.tableData.splice(index, 1, this.dialogForm);
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
