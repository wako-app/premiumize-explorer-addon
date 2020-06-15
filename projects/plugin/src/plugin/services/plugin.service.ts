import { Injectable } from '@angular/core';
import {
  Episode,
  ExplorerFile,
  ExplorerFolderItem,
  KodiOpenParams,
  Movie,
  OpenMedia,
  PluginBaseService,
  Show,
  WakoFileActionButton
} from '@wako-app/mobile-sdk';
import { TranslateService } from '@ngx-translate/core';
import { logData } from './tools';
import { ExplorerService } from './explorer.service';
import { ModalController } from '@ionic/angular';
import { SettingsModalComponent } from '../settings-modal/settings-modal.component';

@Injectable()
export class PluginService extends PluginBaseService {
  constructor(protected translate: TranslateService, private explorerService: ExplorerService, private modalController: ModalController) {
    super();
  }

  async initialize() {
    logData('plugin initialized');
  }

  async afterInstall() {
    logData('plugin installed');

    if (document.location.href.match('localhost:4200')) {
      return;
    }

    const modal = await this.modalController.create({
      component: SettingsModalComponent,
      backdropDismiss: false
    });

    await modal.present();
  }

  afterUpdate(): any {
    logData('plugin updated');
  }

  setTranslation(lang: string, translations: any): any {
    this.translate.setDefaultLang(lang);
    this.translate.use(lang);
    this.translate.setTranslation(lang, translations);
  }

  customAction(action: string, data: any): any {}

  afterEpisodeMiddleware(show: Show, episode: Episode): Promise<Episode> {
    return Promise.resolve(undefined);
  }

  afterMovieMiddleware(movie: Movie): Promise<Movie> {
    return Promise.resolve(undefined);
  }

  afterShowMiddleware(show: Show): Promise<Show> {
    return Promise.resolve(undefined);
  }

  beforeEpisodeMiddleware(show: Show, episode: Episode): Promise<Episode> {
    return Promise.resolve(undefined);
  }

  beforeMovieMiddleware(movie: Movie): Promise<Movie> {
    return Promise.resolve(undefined);
  }

  beforeShowMiddleware(show: Show): Promise<Show> {
    return Promise.resolve(undefined);
  }

  fetchExplorerFolderItem(): Promise<ExplorerFolderItem> {
    return this.explorerService.get().toPromise();
  }

  getFileActionButtons(
    file: ExplorerFile,
    title?: string,
    posterUrl?: string,
    seekTo?: number,
    openMedia?: OpenMedia,
    kodiOpenParams?: KodiOpenParams
  ): Promise<WakoFileActionButton[]> {
    return Promise.resolve([]);
  }
}
