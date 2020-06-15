import { Component, OnInit } from '@angular/core';
import { PluginLoaderService } from '../services/plugin-loader.service';
import { ExplorerFolderItem, ExplorerItem, WakoFileActionService } from '@wako-app/mobile-sdk';

@Component({
  selector: 'app-tab1',
  templateUrl: 'filer.page.html',
  styleUrls: ['filer.page.scss']
})
export class FilerPage implements OnInit {
  explorerFolderItem: ExplorerFolderItem = null;

  constructor(private pluginLoader: PluginLoaderService, private fileActionService: WakoFileActionService) {}

  ngOnInit() {
    this.goToRoot();
  }

  fetchChildren(explorerFolderItem: ExplorerItem) {
    explorerFolderItem.fetchChildren.subscribe((explorerFolderItem) => {
      this.explorerFolderItem = explorerFolderItem;
    });
  }

  goBack(explorerFolderItem: ExplorerFolderItem) {
    explorerFolderItem.goToParentAction.subscribe((explorerFolderItem) => {
      this.explorerFolderItem = explorerFolderItem;
    });
  }

  async goToRoot() {
    const pluginService = this.pluginLoader.getPluginService('plugin.premiumize-explorer');

    this.explorerFolderItem = await pluginService.fetchExplorerFolderItem();
  }

  open(item: ExplorerItem) {
    this.fileActionService.openWithDefaultActions(item.file.link, item.file.streamLink);
  }

  delete(item: ExplorerItem) {
    item.deleteAction.subscribe(() => {
      const items: ExplorerItem[] = [];
      this.explorerFolderItem.items.forEach((i) => {
        if (i.id !== item.id) {
          items.push(i);
        }
      });

      this.explorerFolderItem.items = items;
    });
  }
}
