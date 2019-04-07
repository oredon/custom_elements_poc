// 子をimportする前に子でnpm run buildが必要です
import '../dist/my-component1/my-component1';
import '../dist/my-component2/my-component2';

document.addEventListener('DOMContentLoaded', () => {
    const $app = document.getElementById("app");
    $app.innerHTML = `
        <h1>親ページから子を呼びます</h1>
        <my-component1 testProp="親から呼んでます"></my-component1>
        <my-component2 testProp="親から呼んでます"></my-component1>
    `;
});