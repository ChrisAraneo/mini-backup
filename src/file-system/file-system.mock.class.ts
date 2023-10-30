import { FileSystem } from './file-system.class';

export class FileSystemMock extends FileSystem {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  writeFile(_path, _data, _options, _callback): Promise<void> {
    return;
  }

  stat(path: string, callback: (error: any, data?: any) => any): void {
    if (
      this.isCorrectTextFile(path) ||
      this.isCorrectJsonFile(path) ||
      this.isCorrectConfigFile(path)
    ) {
      callback(null, {
        mtime: '2023-10-27T21:33:39.661Z',
      });
    } else {
      callback('Error');
    }
  }

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  readFile(path: string, _options, callback: (error: any, data?: any) => any): void {
    if (this.isCorrectTextFile(path)) {
      callback(null, 'Hello World!');
    } else if (this.isCorrectJsonFile(path)) {
      callback(null, '{"name":"Joel"}');
    } else if (this.isCorrectConfigFile(path)) {
      callback(
        null,
        '{"backupDirectory":"./backups","files":[{"filename":"this-is-example-filename.txt"}],"interval":3600,"mode":"backup","roots":["C:\\\\","D:\\\\","E:\\\\"]}',
      );
    } else {
      callback('Error');
    }
  }

  private isCorrectTextFile(path: string): boolean {
    return ['test.txt', 'test2.txt', 'test3.txt'].includes(path);
  }

  private isCorrectJsonFile(path: string): boolean {
    return ['test.json', 'test2.json', 'test3.json'].includes(path);
  }

  private isCorrectConfigFile(path: string): boolean {
    return path.includes('config.json');
  }
}
