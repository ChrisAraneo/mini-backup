# Mini Backup (v0.3.0)

![Mini backup logo](logo.png?raw=true)

# What & why?

I needed a simple utility script to search for files and then make copies of those files.

Mini Backup works in two modes: "backup" and "restore". In the case of backup mode, the script searches for files with a given name on the disk, then encrypts them and saves them to the selected directory. In restore mode, the script decrypts all previously saved files.

To run Mini Backup you need the programs listed in section *Used technologies*. Then just modify the configuration file as needed (`src/config.json`) and run the command
```bash
/mini-backup$ npm run start
```
More details below.

# Set the config.json file

Before running the application fill the values in the `src/config.json` configuration file according to your needs (this file will be then also copied into `dist/config.json`).

### Example `config.json`

```json
{
  "backupDirectory": "./backups",
  "files": [
    {
      "filename": "this-is-example-filename.txt"
    }
  ],
  "interval": 3600,
  "log-level": "debug",
  "mode": "backup",
  "roots": ["C:\\", "D:\\", "E:\\", "F:\\", "G:\\", "H:\\"]
}
```

### Configuration parameters explained

- `mode` - either `"backup"` or `"restore"`
- `backupDirectory` - (relative) directory for storing backup files, recommended `"./backups"`
- `interval` - time interval in seconds, how often backups are to be performed, for example `3600`
- `roots` - root directories where to search for files to back up
- `files` - array of files to find and backup; each element o array should be an object with filename property
- `log-level` - level of detail of displayed logs (severity of errors); recommended `"info"`

# Executing backup

Once you have filled the `config.json`, you can install the required dependencies and then run the script.

Install dependencies:
```bash
/mini-backup$ npm install
```

Run the script:
```bash
/mini-backup$ npm run start
```

# Restoring files

If `"restore"` mode is set in the configuration file, then all encrypted files in the `"backupDirectory"` directory will be decrypted and restored.

Run the script:
```bash
/mini-backup$ npm run start
```

# Used technologies

Developing and running the script requires following technologies:

- [Node.js](https://nodejs.org/en) (recommended v18.16.0) - used for running & building the project
- [TypeScript](https://www.typescriptlang.org/) - used as a development tool, it is not required to download any compilers besides project dependencies.

# License

Project is [MIT licensed](LICENSE).
Project logo is [CC BY-SA 4.0 licensed to Krzysztof Pająk (Chris Araneo)](https://creativecommons.org/licenses/by-sa/4.0/).