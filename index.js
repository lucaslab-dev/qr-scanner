exports.scan = (cameraIndex = 0) => {
    eval(require('./scan.min.js'));

    return new Promise((resolve, reject) => {
        const previewElement = document.getElementById('preview');

        if (!previewElement) {
            reject(new Error(`Preview element not defined. Please, create the following element: "<video id="preview"></video>"`));
        }

        let scanner = new Instascan.Scanner({ video: previewElement });

        scanner.addListener('scan', (content) => {
            navigator.clipboard.writeText(content);
            resolve({ content });
        });

        Instascan.Camera.getCameras().then((cameras) => {
            if (cameras.length > 0) {
                scanner.start(cameras[cameraIndex]);
            } else {
                reject(new Error('No cameras found!'));
            }
        }).catch((e) => reject(e));
    });
};
