import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { BoardComponent, GameEngineLibService } from '@game-engine-lib';
import { ElectronService } from './core/services/electron.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, BoardComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'tetris';
  constructor(
    private engineService: GameEngineLibService,
    private electronService: ElectronService
  ) {
    console.info(engineService.testing);
    if (electronService.isElectron) {
      console.log('Run in electron');
      console.log('Electron ipcRenderer', this.electronService.ipcRenderer);
      console.log('NodeJS childProcess', this.electronService.childProcess);
      console.log('Remote process', this.electronService.remote.process);
    } else {
      console.log('Run in browser');
    }
  }
}
