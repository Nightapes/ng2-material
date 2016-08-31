
import {NgModule, ModuleWithProviders} from '@angular/core';
import {CommonModule} from '@angular/common';
import {MdPagination, MdPaginationControls, MdPaginationItemsPerPage, MdPaginationRange} from './pagination'
import {PaginationService} from './pagination_service';

@NgModule({
    imports: [CommonModule],
    exports: [MdPagination, MdPaginationControls, MdPaginationItemsPerPage, MdPaginationRange],
    declarations: [MdPagination, MdPaginationControls, MdPaginationItemsPerPage, MdPaginationRange],
    providers: [PaginationService]
})
export class MdPaginationModule {
    static forRoot(): ModuleWithProviders {
        return {
            ngModule: MdPaginationModule,
            providers: [
                PaginationService
            ]
        };
    }
}