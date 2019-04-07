document.addEventListener('DOMContentLoaded', () => {
    const $app = document.getElementById("app");
    $app.innerHTML = `
        <h1>親ページから子を呼びます</h1>
        <my-component1 testProp="親から呼んでます"></my-component1>
    `;
});