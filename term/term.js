
//  npm install ssh2
//  term.js

        var username='root',password='node',host='127.0.0.1',port=2222;
            
        var {app,BrowserWindow}  = require('electron');
        var webPreferences       = {nodeIntegration:true,contextIsolation:false};
        app.whenReady().then(()=>{
              var win   = new BrowserWindow({webPreferences});
              win.maximize();
              win.webContents.openDevTools();
              win.loadURL(`data:text/html;base64,${btoa(html)}`);
        });
        
        var html    = `
              <link rel=stylesheet href='https://cdn.jsdelivr.net/npm/@xterm/xterm/css/xterm.min.css'>
              <style>
                    html { height:100% }
                    body { height:calc(100% - 16px) }
                    #terminal { height:100% }
              </style>
              
              <div id=terminal></div>
              
              <script type=module>
              
                    import xterm from 'https://cdn.jsdelivr.net/npm/@xterm/xterm@5.5.0/+esm';
                    import addonFit from 'https://cdn.jsdelivr.net/npm/@xterm/addon-fit/+esm';
                    
                    var term        = new xterm.Terminal();
                    var fitAddon    = new addonFit.FitAddon();
                    term.loadAddon(fitAddon);
                    term.open(terminal);
                    term.onKey(({key,domEvent:e})=>stream.write(key));
                    
                    var stream;
                    var {Client}    = require('ssh2');
                    var con         = new Client();
                    
                    con.on('ready',()=>{
                          fitAddon.fit();
                          term.focus();
                          con.shell((err,stream2)=>{
                                stream    = stream2;
                                stream.on('data',data=>term.write(data));
                          });
                    });
                    
                    con.connect({host,port,username,password,debug:console.log});
                    
              </script>
        `;
        
        