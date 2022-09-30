import { Component, OnInit } from '@angular/core';
import { IPlayerModel } from '@lumieducation/h5p-server';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'h5p';

  ngOnInit() {
    const h5pPlayer: any = document.getElementById('player');
    h5pPlayer.loadContentCallback = async (contentId: string) => Promise<IPlayerModel>

    const h5pEditor: any = document.getElementById('editor');
    h5pEditor.loadContentCallback = async (contentId: string) => { /** retrieve content model from server and return it as Promise **/ };

    const h5pPlayerSave: any = document.getElementById('editor');
    h5pPlayerSave.saveContentCallback = async (contentId: string, requestBody: any) => { /** save content on server **/ };
  }
}
