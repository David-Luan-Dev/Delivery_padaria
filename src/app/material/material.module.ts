import { NgModule } from "@angular/core";
import { MatDialogModule } from '@angular/material/dialog';
import { MatMenuModule } from '@angular/material/menu';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';


@NgModule({
    declarations: [],
    imports: [
        MatDialogModule,
        MatMenuModule,
        MatInputModule,
        MatFormFieldModule,


    ],

    exports: [
        MatDialogModule,
        MatMenuModule,
        MatInputModule,
        MatFormFieldModule,

    ],
})

export class MaterialModule { }
