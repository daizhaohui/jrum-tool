const {Menu} = require("electron");
const AppExitCmd = require("../commands/appExitCmd")

const template = [];
template.push({
      label: 'JRUITool',
      submenu: [
        {role: 'about',label:'About JRUITool'},
        {type: 'separator'},
        {
            role: 'quit',
            label: 'Quit JRUITool',
            accelerator:'Command+Q',
            click: AppExitCmd
        },
      ]
    }
);

module.exports = template;