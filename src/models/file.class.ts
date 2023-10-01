import path from "path";

export class File {
  constructor(private path: string, private content: any) {}

  getFilename(): string {
    const basename = path.basename(this.path);
    const parts = basename.split(".");

    return parts[0];
  }

  getExtension(): string | null {
    const basename = path.basename(this.path);
    const parts = basename.split(".");

    if (parts.length < 2) {
      return null;
    }

    return parts[1];
  }

  getContent(): any {
    return this.content;
  }
}