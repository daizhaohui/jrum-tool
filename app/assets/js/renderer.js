const g_pty = require('node-pty');
const _os = require('os');
const g_shell = process.env[_os.platform() === 'win32' ? 'COMSPEC' : 'SHELL'];
const g_shellOptions =  {
    name: 'xterm-color',
    cols: 80,
    rows: 30,
    cwd: process.cwd(),
    env: process.env
  };
  const g_os = {
      isWindow:()=>{
          return _os.platform() === "win32";
      },
      isMac:()=>{
          return _os.platform() === "darwin"
      }
  }