let togglApi;
let quickAddApi;
let projects;


const fs = require('fs');

var todo = fs.readFileSync('/Users/pro/Dropbox/obwlog/四维提升.md').toString().split("\n");

let menu = {};
for (let i = 0; i<todo.length; i++) {
	if (todo[i].startsWith("- [ ]")) {
		todo[i] = todo[i].replace("- [ ]","");
		menu[todo[i]] = todo[i];
	}
}

const projectList = {
	"写作": "写作",
	"冲浪": "冲浪",
	"数学": "数学",
	"杂事": "杂事",
	"测试": "测试",
	"编程": "编程",
	"锻炼": "锻炼",
	"阅读": "阅读",
	"项目": "项目"
}
async function selectTODO(menu) {
	const { suggester } = quickAddApi;
	const options = Object.keys(menu);

	const choice = await suggester(options,options);
	if (!choice) return;

	const todo = menu[choice];
	selectProject(todo,projectList);
}

async function selectProject(todo,menu) {
	const { suggester } = quickAddApi;
	const options = Object.keys(menu);

	const choice = await suggester(options,options);
	if (!choice) return;


	const project = menu[choice];


	const projectID = projects.find(p => p.name === project).id;
	await togglApi.startTimer({description: todo, pid: projectID});
}



module.exports = async function togglManager(params) {
	togglApi = params.app.plugins.plugins["obsidian-toggl-integration"].toggl;
	quickAddApi = params.quickAddApi;
	projects = await togglApi.getProjects();
	selectTODO(menu);

}