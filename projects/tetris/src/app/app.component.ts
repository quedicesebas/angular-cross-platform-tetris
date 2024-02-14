import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { BoardComponent, GameEngineLibService } from '@game-engine-lib';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, BoardComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'tetris';
  constructor(private engineService: GameEngineLibService) {
    console.info(engineService.testing);
  }
}
