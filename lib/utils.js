const os = require('os');
const path = require('path');
const core = require('@actions/core');

// arch in [arm, x32, x64...] (https://nodejs.org/api/os.html#os_os_arch)
// return value in [amd64, 386, arm]
function mapArch(arch) {
  const mappings = {
    x32: '386',
    x64: 'amd64'
  };
  return mappings[arch] || arch;
}

// os in [darwin, linux, win32...] (https://nodejs.org/api/os.html#os_os_platform)
// return value in [darwin, linux, windows]
function mapOS(os) {
  const mappings = {
    darwin: 'macOS',
    win32: 'windows',
    linux: 'linux',
  };
  return mappings[os] || os;
}

function getDownloadObject(version) {
  const platform = os.platform();
  //core.debug(`platform: ${ platform }`);
  //core.debug(`os.arch(): ${ os.arch() }`);
  const filename = 'okareo_0.0.8_linux_amd64';
  //const filename = `okareo_${ version }_${ mapOS(platform) }_${ mapArch(os.arch()) }`;
  const extension = 'tar.gz'; //platform === 'win32' ? 'zip' : 'tar.gz';
  //const binPath = filename;
  const binPath = 'bin';//(platform === 'win32') ? 'bin' : path.join(filename, 'bin');
  //core.debug(`binPath: ${ binPath }`);
  //const url = `https://github.com/okareo-ai/okareo-cli/releases/download/v${ version }/${ filename }.${ extension }`
  const url = `https://github.com/okareo-ai/okareo-cli/releases/download/v0.0.8/okareo_0.0.8_linux_amd64.tar.gz`
  return {
    url,
    binPath
  };
}

module.exports = { getDownloadObject }
