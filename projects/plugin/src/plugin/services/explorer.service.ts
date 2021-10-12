import { Injectable } from '@angular/core';
import { ExplorerFile, ExplorerFolderItem } from '@wako-app/mobile-sdk';
import { from } from 'rxjs';
import { map, switchMap } from 'rxjs/operators';
import { PremiumizeFolderDeleteForm } from './premiumize/forms/folder/premiumize-folder-delete.form';
import { PremiumizeFolderListForm } from './premiumize/forms/folder/premiumize-folder-list.form';
import { PremiumizeItemDeleteForm } from './premiumize/forms/item/premiumize-item-delete.form';
import { PremiumizeApiService } from './premiumize/services/premiumize-api.service';
import { SettingsService } from './settings.service';

@Injectable()
export class ExplorerService {
  constructor(private settingsService: SettingsService) {
    this.settingsService.settings$.subscribe((change) => {
      PremiumizeApiService.setApiKey(change.newValue.apiKey);
    });
  }

  get(folderId?: string) {
    return from(this.settingsService.get()).pipe(
      switchMap((settings) => {
        PremiumizeApiService.setApiKey(settings.apiKey);

        return PremiumizeFolderListForm.submit(folderId).pipe(
          map((data) => {
            if (data.status === 'error') {
              throw new Error(data.message ?? JSON.stringify(data));
            }

            const explorerFolderItem: ExplorerFolderItem = {
              isRoot: data.name === 'root',
              title: data.name === 'root' ? 'Premiumize Explorer' : data.name,
              folderId: data.folder_id,
              parentId: data.parent_id,
              label: data.name,
              items: [],
              goToParentAction: data.name === 'root' ? null : this.get(data.parent_id)
            };

            data.content.forEach((item) => {
              if (!item.stream_link) {
                item.stream_link = item.link;
              }

              if (item.type === 'file' && !item.stream_link) {
                return;
              }

              let file: ExplorerFile = null;
              if (item.type === 'file') {
                file = {
                  id: item.id,
                  size: item.size,
                  link: item.link,
                  streamLink: item.stream_link
                };
              }

              explorerFolderItem.items.push({
                id: item.id,
                createdAt: null,
                label: item.name,
                pluginId: 'plugin.premiumize-explorer',
                type: item.type,
                file: file,
                fetchChildren: item.type === 'folder' ? this.get(item.id) : null,
                deleteAction: item.type === 'folder' ? this.deleteFolderById(item.id) : this.deleteFileById(item.id)
              });
            });

            return explorerFolderItem;
          })
        );
      })
    );
  }

  deleteFolderById(id: string) {
    return PremiumizeFolderDeleteForm.submit(id).pipe(map(() => true));
  }

  deleteFileById(id: string) {
    return PremiumizeItemDeleteForm.submit(id).pipe(map(() => true));
  }
}
