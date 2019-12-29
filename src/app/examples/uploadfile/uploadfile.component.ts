import { Component } from '@angular/core';

@Component ({
    selector: 'app-uploadfile',
    templateUrl: './uploadfile.component.html'
})

export class UploadFileComponent {

    uploadFile(input: HTMLInputElement) {
        const file=input.files[0];
        console.log(file);
    }
}