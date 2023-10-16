import Path from "path";
import { CurrentDirectoryProvider } from "./current-directory-provider";
import { FileProcessor } from "./file-processor";
import { JsonFile } from "./models/json-file.class";

export class ConfigLoader {
  static async readConfigFile(): Promise<object> {
    const currentDirectory = CurrentDirectoryProvider.getCurrentDirectory();
    const path = Path.normalize(`${currentDirectory}/config.json`);
    let config: JsonFile | undefined;

    try {
      config = await FileProcessor.readJsonFile(path);
    } catch (error: unknown) {
      throw Error(
        "File config.json not found. Create config.json file in the application directory."
      );
    }

    if (!config) {
      throw Error("File config.json is empty or incorrect.");
    }

    return (config as JsonFile)?.getContent();
  }
}
