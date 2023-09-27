# QR Code Scanner

This is a JavaScript function for scanning QR codes using the Instascan library. The function allows you to scan QR codes and copy their content to the clipboard. It also includes error handling for cases where the necessary HTML elements or cameras are not found.

## Usage

1. Import the function from: `'@lucaslab/qr-scanner'`

   ```javascript
   import { scan } from '@lucaslab/qr-scanner';
   ```

2. Call the `scan` function to initiate QR code scanning:

   ```javascript
   scan()
       .then((result) => {
           // Handle successful QR code scan
           console.log('Scanned content:', result.content);
       })
       .catch((error) => {
           // Handle errors
           console.error(error);
       });
   ```

## Function Details

### `scan()`

This function initiates QR code scanning using the Instascan library. It returns a promise that resolves when a QR code is successfully scanned or rejects with an error in case of failure.

#### Parameters

`cameraIndex` for selecting a different camera.

#### Returns

- Resolves with an object containing the scanned content:
  - `content` (string): The content of the scanned QR code.

#### Errors

- `ElementPreviewNotFound`: If the HTML element with the ID 'preview' (used for displaying the camera feed) is not found in the document, this error is thrown.

- `NoCameraFoundError`: If no cameras are found on the device, this error is thrown.

## Setup

Before using this function, make sure to set up your HTML as follows:

```html
<video id="preview"></video>
```

This code defines the video element with the ID 'preview' that the function uses for displaying the camera feed.

## Dependencies

This function relies on the Instascan library, so you should make sure to include it in your project and load it before using this function.

## Example

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>QR Code Scanner</title>
</head>
<body>
    <video id="preview"></video>
    <script type="module">
        import { scan } from '@lucaslab/qr-scanner';

        scan()
            .then((result) => {
                console.log('Scanned content:', result.content);
            })
            .catch((error) => {
                console.error(error);
            });
    </script>
</body>
</html>
```

In this example, the HTML file includes the 'preview' video element, and the JavaScript module `your-scanner.js` contains the `scanQrCode` function. When a QR code is scanned successfully, its content is logged to the console.