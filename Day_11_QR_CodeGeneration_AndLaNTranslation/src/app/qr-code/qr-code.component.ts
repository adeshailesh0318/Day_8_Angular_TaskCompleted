import { Component } from '@angular/core';

@Component({
  selector: 'app-qr-code',
  templateUrl: './qr-code.component.html',
  styleUrls: ['./qr-code.component.css']
})
export class QrCodeComponent {

  qrData = 'https://www.google.com';

  generatedData = 'https://www.google.com';

  logoUrl: string | null = null;

  constructor() {}

  generateQRCode(): void {

    if (this.qrData.trim()) {
      this.generatedData = this.qrData.trim();
    }
  }

  onLogoSelected(event: any): void {

    const file = event.target.files[0];

    if (!file) {
      return;
    }

    const reader = new FileReader();

    reader.onload = () => {
      this.logoUrl = reader.result as string;
    };

    reader.readAsDataURL(file);
  }

  removeLogo(): void {
    this.logoUrl = null;
  }

  downloadPNG(): void {

    const qrElement = document.querySelector(
      'qrcode canvas'
    ) as HTMLCanvasElement;

    if (!qrElement) {
      return;
    }

    const link = document.createElement('a');

    link.download = 'my-qrcode.png';

    link.href = qrElement.toDataURL('image/png');

    link.click();
  }

  downloadJPEG(): void {

    const qrElement = document.querySelector(
      'qrcode canvas'
    ) as HTMLCanvasElement;

    if (!qrElement) {
      return;
    }

    const link = document.createElement('a');

    link.download = 'my-qrcode.jpg';

    link.href = qrElement.toDataURL('image/jpeg');

    link.click();
  }
}