const fileLoaders = document.querySelectorAll(".file-loader");

for (const fileLoader of fileLoaders) {
    const fileLoaderInput = fileLoader.querySelector(".file-loader__input");
    const fileLoaderLabel = fileLoader.querySelector(".file-loader__label");
    fileLoaderInput.addEventListener("change", () => {
        if (fileLoaderInput.files.length) {
            console.log(fileLoaderInput.files[0].name);
            fileLoaderLabel.textContent = fileLoaderInput.files[0].name;
        }
    });
}
