import { Injectable } from '@angular/core';
import { ipcRenderer, webFrame } from 'electron';
import * as childProcess from 'child_process';
import * as fs from 'fs';

@Injectable({
  providedIn: 'root',
})
export class ElectronService {
  ipcRenderer!: typeof ipcRenderer;
  webFrame!: typeof webFrame;
  remote: any;
  childProcess!: typeof childProcess;
  fs!: typeof fs;

  get isElectron(): boolean {
    return !!window?.process?.type;
  }

  constructor() {
    if (this.isElectron) {
      this.ipcRenderer = window.require('electron').ipcRenderer;
      this.webFrame = window.require('electron').webFrame;

      this.remote = require('@electron/remote');

      this.childProcess = window.require('child_process');
      this.fs = window.require('fs');
    }
  }
}
