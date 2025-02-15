import { writeFileSync } from 'fs';
import { createRequire } from 'module';
import { join } from 'path';
import { SemVer } from 'semver';
import { publishPackage } from './publishPackage.js';
import { folder, getPublishableProjects, readJson, ReleaseData } from './utils.js';
const require = createRequire(import.meta.url);
const { green, yellow } = require('chalk');
const { inc, prerelease, parse } = require('semver');
const minimist = require('minimist');

// process cmd line options
const argv = minimist(process.argv.slice(2));
/** getting cmd line options */
const dryRun = !!!argv.doActualPublish;
const currentVersions = await getPublishableProjects();

/** read the main package version */
const main = await readJson(join(folder, 'package.json'));
const currentVersion = main.version;
const parsedVersion = parse(currentVersion) as SemVer
/** reads the pre-release train from the current version number */
const preReleaseTrain = typeof parsedVersion.prerelease[0] === 'string';;

if (dryRun) {
  console.log(
    `doing a dry run to publish current version, under ${yellow(preReleaseTrain ? 'next' : 'latest')} tag, no changes will be made to do an actual release add the ${yellow(
      '--doActualPublish'
    )} cmd line option\n`
  );
}


for (const pkg of currentVersions) {
  const originalPackage = readJson(join(folder, pkg.root, 'package.json'));
  const distPackage = readJson(join(folder, pkg.dist, 'package.json'));
  console.log(`Making a release for ${green(pkg.name)}, for version ${yellow(pkg.version)}`);
  if (originalPackage === undefined || distPackage === undefined) {
    console.log(`Couldn't find package.json for ${pkg.name}. Aborting run`);
    process.exit(15);
  }
  await publishPackage(preReleaseTrain ? 'next' : 'latest', { ...pkg, version: pkg.version }, dryRun);
}
