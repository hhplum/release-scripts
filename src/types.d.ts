export declare function publish(options: {
  defaultPackage: string;
  getPkgDir?: (pkg: string) => string;
  /**
   * Enables npm package provenance https://docs.npmjs.com/generating-provenance-statements
   * @default false
   */
  provenance?: boolean;
  /**
   * Package manager that runs the publish command
   * @default "npm"
   */
  packageManager?: "npm" | "pnpm";
}): Promise<void>;

export declare function release(options: {
  repo: string;
  packages: string[];
  logChangelog: (pkg: string) => void | Promise<void>;
  generateChangelog: (pkg: string, version: string) => void | Promise<void>;
  toTag: (pkg: string, version: string) => string;
  getPkgDir?: (pkg: string) => string;
  file?: string;
}): Promise<void>;

export declare const changelogArgs: string[];

export declare function generateChangelog(
  pkgName: string,
  args: string[],
  mainName?: string,
  getPkgDir?: (pkg: string) => string,
): Promise<void>;

export declare function getLatestTag(
  pkgName: string,
  mainName?: string,
  getPkgDir?: (pkg: string) => string,
): Promise<string>;

export declare function logRecentCommits(
  pkgName: string,
  mainName?: string,
  getPkgDir?: (pkg: string) => string,
): Promise<void>;
